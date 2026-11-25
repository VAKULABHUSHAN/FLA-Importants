// ============================================================================
// 21CSC301T - Formal Language and Automata (FLA)
// Vanilla JavaScript Controller (Navigation, Filtering, Bookmarks, Completion)
// ============================================================================

(function () {
  "use strict";

  const DATA = window.FLA_DATA;
  const STORAGE_BOOKMARKS = "fla_21csc301t_bookmarks_v1";
  const STORAGE_COMPLETED = "fla_21csc301t_completed_v1";

  const state = {
    activeSection: "overview",
    search: "",
    lessonFilter: "ALL",
    priorityFilter: "ALL",
    sourceFilter: "ALL",
    bookmarkedOnly: false,
    hideCompleted: false,
    bookmarks: new Set(loadSet(STORAGE_BOOKMARKS)),
    completed: new Set(loadSet(STORAGE_COMPLETED)),
    collapsedLessons: new Set()
  };

  function loadSet(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveSet(key, setObj) {
    try {
      localStorage.setItem(key, JSON.stringify(Array.from(setObj)));
    } catch {
      // Ignore storage quota errors
    }
  }

  // DOM References
  const navLinks = document.getElementById("navLinks");
  const navToggle = document.getElementById("navToggle");
  const toolbar = document.getElementById("toolbar");
  const searchInput = document.getElementById("searchInput");
  const priorityFilter = document.getElementById("priorityFilter");
  const sourceFilter = document.getElementById("sourceFilter");
  const lessonPills = document.getElementById("lessonPills");
  const bookmarkFilterBtn = document.getElementById("bookmarkFilterBtn");
  const bookmarkCountEl = document.getElementById("bookmarkCount");
  const hideCompletedBtn = document.getElementById("hideCompletedBtn");
  const expandAllBtn = document.getElementById("expandAllBtn");
  const collapseAllBtn = document.getElementById("collapseAllBtn");
  const printBtn = document.getElementById("printBtn");
  const toastEl = document.getElementById("toast");

  const QUESTION_SECTIONS = new Set(["lesson-wise", "eight-mark", "sixteen-mark"]);

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => toastEl.classList.remove("show"), 1800);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function priorityClass(priority) {
    if (priority === "VERY HIGH") return "badge-very-high";
    if (priority === "HIGH") return "badge-high";
    return "badge-medium";
  }

  function filterQuestions(questions, markFilter) {
    const q = state.search.trim().toLowerCase();
    return questions.filter((item) => {
      if (markFilter && item.markCategory !== markFilter) return false;
      if (state.lessonFilter !== "ALL" && String(item.lessonId) !== state.lessonFilter) return false;
      if (state.priorityFilter !== "ALL" && item.priority !== state.priorityFilter) return false;
      if (state.sourceFilter !== "ALL" && item.sourceType !== state.sourceFilter) return false;
      if (state.bookmarkedOnly && !state.bookmarks.has(item.id)) return false;
      if (state.hideCompleted && state.completed.has(item.id)) return false;
      if (q) {
        const haystack = [
          item.topic,
          item.question,
          item.priorityReason,
          item.sourceType,
          item.years.join(" "),
          item.subtopics.join(" ")
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }

  function renderQuestionCard(item, indexNumber) {
    const isBookmarked = state.bookmarks.has(item.id);
    const isCompleted = state.completed.has(item.id);
    const yearsText = item.appearedInPYQ && item.years.length
      ? item.years.join(", ")
      : "Not in the 6 analyzed PYQs (Syllabus / Notes)";

    const subtopicHtml = item.subtopics
      .map((st) => `<span class="subtopic-chip">${escapeHtml(st)}</span>`)
      .join("");

    return `
      <article class="q-card ${isCompleted ? "completed" : ""}" data-qid="${escapeHtml(item.id)}">
        <div class="q-top">
          <div class="q-badges">
            <span class="q-num">Q${indexNumber} · Lesson ${item.lessonId}</span>
            <span class="badge ${priorityClass(item.priority)}">${escapeHtml(item.priority)} PRIORITY</span>
            <span class="badge badge-marks">${escapeHtml(item.historicalMarks)}</span>
            <span class="badge badge-source">${escapeHtml(item.sourceType)}</span>
          </div>
          <div class="q-actions">
            <button class="q-btn ${isBookmarked ? "bookmarked" : ""}" data-action="bookmark" data-id="${escapeHtml(item.id)}" type="button">
              ${isBookmarked ? "★ Saved" : "☆ Save"}
            </button>
            <button class="q-btn ${isCompleted ? "done" : ""}" data-action="complete" data-id="${escapeHtml(item.id)}" type="button">
              ${isCompleted ? "✓ Done" : "Mark Done"}
            </button>
            <button class="q-btn" data-action="copy" data-id="${escapeHtml(item.id)}" type="button">
              Copy
            </button>
          </div>
        </div>

        <div class="q-topic">${escapeHtml(item.topic)}</div>
        <p class="q-text">${escapeHtml(item.question)}</p>

        <div class="q-meta">
          <div><strong>Priority Reason:</strong> ${escapeHtml(item.priorityReason)}</div>
          <div>
            <strong>Historical Appearance:</strong>
            ${item.appearedInPYQ ? `${item.appearancesCount} paper(s)` : "Lesson-based"} ·
            <strong>Years:</strong> ${escapeHtml(yearsText)}
          </div>
          <div>
            <strong>Subtopics to Prepare:</strong>
            <div class="subtopic-list">${subtopicHtml}</div>
          </div>
        </div>
      </article>
    `;
  }

  function renderLessonAccordion(lesson, questionsForLesson, includeInsights) {
    const isCollapsed = state.collapsedLessons.has(String(lesson.id));
    const cardsHtml = questionsForLesson.length
      ? `<div class="questions-stack">
          ${questionsForLesson.map((q, idx) => renderQuestionCard(q, idx + 1)).join("")}
         </div>`
      : `<div class="empty-state">No questions in this lesson match the current filters.</div>`;

    const insightsHtml = includeInsights
      ? `
        <div class="lesson-insights">
          <div class="insight-box">
            <h4>Very Important Topics</h4>
            <ul>${lesson.veryImportantTopics.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
          </div>
          <div class="insight-box">
            <h4>Frequently Repeated Concepts</h4>
            <ul>${lesson.frequentlyRepeatedConcepts.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>
          </div>
        </div>
      `
      : "";

    return `
      <div class="lesson-block ${isCollapsed ? "collapsed" : ""}" data-lesson-block="${lesson.id}">
        <button class="lesson-header" type="button" data-toggle-lesson="${lesson.id}" aria-expanded="${!isCollapsed}">
          <div class="lesson-header-left">
            <span class="lesson-tag">${escapeHtml(lesson.number)} · ${escapeHtml(lesson.hours)}</span>
            <h3 class="lesson-title">${escapeHtml(lesson.title)}</h3>
          </div>
          <div class="lesson-header-right">
            <span class="lesson-count">${questionsForLesson.length} Question${questionsForLesson.length === 1 ? "" : "s"}</span>
            <span class="chevron" aria-hidden="true">▼</span>
          </div>
        </button>
        <div class="lesson-body">
          ${insightsHtml}
          ${cardsHtml}
        </div>
      </div>
    `;
  }

  function renderOverview() {
    const totalQ = DATA.questions.length;
    const doneQ = DATA.questions.filter((q) => state.completed.has(q.id)).length;
    const pct = totalQ ? Math.round((doneQ / totalQ) * 100) : 0;
    const eightCount = DATA.questions.filter((q) => q.markCategory === "8").length;
    const sixteenCount = DATA.questions.filter((q) => q.markCategory === "16").length;

    const papersHtml = DATA.meta.pyqPapers
      .map((p) => `<span class="paper-chip">${escapeHtml(p.label)} (${escapeHtml(p.code)})</span>`)
      .join("");

    const lessonCardsHtml = DATA.lessons
      .map((lesson) => {
        const count = DATA.questions.filter((q) => q.lessonId === lesson.id).length;
        return `
          <div class="nav-card">
            <div>
              <span class="card-kicker">${escapeHtml(lesson.number)} · ${count} Questions</span>
              <h3>${escapeHtml(lesson.title)}</h3>
              <p>${escapeHtml(lesson.summary)}</p>
            </div>
            <button class="card-link-btn" type="button" data-jump-lesson="${lesson.id}">
              Study Lesson ${lesson.id} →
            </button>
          </div>
        `;
      })
      .join("");

    document.getElementById("section-overview").innerHTML = `
      <div class="hero-card">
        <span class="hero-kicker">${escapeHtml(DATA.meta.subjectCode)} · ${escapeHtml(DATA.meta.regulation)}</span>
        <h1>${escapeHtml(DATA.meta.subjectName)} — Important Questions</h1>
        <p class="hero-intro">${escapeHtml(DATA.meta.intro)}</p>

        <div class="meta-grid">
          <div class="meta-item">
            <span class="meta-label">Subject Code</span>
            <span class="meta-value">${escapeHtml(DATA.meta.subjectCode)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Semester</span>
            <span class="meta-value">${escapeHtml(DATA.meta.semester)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">PYQ Papers Analyzed</span>
            <span class="meta-value">${DATA.meta.pyqCount} University Papers</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Lessons Covered</span>
            <span class="meta-value">${DATA.lessons.length} Units (${totalQ} Curated Questions)</span>
          </div>
        </div>

        <div class="papers-list">
          <span class="papers-label">Analyzed PYQs:</span>
          ${papersHtml}
        </div>

        <div class="progress-wrap">
          <div class="progress-header">
            <span>Preparation Progress (${doneQ} / ${totalQ} Questions Completed)</span>
            <span>${pct}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${pct}%"></div>
          </div>
        </div>
      </div>

      <h2 class="section-heading">Quick Access by Exam Section</h2>
      <p class="section-sub">Jump directly to 8-Mark (Part B) or 16-Mark / 15-Mark (Part C) question banks.</p>
      <div class="overview-grid">
        <div class="nav-card nav-card-accent">
          <div>
            <span class="card-kicker">Part B · ${eightCount} Questions</span>
            <h3>8-Mark Questions Bank</h3>
            <p>Lesson-wise Part B questions covering DFA/NFA, Moore/Mealy, CFG simplification, CNF/GNF, PDA, TM, PCP, and P/NP.</p>
          </div>
          <button class="card-link-btn" type="button" data-jump-section="eight-mark">Open 8-Mark Questions →</button>
        </div>
        <div class="nav-card nav-card-accent">
          <div>
            <span class="card-kicker">Part C (15 Marks) &amp; Extended · ${sixteenCount} Questions</span>
            <h3>16-Mark Questions Bank</h3>
            <p>Long-answer derivations, Pumping Lemma proofs, Rijk's method, full CFG normalization, TM constructions, and MPCP → PCP reductions.</p>
          </div>
          <button class="card-link-btn" type="button" data-jump-section="sixteen-mark">Open 16-Mark Questions →</button>
        </div>
      </div>

      <h2 class="section-heading">Lessons Covered</h2>
      <p class="section-sub">Select any unit to inspect its very important topics, repeated concepts, and curated questions.</p>
      <div class="overview-grid">
        ${lessonCardsHtml}
      </div>
    `;
  }

  function renderLessonWise() {
    const filtered = filterQuestions(DATA.questions, null);
    const lessonsToShow = DATA.lessons.filter(
      (l) => state.lessonFilter === "ALL" || String(l.id) === state.lessonFilter
    );

    const blocksHtml = lessonsToShow
      .map((lesson) => {
        const qs = filtered.filter((q) => q.lessonId === lesson.id);
        return renderLessonAccordion(lesson, qs, true);
      })
      .join("");

    document.getElementById("section-lesson-wise").innerHTML = `
      <h2 class="section-heading">Lesson-Wise Important Questions</h2>
      <p class="section-sub">Complete unit-by-unit breakdown combining all 8-Mark and 16-Mark / 15-Mark questions from the 6 PYQs and unit notes.</p>
      ${blocksHtml || '<div class="empty-state">No lessons match your current filter.</div>'}
    `;
  }

  function renderEightMark() {
    const filtered = filterQuestions(DATA.questions, "8");
    const lessonsToShow = DATA.lessons.filter(
      (l) => state.lessonFilter === "ALL" || String(l.id) === state.lessonFilter
    );

    const blocksHtml = lessonsToShow
      .map((lesson) => {
        const qs = filtered.filter((q) => q.lessonId === lesson.id);
        return renderLessonAccordion(lesson, qs, false);
      })
      .join("");

    document.getElementById("section-eight-mark").innerHTML = `
      <h2 class="section-heading">8-Mark Questions (Part B)</h2>
      <p class="section-sub">Dedicated Part B (8-mark) question bank organized lesson-wise with priority and PYQ appearance history.</p>
      ${blocksHtml}
    `;
  }

  function renderSixteenMark() {
    const filtered = filterQuestions(DATA.questions, "16");
    const lessonsToShow = DATA.lessons.filter(
      (l) => state.lessonFilter === "ALL" || String(l.id) === state.lessonFilter
    );

    const blocksHtml = lessonsToShow
      .map((lesson) => {
        const qs = filtered.filter((q) => q.lessonId === lesson.id);
        return renderLessonAccordion(lesson, qs, false);
      })
      .join("");

    document.getElementById("section-sixteen-mark").innerHTML = `
      <h2 class="section-heading">16-Mark Questions (Part C — 15 Marks &amp; Extended)</h2>
      <p class="section-sub">Long-answer, proof, and multi-part questions. University papers allocate 15 marks in Part C (labeled accurately on each card).</p>
      ${blocksHtml}
    `;
  }

  function renderMostRepeated() {
    const html = DATA.mostRepeated
      .map(
        (item) => `
      <article class="repeated-card">
        <div class="rank-badge">#${item.rank}</div>
        <div class="repeated-content">
          <div class="q-badges" style="margin-bottom: 0.35rem;">
            <span class="q-num">Lesson ${item.lessonId}</span>
            <span class="badge badge-very-high">${escapeHtml(item.appearances)}</span>
            <span class="badge badge-marks">${escapeHtml(item.markType)}</span>
          </div>
          <h3>${escapeHtml(item.concept)}</h3>
          <p><strong>Years Appeared:</strong> ${escapeHtml(item.years.join(", "))}</p>
          <p>${escapeHtml(item.note)}</p>
        </div>
      </article>
    `
      )
      .join("");

    document.getElementById("section-most-repeated").innerHTML = `
      <h2 class="section-heading">Most Repeated Questions &amp; Concepts</h2>
      <p class="section-sub">Top recurring examination concepts ranked by verified appearances across the 6 analyzed PYQ papers.</p>
      <div class="repeated-list">${html}</div>
    `;
  }

  function renderRevision() {
    const html = DATA.lastMinuteRevision
      .map(
        (unit) => `
      <article class="revision-card">
        <h3>${escapeHtml(unit.title)}</h3>
        <ul>
          ${unit.items.map((pt) => `<li>${escapeHtml(pt)}</li>`).join("")}
        </ul>
      </article>
    `
      )
      .join("");

    document.getElementById("section-revision").innerHTML = `
      <h2 class="section-heading">Last-Minute Revision Sheet</h2>
      <p class="section-sub">Concise high-yield formulas, tuples, normal forms, and theorems across all 5 units.</p>
      <div class="revision-grid">${html}</div>
    `;
  }

  function renderActiveSection() {
    bookmarkCountEl.textContent = state.bookmarks.size;

    const showToolbar = QUESTION_SECTIONS.has(state.activeSection);
    toolbar.classList.toggle("hidden", !showToolbar);

    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.section === state.activeSection);
    });

    document.querySelectorAll(".page-section").forEach((sec) => {
      sec.classList.toggle("active", sec.id === `section-${state.activeSection}`);
    });

    if (state.activeSection === "overview") renderOverview();
    else if (state.activeSection === "lesson-wise") renderLessonWise();
    else if (state.activeSection === "eight-mark") renderEightMark();
    else if (state.activeSection === "sixteen-mark") renderSixteenMark();
    else if (state.activeSection === "most-repeated") renderMostRepeated();
    else if (state.activeSection === "revision") renderRevision();
  }

  function switchSection(sectionId) {
    state.activeSection = sectionId;
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    renderActiveSection();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Event Listeners
  navLinks.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-btn");
    if (!btn) return;
    switchSection(btn.dataset.section);
  });

  document.querySelector(".brand").addEventListener("click", (e) => {
    e.preventDefault();
    switchSection("overview");
  });

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderActiveSection();
  });

  priorityFilter.addEventListener("change", (e) => {
    state.priorityFilter = e.target.value;
    renderActiveSection();
  });

  sourceFilter.addEventListener("change", (e) => {
    state.sourceFilter = e.target.value;
    renderActiveSection();
  });

  lessonPills.addEventListener("click", (e) => {
    const pill = e.target.closest(".pill");
    if (!pill) return;
    state.lessonFilter = pill.dataset.lesson;
    lessonPills.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    renderActiveSection();
  });

  bookmarkFilterBtn.addEventListener("click", () => {
    state.bookmarkedOnly = !state.bookmarkedOnly;
    bookmarkFilterBtn.classList.toggle("active", state.bookmarkedOnly);
    renderActiveSection();
  });

  hideCompletedBtn.addEventListener("click", () => {
    state.hideCompleted = !state.hideCompleted;
    hideCompletedBtn.classList.toggle("active", state.hideCompleted);
    renderActiveSection();
  });

  expandAllBtn.addEventListener("click", () => {
    state.collapsedLessons.clear();
    renderActiveSection();
  });

  collapseAllBtn.addEventListener("click", () => {
    DATA.lessons.forEach((l) => state.collapsedLessons.add(String(l.id)));
    renderActiveSection();
  });

  printBtn.addEventListener("click", () => {
    window.print();
  });

  // Delegated clicks inside main content (cards, accordions, overview jump buttons)
  document.querySelector("main.container").addEventListener("click", (e) => {
    const jumpSec = e.target.closest("[data-jump-section]");
    if (jumpSec) {
      switchSection(jumpSec.dataset.jumpSection);
      return;
    }

    const jumpLesson = e.target.closest("[data-jump-lesson]");
    if (jumpLesson) {
      const lid = jumpLesson.dataset.jumpLesson;
      state.lessonFilter = lid;
      state.collapsedLessons.delete(lid);
      lessonPills.querySelectorAll(".pill").forEach((p) => {
        p.classList.toggle("active", p.dataset.lesson === lid);
      });
      switchSection("lesson-wise");
      return;
    }

    const toggleBtn = e.target.closest("[data-toggle-lesson]");
    if (toggleBtn) {
      const lid = toggleBtn.dataset.toggleLesson;
      if (state.collapsedLessons.has(lid)) state.collapsedLessons.delete(lid);
      else state.collapsedLessons.add(lid);
      renderActiveSection();
      return;
    }

    const actionBtn = e.target.closest("[data-action]");
    if (!actionBtn) return;
    const action = actionBtn.dataset.action;
    const qid = actionBtn.dataset.id;

    if (action === "bookmark") {
      if (state.bookmarks.has(qid)) {
        state.bookmarks.delete(qid);
        showToast("Removed from bookmarks");
      } else {
        state.bookmarks.add(qid);
        showToast("Question bookmarked");
      }
      saveSet(STORAGE_BOOKMARKS, state.bookmarks);
      renderActiveSection();
    } else if (action === "complete") {
      if (state.completed.has(qid)) {
        state.completed.delete(qid);
        showToast("Marked as incomplete");
      } else {
        state.completed.add(qid);
        showToast("Marked as completed");
      }
      saveSet(STORAGE_COMPLETED, state.completed);
      renderActiveSection();
    } else if (action === "copy") {
      const qObj = DATA.questions.find((q) => q.id === qid);
      if (!qObj) return;
      const copyText = `[Lesson ${qObj.lessonId} | ${qObj.historicalMarks}] ${qObj.topic}: ${qObj.question}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(copyText).then(
          () => showToast("Question copied to clipboard"),
          () => showToast("Copy failed — please copy manually")
        );
      } else {
        showToast("Clipboard unavailable in this browser");
      }
    }
  });

  // Initial render
  renderActiveSection();
})();
