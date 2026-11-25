// ============================================================================
// 21CSC301T - Formal Language and Automata (FLA)
// Structured Question Bank extracted from 6 University PYQ Papers & Unit Notes
// Papers Analyzed: May 2024, Jul 2024, Nov 2024, May 2025, Jul 2025 (P1), Jul 2025 (P2)
// ============================================================================

window.FLA_DATA = {
  meta: {
    subjectName: "Formal Language and Automata",
    shortName: "FLA",
    subjectCode: "21CSC301T",
    semester: "Fifth Semester (B.Tech / M.Tech Integrated)",
    regulation: "Regulations 2021",
    pyqCount: 6,
    pyqPapers: [
      { id: "may-2024", label: "May 2024", code: "15MF5-21CSC301T" },
      { id: "jul-2024", label: "Jul 2024", code: "08JA521CSC301T" },
      { id: "nov-2024", label: "Nov 2024", code: "26NA521CSC301T" },
      { id: "may-2025", label: "May 2025", code: "31MA5-21CSC301T" },
      { id: "jul-2025-p1", label: "Jul 2025 (P1)", code: "27JA5-21CSC301T" },
      { id: "jul-2025-p2", label: "Jul 2025 (P2)", code: "19JA5-21CSC301T" }
    ],
    examPattern: "Part A: 20 × 1 = 20 Marks | Part B: 5 × 8 = 40 Marks | Part C: 1 × 15 = 15 Marks (Total: 75 Marks)",
    intro:
      "A comprehensive, unit-wise examination preparation bank for 21CSC301T (Formal Language and Automata). Every historical question is traced directly to the six analyzed university question papers (May 2024 – July 2025) and mapped against the official syllabus and unit lecture notes."
  },

  lessons: [
    {
      id: 1,
      number: "Lesson 1",
      title: "Finite Automata and Regular Expressions",
      hours: "9 Hours",
      summary:
        "Covers Deterministic & Non-Deterministic Finite Automata (DFA/NFA), ε-NFA, subset construction, Regular Expressions, Thompson's construction, state elimination / Arden's / Rijk's method, Two-Way Finite Automata, Moore & Mealy machines and their conversions, and mathematical induction proofs.",
      veryImportantTopics: [
        "NFA to DFA conversion (Subset Construction using transition tables)",
        "DFA construction for string/divisibility/substring languages",
        "ε-NFA to DFA conversion using ε-closure",
        "Regular Expression to ε-NFA / Minimized DFA conversion",
        "DFA to Regular Expression (Rijk's / State Elimination method)",
        "Moore and Mealy machines (design, comparison, and inter-conversion)"
      ],
      frequentlyRepeatedConcepts: [
        "Subset construction from NFA transition table to equivalent DFA (Jul 2024, Nov 2024, Jul 2025 P1, Jul 2025 P2)",
        "DFA design for pattern/count constraints over {0,1} or {a,b} (May 2024, Nov 2024, May 2025, Jul 2025 P2)",
        "RE ↔ Finite Automata conversions (May 2024, Jul 2024, Nov 2024, Jul 2025 P1, Jul 2025 P2)",
        "Moore ↔ Mealy machine construction and conversion (Nov 2024, May 2025, Jul 2025 P1)"
      ],
      subtopics: [
        "Formal 5-tuple definition of DFA & NFA (Q, Σ, δ, q₀, F)",
        "Extended transition function δ*(q, w) and language acceptance L(M)",
        "ε-closure computation and ε-NFA to DFA conversion",
        "Regular Expression identities and algebraic laws",
        "Thompson's construction (RE → ε-NFA) and State Elimination / Rijk's method (DFA → RE)",
        "Two-Way Finite Automata (2DFA)",
        "Moore vs Mealy machines (6-tuple definition, output length n+1 vs n, inter-conversion)",
        "Applications of Finite Automata & Mathematical Induction proofs"
      ]
    },
    {
      id: 2,
      number: "Lesson 2",
      title: "Regular Sets and Context-Free Grammars",
      hours: "9 Hours",
      summary:
        "Covers closure properties of regular sets, Pumping Lemma for regular languages, DFA minimization (table-filling algorithm), Context-Free Grammars (CFG), leftmost/rightmost derivations, parse trees, grammar ambiguity, CFG simplification (useless, unit, and ε-productions), Chomsky Normal Form (CNF), and Greibach Normal Form (GNF).",
      veryImportantTopics: [
        "Simplification of CFG (removal of ε-productions, unit productions, and useless symbols)",
        "Conversion of CFG to Greibach Normal Form (GNF)",
        "Conversion of CFG to Chomsky Normal Form (CNF)",
        "DFA Minimization using Table-Filling Algorithm",
        "Ambiguous vs Unambiguous grammars, LMD, RMD, and Parse Trees",
        "Closure properties of Regular Sets & Pumping Lemma for Regular Languages"
      ],
      frequentlyRepeatedConcepts: [
        "CFG simplification: removing null (ε), unit, and useless productions (May 2024, Nov 2024, May 2025, Jul 2025 P2)",
        "CFG to GNF conversion (Jul 2024, Nov 2024, May 2025, Jul 2025 P1, Jul 2025 P2)",
        "CFG to CNF conversion (Nov 2024, Jul 2025 P1, Jul 2025 P2)",
        "Ambiguity check & LMD/RMD/Parse Tree construction (May 2024, Nov 2024, Jul 2025 P1)",
        "DFA minimization using table-filling method (May 2025, Jul 2025 P1)"
      ],
      subtopics: [
        "Properties of Regular Sets (Union, Intersection, Complement, Difference, Kleene Closure)",
        "Pumping Lemma for Regular Languages (proving non-regularity)",
        "Minimization of DFA (Myhill-Nerode / Table-Filling Algorithm)",
        "CFG formal 4-tuple (V, T, P, S) and language generation",
        "Leftmost Derivation (LMD), Rightmost Derivation (RMD), and Parse Trees",
        "Ambiguous grammars and ambiguity removal",
        "CFG Simplification: Useless symbols (non-generating & non-reachable), Unit productions, Null (ε) productions",
        "Chomsky Normal Form (CNF: A → BC | a)",
        "Greibach Normal Form (GNF: A → aα)"
      ]
    },
    {
      id: 3,
      number: "Lesson 3",
      title: "Pushdown Automata and Parsing Algorithms",
      hours: "9 Hours",
      summary:
        "Covers Pushdown Automata (7-tuple definition, Instantaneous Descriptions, transition diagrams), acceptance by final state vs empty stack, DPDA vs NPDA, equivalence of PDA and CFG (CFG → PDA and PDA → CFG), Pumping Lemma for CFLs, closure properties & decision algorithms for CFLs, and overview of Top-Down and Bottom-Up parsing.",
      veryImportantTopics: [
        "Constructing PDA for Context-Free Languages (e.g., aⁿbⁿ, wwᴿ, equal a's & b's, aⁿbᵐcᵐdⁿ)",
        "CFG to equivalent PDA conversion & string acceptance trace via ID",
        "PDA to equivalent CFG conversion",
        "Deterministic PDA (DPDA) vs Non-Deterministic PDA (NPDA)",
        "Pumping Lemma for Context-Free Languages (proving non-CFLs like aⁿbⁿcⁿ)",
        "Acceptance by Final State vs Empty Stack & Top-Down / Bottom-Up Parsing overview"
      ],
      frequentlyRepeatedConcepts: [
        "Design/Construct PDA for given CFL + Instantaneous Description (ID) trace (May 2024, Jul 2024, Nov 2024, May 2025, Jul 2025 P1)",
        "CFG to PDA conversion and string acceptance testing (Nov 2024, May 2025, Jul 2025 P1)",
        "PDA to CFG conversion using transition rules (Jul 2025 P1, Jul 2025 P2)",
        "DPDA vs NPDA comparison and language classes (Jul 2024, May 2025)"
      ],
      subtopics: [
        "Basic structure and 7-tuple formal definition of PDA (Q, Σ, Γ, δ, q₀, Z₀, F)",
        "Instantaneous Description (ID): (q, w, γ) and moves ⊢",
        "Acceptance by Final State vs Acceptance by Empty Stack",
        "Deterministic PDA (DPDA) vs Non-Deterministic PDA (NPDA)",
        "Conversion of CFG to PDA and PDA to CFG",
        "Pumping Lemma for CFLs and applications",
        "Closure properties and decision algorithms for CFLs",
        "Overview of Top-Down Parsing and Bottom-Up Parsing"
      ]
    },
    {
      id: 4,
      number: "Lesson 4",
      title: "Turing Machines",
      hours: "9 Hours",
      summary:
        "Covers the Turing Machine model (7-tuple definition, Instantaneous Descriptions, transition diagrams), TM construction for language recognition and computable functions (addition, proper subtraction, multiplication, palindromes, aⁿbⁿcⁿ, wwᴿ, www), TM variations (multi-tape, multi-track, multi-head, storage in finite control), Church-Turing thesis, Universal Turing Machine, and Recursive vs Recursively Enumerable languages.",
      veryImportantTopics: [
        "TM construction for language recognition (aⁿbⁿcⁿ, wwᴿ, palindromes, substring 'aba', 0ⁿ1ⁿ0ⁿ, www)",
        "TM design for arithmetic functions (unary addition, proper subtraction m − n, multiplication)",
        "Formal 7-tuple definition and Instantaneous Description (ID) of TM",
        "Variations/Extensions of TM (Multi-tape, Multi-track, Multi-head, Storage in finite control)",
        "Universal Turing Machine (UTM) & Binary encoding of TMs",
        "Recursive & Recursively Enumerable (RE) languages and their closure properties"
      ],
      frequentlyRepeatedConcepts: [
        "Construct TM for language recognition: aⁿbⁿcⁿ, wwᴿ, palindromes, 0ⁿ1ⁿ0ⁿ (May 2024, Jul 2024, Nov 2024, May 2025, Jul 2025 P1, Jul 2025 P2)",
        "Design TM for arithmetic operations: addition, proper subtraction, multiplication (May 2024, Jul 2024, Nov 2024, May 2025, Jul 2025 P1, Jul 2025 P2)",
        "Extensions/Variations of TM & Universal Turing Machine (May 2025, Jul 2025 P2)",
        "Closure properties of Recursive languages (Union, Complement) (May 2024, May 2025)"
      ],
      subtopics: [
        "Formal 7-tuple definition of Turing Machine (Q, Σ, Γ, δ, q₀, B, F)",
        "Instantaneous Description (ID) and halting states (accept / reject)",
        "TM constructions for languages (aⁿbⁿcⁿ, wwᴿ, palindromes, substring checks)",
        "TM constructions for computable functions (addition, proper subtraction, multiplication, string replacement)",
        "Storage in finite control, Multi-track, Multi-tape, and Multi-head TMs",
        "Church-Turing Thesis",
        "Universal Turing Machine (UTM) and TM binary encoding <M, w>",
        "Recursive vs Recursively Enumerable languages and closure properties"
      ]
    },
    {
      id: 5,
      number: "Lesson 5",
      title: "Introduction to Computational Complexity",
      hours: "9 Hours",
      summary:
        "Covers Decidable and Undecidable problems, Recursive vs Recursively Enumerable languages, Halting Problem, Diagonalization Language (Ld), Universal Language (Lu), Emptiness Language (Le), Rice's Theorem, Post's Correspondence Problem (PCP) and Modified PCP (MPCP), Time & Space complexity of TMs, Complexity classes P, NP, NP-Complete, and NP-Hard.",
      veryImportantTopics: [
        "Post's Correspondence Problem (PCP) & Modified PCP (MPCP) — solving instances & undecidability proof",
        "Complexity Classes: P, NP, NP-Complete, and NP-Hard with relationships and examples",
        "Rice's Theorem and Halting Problem of Turing Machines",
        "Decidable vs Undecidable problems & Recursive vs RE languages",
        "Undecidability of Language Emptiness (Le) and Reductions (MPCP → PCP)"
      ],
      frequentlyRepeatedConcepts: [
        "Solve a given PCP instance / Prove PCP is undecidable (May 2024, Jul 2024, May 2025, Jul 2025 P1, Jul 2025 P2)",
        "Explain Class P, NP, NP-Complete, and NP-Hard with examples & relationship diagram (May 2024, Jul 2024, Nov 2024, May 2025)",
        "Rice's Theorem and Halting Problem (Jul 2024, Nov 2024, Jul 2025 P1)",
        "Decidable vs Undecidable problems & Le non-recursiveness (May 2025, Jul 2025 P1, Jul 2025 P2)"
      ],
      subtopics: [
        "Recursive (Decidable) vs Recursively Enumerable (Turing-Recognizable) languages",
        "Decidable and Undecidable problems with examples",
        "Diagonalization Language (Ld), Universal Language (Lu), and Emptiness Language (Le)",
        "Halting Problem of Turing Machines",
        "Rice's Theorem for recursively enumerable index sets",
        "Post's Correspondence Problem (PCP) & Modified PCP (MPCP)",
        "Time and Space complexity of Turing Machines",
        "Class P, Class NP, Polynomial-time reductions, NP-Complete, and NP-Hard problems (SAT, TSP, Subset Sum)"
      ]
    }
  ],

  // ============================================================================
  // QUESTIONS BANK (markCategory: "8" or "16")
  // sourceType: "Exact PYQ" | "Rephrased Repeated PYQ" | "Lesson-Based Important"
  // priority: "VERY HIGH" | "HIGH" | "MEDIUM"
  // ============================================================================
  questions: [
    // ==================== LESSON 1: 8-MARK ====================
    {
      id: "L1-8-1",
      lessonId: 1,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "NFA to DFA Conversion (Subset Construction)",
      question:
        "Construct an equivalent DFA for a given NFA using subset construction / transition tables, and verify string acceptance for both NFA and DFA (e.g., NFA where the second-last symbol is '1', or given δ transition table over {0, 1}).",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared in 4 out of 6 analyzed PYQs (Jul 2024 Q21b, Nov 2024 Q21a, Jul 2025 P1 Q21b-i, Jul 2025 P2 Q21b).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 4,
      years: ["Jul 2024 (Q21b)", "Nov 2024 (Q21a)", "Jul 2025 P1 (Q21b.i)", "Jul 2025 P2 (Q21b)"],
      subtopics: ["NFA 5-tuple", "Subset construction", "Transition table & diagram", "String acceptance check (e.g., 100010, 100000)"]
    },
    {
      id: "L1-8-2",
      lessonId: 1,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "DFA Construction for Language Acceptance",
      question:
        "Construct a Deterministic Finite Automaton (DFA) for a given language constraint: (a) strings with an odd number of 1's and even number of 0's over {0,1}, or (b) all strings over {x, y} that never contain the substring 'xxy', with formal 5-tuple description.",
      priority: "VERY HIGH",
      priorityReason:
        "Core Unit 1 construction tested in May 2024 (Q21a), May 2025 (Q21a), and repeatedly highlighted in Part A across papers.",
      sourceType: "Exact PYQ",
      appearedInPYQ: true,
      appearancesCount: 2,
      years: ["May 2024 (Q21a)", "May 2025 (Q21a)"],
      subtopics: ["Formal 5-tuple (Q, Σ, δ, q₀, F)", "State design for parity & forbidden substrings", "Transition diagram & table"]
    },
    {
      id: "L1-8-3",
      lessonId: 1,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Moore and Mealy Machines (Design & Equivalence)",
      question:
        "Compare and contrast Moore and Mealy machines. Design a Moore machine (e.g., computing divisibility of a binary number by 3, or printing 'a' for '10', 'b' for '11', 'c' otherwise) and convert it to an equivalent Mealy machine; or construct a Mealy machine for 2's complement of any binary input.",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared in 3 consecutive exam sessions (Nov 2024 Q21b, May 2025 Q21b.1, Jul 2025 P1 Q21a.ii & Q21b.ii).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 3,
      years: ["Nov 2024 (Q21b)", "May 2025 (Q21b.1)", "Jul 2025 P1 (Q21a.ii, Q21b.ii)"],
      subtopics: ["Moore 6-tuple vs Mealy 6-tuple", "Moore → Mealy conversion", "Mealy → Moore conversion", "Output tracing"]
    },
    {
      id: "L1-8-4",
      lessonId: 1,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Regular Expression to ε-NFA / Minimized DFA",
      question:
        "Convert the given Regular Expression into an ε-NFA using Thompson's construction (e.g., 10 + (0 + 11)0*1) or directly into a minimized DFA (e.g., a(a+b+c)*(a+b+c)). Also prove that for every regular expression r, there exists an ε-NFA accepting L(r).",
      priority: "VERY HIGH",
      priorityReason:
        "Tested in 3 PYQ papers (May 2024 Q21b, Jul 2024 Q22a, Jul 2025 P2 Q21a) and foundational to CO-1.",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 3,
      years: ["May 2024 (Q21b)", "Jul 2024 (Q22a)", "Jul 2025 P2 (Q21a)"],
      subtopics: ["Thompson's construction", "RE → ε-NFA → DFA", "Proof of RE-to-ε-NFA equivalence"]
    },
    {
      id: "L1-8-5",
      lessonId: 1,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "ε-NFA to DFA Conversion via ε-Closure",
      question:
        "Compute the ε-closure of each state for a given ε-NFA transition table and convert the ε-NFA into an equivalent Deterministic Finite Automaton (DFA).",
      priority: "HIGH",
      priorityReason:
        "Directly tested in Jul 2025 P1 (Q21a.i) and Part A (Q2) of Jul 2025 P1; key algorithm in Unit 1 notes.",
      sourceType: "Exact PYQ",
      appearedInPYQ: true,
      appearancesCount: 1,
      years: ["Jul 2025 P1 (Q21a.i)"],
      subtopics: ["ε-closure(q)", "Extended transition δ*(q, a)", "Subset construction with ε-closures"]
    },
    {
      id: "L1-8-6",
      lessonId: 1,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Mathematical Induction Proofs in Automata",
      question:
        "Prove by Mathematical Induction that 1² + 2² + 3² + ... + n² = n(n + 1)(2n + 1) / 6 for all positive integers n ≥ 1. Explain the basis step, inductive hypothesis, and inductive step.",
      priority: "MEDIUM",
      priorityReason:
        "Appeared once in Jul 2024 (Q21a) and covered in Unit 1 PPT (pages 11–17) as foundational proof technique.",
      sourceType: "Exact PYQ",
      appearedInPYQ: true,
      appearancesCount: 1,
      years: ["Jul 2024 (Q21a)"],
      subtopics: ["Basis step", "Inductive hypothesis", "Inductive step", "Deductive & Contradiction proofs"]
    },
    {
      id: "L1-8-7",
      lessonId: 1,
      markCategory: "8",
      historicalMarks: "Syllabus / Notes (8-Mark Format)",
      topic: "Two-Way Finite Automata & Applications of FA",
      question:
        "Explain Two-Way Finite Automata (2DFA) with its formal definition and working principle. Discuss major practical applications of Finite Automata in lexical analysis, text searching, and protocol/circuit design.",
      priority: "MEDIUM",
      priorityReason:
        "Explicitly listed in the Unit 1 syllabus (21CSC301T) and Unit 1 PPT, though less frequently asked as a full 8-mark question.",
      sourceType: "Lesson-Based Important",
      appearedInPYQ: false,
      appearancesCount: 0,
      years: [],
      subtopics: ["2DFA tape head movement (L, R, S)", "Equivalence of 2DFA and 1DFA", "Lexical analyzers & pattern matching"]
    },

    // ==================== LESSON 1: 16-MARK ====================
    {
      id: "L1-16-1",
      lessonId: 1,
      markCategory: "16",
      historicalMarks: "15 Marks (Part C)",
      topic: "DFA Construction & Conversion to Regular Expression (Rijk's Method)",
      question:
        "In an organization, an employee ID is generated over the input alphabet Σ = {a, b} such that any combination of symbols can form an ID, provided at least one 'a' is included. (a) Identify the strings of the language, (b) Construct the equivalent DFA, and (c) Convert the DFA to a Regular Expression using Rijk's method (R_ij^k).",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared as a full 15-mark Part C question in Nov 2024 (Q26) and supported by Part A R_ij^k questions.",
      sourceType: "Exact PYQ",
      appearedInPYQ: true,
      appearancesCount: 1,
      years: ["Nov 2024 (Q26)"],
      subtopics: ["Language specification", "DFA construction", "Rijk's formula R_ij^k = R_ij^(k-1) + R_ik^(k-1)(R_kk^(k-1))*R_kj^(k-1)"]
    },
    {
      id: "L1-16-2",
      lessonId: 1,
      markCategory: "16",
      historicalMarks: "15 Marks (Part C) / Combined",
      topic: "Complete RE ↔ ε-NFA ↔ DFA ↔ Minimized DFA Pipeline",
      question:
        "Given a Regular Expression (e.g., (0+1)*010(0+1)* or a(a+b+c)*(a+b+c)), (a) Construct the equivalent ε-NFA using Thompson's construction, (b) Convert the ε-NFA to a DFA using ε-closure and subset construction, (c) Minimize the resulting DFA using the table-filling algorithm, and (d) Convert the minimized DFA back to a Regular Expression using state elimination.",
      priority: "HIGH",
      priorityReason:
        "Combines the highest-weight Unit 1 & Unit 2 Part B/C transformations (Jul 2024 Q22a, Jul 2025 P1 Q21a/Q22a, Jul 2025 P2 Q21a/Q27ii).",
      sourceType: "Lesson-Based Important",
      appearedInPYQ: false,
      appearancesCount: 0,
      years: [],
      subtopics: ["Thompson's rules", "ε-closure & subset construction", "Table-filling minimization", "State elimination"]
    },

    // ==================== LESSON 2: 8-MARK ====================
    {
      id: "L2-8-1",
      lessonId: 2,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Simplification of Context-Free Grammar (CFG)",
      question:
        "Simplify the given Context-Free Grammar G by systematically eliminating (i) null (ε) productions, (ii) unit productions, and (iii) useless symbols (non-generating and non-reachable), while preserving the language generated by G (e.g., S → aA | aBB, A → aaA | ε, B → bB | bbC, C → B).",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared in 4 out of 6 PYQ papers (May 2024 Q22a, May 2025 Q22a, Jul 2025 P2 Q22a, and Jul 2025 P2 Q26.ii).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 4,
      years: ["May 2024 (Q22a)", "May 2025 (Q22a)", "Jul 2025 P2 (Q22a)", "Jul 2025 P2 (Q26.ii)"],
      subtopics: ["Nullable variables & ε-elimination", "Unit-pair closure", "Generating & reachable symbols"]
    },
    {
      id: "L2-8-2",
      lessonId: 2,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Conversion of CFG to Greibach Normal Form (GNF)",
      question:
        "Convert the given Context-Free Grammar G into its equivalent Greibach Normal Form (GNF), showing variable ordering, substitution, and left-recursion elimination steps (e.g., S → AA | a, A → SS | b; or S → XA | BB, B → b | SB, X → b, A → a).",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared in 4 out of 6 PYQ papers (Jul 2024 Q24a, May 2025 Q22b, Jul 2025 P1 Q22b.i, Jul 2025 P2 Q22b) plus Nov 2024 Part C.",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 4,
      years: ["Jul 2024 (Q24a)", "May 2025 (Q22b)", "Jul 2025 P1 (Q22b.i)", "Jul 2025 P2 (Q22b)"],
      subtopics: ["GNF form A → aα", "Elimination of left recursion", "Variable renaming A₁ < A₂ < ... < Aₙ", "Back-substitution"]
    },
    {
      id: "L2-8-3",
      lessonId: 2,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Ambiguity Check, Derivations (LMD/RMD) & Parse Trees",
      question:
        "Test whether the given CFG is ambiguous by constructing two distinct leftmost derivations (LMD), rightmost derivations (RMD), or parse trees for a sample string (e.g., S → AS | A, A → aAb | c; or S → 0S1S | 1S0S | ε; or E → +EE | *EE | -EE | x | y for w = +*-xyxy).",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared in 3 PYQ papers (May 2024 Q22b, Nov 2024 Q22a.i, Jul 2025 P1 Q22b.ii) and Part A MCQs.",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 3,
      years: ["May 2024 (Q22b)", "Nov 2024 (Q22a.i)", "Jul 2025 P1 (Q22b.ii)"],
      subtopics: ["Leftmost Derivation (LMD)", "Rightmost Derivation (RMD)", "Parse tree construction", "Definition of ambiguous grammar"]
    },
    {
      id: "L2-8-4",
      lessonId: 2,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Minimization of DFA (Table-Filling Algorithm)",
      question:
        "Minimize the given Deterministic Finite Automaton (DFA) using the Table-Filling Algorithm (Myhill-Nerode equivalence), clearly showing distinguishable and equivalent state pairs and drawing the minimized DFA.",
      priority: "HIGH",
      priorityReason:
        "Tested in May 2025 (Q26.2) and Jul 2025 P1 (Q22a), plus Part A (Jul 2025 P1 Q5, Q7; Jul 2025 P2 Q8).",
      sourceType: "Exact PYQ",
      appearedInPYQ: true,
      appearancesCount: 2,
      years: ["May 2025 (Q26.2)", "Jul 2025 P1 (Q22a)"],
      subtopics: ["Unreachable state removal", "Base case (F vs Q-F)", "Iterative pair marking", "Merging equivalent states"]
    },
    {
      id: "L2-8-5",
      lessonId: 2,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Closure Properties of Regular Sets",
      question:
        "Show that regular languages are closed under: (i) Union, (ii) Intersection, (iii) Kleene closure, (iv) Difference, and (v) Complement, illustrating each property with suitable examples and automata/RE constructions.",
      priority: "HIGH",
      priorityReason:
        "Directly tested in Jul 2024 (Q22b) and Nov 2024 (Q22a.ii).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 2,
      years: ["Jul 2024 (Q22b)", "Nov 2024 (Q22a.ii)"],
      subtopics: ["Union & Kleene closure via RE/NFA", "Intersection via product DFA", "Complement & Difference via DFA"]
    },
    {
      id: "L2-8-6",
      lessonId: 2,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Designing Unambiguous CFG for Structured Languages",
      question:
        "Design an unambiguous Context-Free Grammar (CFG) for a structured language—such as valid HTML code supporting tags <body>, <h1>, <p>, <a>, <div> and text content, or balanced/nested constructs.",
      priority: "MEDIUM",
      priorityReason:
        "Appeared as an application-oriented 8-mark question in Nov 2024 (Q22b).",
      sourceType: "Exact PYQ",
      appearedInPYQ: true,
      appearancesCount: 1,
      years: ["Nov 2024 (Q22b)"],
      subtopics: ["CFG design principles", "Enforcing nesting & tag matching", "Avoiding ambiguity"]
    },
    {
      id: "L2-8-7",
      lessonId: 2,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Pumping Lemma for Regular Languages",
      question:
        "State the Pumping Lemma for Regular Languages and use it to prove that L = {aⁿbⁿ | n ≥ 0} (or L = {0ⁿ1ⁿ | n ≥ 1}) is not regular.",
      priority: "HIGH",
      priorityReason:
        "Tested in Jul 2025 P2 (Q23b) and Part A (Jul 2025 P2 Q12); also listed in Unit 2/3 notes.",
      sourceType: "Exact PYQ",
      appearedInPYQ: true,
      appearancesCount: 1,
      years: ["Jul 2025 P2 (Q23b)"],
      subtopics: ["Pumping length p", "Decomposition w = xyz (|xy| ≤ p, |y| ≥ 1)", "Proof by contradiction"]
    },

    // ==================== LESSON 2: 16-MARK ====================
    {
      id: "L2-16-1",
      lessonId: 2,
      markCategory: "16",
      historicalMarks: "15 Marks (Part C)",
      topic: "Complete CFG Simplification, CNF, GNF & Parse Tree Derivation",
      question:
        "Consider a multi-rule grammar (e.g., S → NP VP, N → cat | dog, NP → the N | NP that VP, VI → barks | bites, VT → bites | catches, VP → VI | VT NP). Perform all of the following: (a) Remove null productions, (b) Remove unit productions, (c) Convert to Chomsky Normal Form (CNF), (d) Convert to Greibach Normal Form (GNF), and (e) Derive the parse tree for 'the dog catches the cat'.",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared as a full 15-mark Part C question in Nov 2024 (Q27), testing the entire Unit 2 normalization pipeline.",
      sourceType: "Exact PYQ",
      appearedInPYQ: true,
      appearancesCount: 1,
      years: ["Nov 2024 (Q27)"],
      subtopics: ["Null & unit elimination", "CNF conversion", "GNF conversion", "Parse tree derivation"]
    },
    {
      id: "L2-16-2",
      lessonId: 2,
      markCategory: "16",
      historicalMarks: "15 Marks (Part C)",
      topic: "CFG Simplification & Conversion to Chomsky Normal Form (CNF)",
      question:
        "Define Chomsky Normal Form (CNF). Simplify the given CFG (eliminate ε-productions, unit productions, and useless symbols) and convert it into CNF showing all intermediate steps (e.g., S → ABC, A → BC | a, B → bAC | ε, C → cAB | ε; or S → AaB | Ca | Ba, B → aB | ε, C → CaC, D → Aa).",
      priority: "VERY HIGH",
      priorityReason:
        "Tested as a 15-mark Part C question in both Jul 2025 P1 (Q27.i) and Jul 2025 P2 (Q26.i).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 2,
      years: ["Jul 2025 P1 (Q27.i)", "Jul 2025 P2 (Q26.i)"],
      subtopics: ["CNF definition", "ε-elimination", "Useless & unit removal", "Terminal replacement & binarization"]
    },

    // ==================== LESSON 3: 8-MARK ====================
    {
      id: "L3-8-1",
      lessonId: 3,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Constructing Pushdown Automata (PDA) for CFLs",
      question:
        "Design a Pushdown Automaton (PDA) accepting a given Context-Free Language by empty stack or final state, draw its transition diagram, and trace an input string using Instantaneous Descriptions (ID). Examples from PYQs: L = {aⁿbⁿ | n ≥ 1}, L = {wwᴿ | w ∈ {a,b}*}, L = {aⁿbᵐcᵐdⁿ | m,n ≥ 1}, L = {aᵐ⁺ⁿbᵐcⁿ | n,m ≥ 0}, L = {aⁿbⁿc²ⁿ | n ≥ 0}, equal number of a's and b's.",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared in ALL 6 analyzed PYQ papers (May 2024 Q23a/b, Jul 2024 Q23b, Nov 2024 Q23a, May 2025 Q23a/b, Jul 2025 P1 Q23a.i/b.i, Jul 2025 P2).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 6,
      years: ["May 2024 (Q23a, Q23b)", "Jul 2024 (Q23b)", "Nov 2024 (Q23a)", "May 2025 (Q23a, Q23b)", "Jul 2025 P1 (Q23a.i, Q23b.i)"],
      subtopics: ["7-tuple PDA definition", "Transition diagram & δ rules", "Instantaneous Description (q, w, γ) trace", "Empty stack vs Final state"]
    },
    {
      id: "L3-8-2",
      lessonId: 3,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "CFG to Equivalent PDA Conversion",
      question:
        "Convert the given Context-Free Grammar (CFG) into an equivalent Pushdown Automaton (PDA) and test whether a given input string (e.g., 010⁴) is accepted by the constructed PDA (e.g., S → 0BB, B → 0S | 1S | 0).",
      priority: "VERY HIGH",
      priorityReason:
        "Tested in 3 PYQ papers (Nov 2024 Q23b, May 2025 Q23b, Jul 2025 P1 Q23a.ii) with identical/near-identical grammar.",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 3,
      years: ["Nov 2024 (Q23b)", "May 2025 (Q23b)", "Jul 2025 P1 (Q23a.ii)"],
      subtopics: ["Single-state PDA construction from CFG", "δ(q, ε, A) = {(q, α)}", "δ(q, a, a) = {(q, ε)}", "ID trace for 010⁴"]
    },
    {
      id: "L3-8-3",
      lessonId: 3,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "PDA to Equivalent CFG Conversion",
      question:
        "Convert the given Pushdown Automaton P = (Q, Σ, Γ, δ, q₀, Z₀, F) into an equivalent Context-Free Grammar (CFG), clearly specifying non-terminals [qᵢ, X, qⱼ], terminals, start symbol S, and all production rules.",
      priority: "HIGH",
      priorityReason:
        "Appeared in both July 2025 papers (Jul 2025 P1 Q23b.ii and Jul 2025 P2 Q23a).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 2,
      years: ["Jul 2025 P1 (Q23b.ii)", "Jul 2025 P2 (Q23a)"],
      subtopics: ["Start productions S → [q₀, Z₀, q]", "Pop rule [q, X, p] → a", "Push/replace rule expansion"]
    },
    {
      id: "L3-8-4",
      lessonId: 3,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Deterministic PDA (DPDA) vs Non-Deterministic PDA (NPDA)",
      question:
        "Differentiate between Deterministic Pushdown Automata (DPDA) and Non-Deterministic Pushdown Automata (NPDA) with suitable examples. Which class of languages does each accept?",
      priority: "HIGH",
      priorityReason:
        "Appeared in Jul 2024 (Q23a) and May 2025 (Q23a), plus multiple Part A questions (Jul 2024 Q10, Jul 2025 P1 Q14, Jul 2025 P2 Q11).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 2,
      years: ["Jul 2024 (Q23a)", "May 2025 (Q23a)"],
      subtopics: ["Determinism condition on δ", "DCFL vs CFL (wcwᴿ vs wwᴿ)", "Proper subset relation DCFL ⊂ CFL"]
    },
    {
      id: "L3-8-5",
      lessonId: 3,
      markCategory: "8",
      historicalMarks: "Syllabus / Notes (8-Mark Format)",
      topic: "Closure Properties & Decision Algorithms for CFLs",
      question:
        "Explain the closure properties of Context-Free Languages (Union, Concatenation, Kleene closure, Reversal, Homomorphism) and prove why CFLs are NOT closed under Intersection and Complement. Also summarize decision algorithms for CFLs (emptiness, finiteness, membership).",
      priority: "MEDIUM",
      priorityReason:
        "Core Unit 3 syllabus topic tested in Part A (May 2024 Q12, Nov 2024 Q6) and detailed in Unit 3 notes.",
      sourceType: "Lesson-Based Important",
      appearedInPYQ: false,
      appearancesCount: 0,
      years: [],
      subtopics: ["Closure under union, concatenation, star", "Non-closure under intersection & complement", "CYK / membership & emptiness tests"]
    },
    {
      id: "L3-8-6",
      lessonId: 3,
      markCategory: "8",
      historicalMarks: "Syllabus / Notes (8-Mark Format)",
      topic: "Overview of Top-Down and Bottom-Up Parsing",
      question:
        "Compare Top-Down Parsing and Bottom-Up Parsing with suitable examples. Explain recursive descent / LL parsing concepts and shift-reduce parsing actions (shift, reduce, accept, error).",
      priority: "MEDIUM",
      priorityReason:
        "Explicitly listed in Unit 3 syllabus and tested in May 2024 Part A (Q11).",
      sourceType: "Lesson-Based Important",
      appearedInPYQ: false,
      appearancesCount: 0,
      years: [],
      subtopics: ["Top-down (start symbol to string)", "Bottom-up (string to start symbol)", "Left recursion & ambiguity issues"]
    },

    // ==================== LESSON 3: 16-MARK ====================
    {
      id: "L3-16-1",
      lessonId: 3,
      markCategory: "16",
      historicalMarks: "15 Marks (Part C)",
      topic: "Pumping Lemma for Context-Free Languages (Statement, Proof & Application)",
      question:
        "State and prove the Pumping Lemma for Context-Free Languages (CFLs). Using the Pumping Lemma, prove that the language L = {aⁿbⁿcⁿ | n ≥ 1} is NOT context-free.",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared as a 15-mark Part C question in May 2025 (Q26.1) and is one of the most important theoretical proofs in Unit 3.",
      sourceType: "Exact PYQ",
      appearedInPYQ: true,
      appearancesCount: 1,
      years: ["May 2025 (Q26.1)"],
      subtopics: ["Parse tree height & CNF pumping bound p = 2^k", "Decomposition z = uvwxy (|vwx| ≤ p, |vx| ≥ 1)", "Case analysis on vwx in aⁿbⁿcⁿ"]
    },
    {
      id: "L3-16-2",
      lessonId: 3,
      markCategory: "16",
      historicalMarks: "Syllabus / Notes (16-Mark Format)",
      topic: "Equivalence of Acceptance by Final State and Empty Stack in PDA",
      question:
        "Prove the equivalence between Pushdown Automata accepting by Final State and Pushdown Automata accepting by Empty Stack: (a) Construct a PDA accepting by empty stack from a given PDA accepting by final state, and (b) Construct a PDA accepting by final state from a given PDA accepting by empty stack, with a worked example.",
      priority: "HIGH",
      priorityReason:
        "Fundamental Unit 3 equivalence theorem in lecture notes; frequently forms the basis of multi-part long-answer questions.",
      sourceType: "Lesson-Based Important",
      appearedInPYQ: false,
      appearancesCount: 0,
      years: [],
      subtopics: ["L(P) vs N(P)", "Adding new start symbol X₀ and drain state", "Formal 7-tuple construction"]
    },

    // ==================== LESSON 4: 8-MARK ====================
    {
      id: "L4-8-1",
      lessonId: 4,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Turing Machine Construction for Language Recognition",
      question:
        "Design a Turing Machine (with transition diagram, transition table, and ID trace on a sample input) to accept one of the classic non-CFL / context-sensitive languages: L = {aⁿbⁿcⁿ | n ≥ 0}, L = {0ⁿ1ⁿ0ⁿ | n ≥ 1}, L = {wwᴿ | w ∈ (a,b)*}, L = {www | w ∈ (a,b)*}, or strings containing 'aba' as a substring.",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared in ALL 6 analyzed PYQ papers (May 2024 Q24b, Jul 2024 Q24b, Nov 2024 Q24a, May 2025 Q24a, Jul 2025 P1 Q24a.ii & Q24b).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 6,
      years: ["May 2024 (Q24b)", "Jul 2024 (Q24b)", "Nov 2024 (Q24a)", "May 2025 (Q24a)", "Jul 2025 P1 (Q24a.ii, Q24b)"],
      subtopics: ["7-tuple TM definition", "Checking-off symbols technique", "Transition diagram", "ID trace (e.g., aaabbbccc)"]
    },
    {
      id: "L4-8-2",
      lessonId: 4,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Turing Machine for Unary Arithmetic (Addition & Proper Subtraction)",
      question:
        "Design a Turing Machine to compute unary addition (e.g., 2 + 3) or proper subtraction m ∸ n (defined as m − n if m > n, else 0), and simulate its step-by-step action using Instantaneous Descriptions.",
      priority: "VERY HIGH",
      priorityReason:
        "Tested in 4 PYQ papers as 8-mark (Nov 2024 Q24b, Jul 2025 P1 Q24a.i, Jul 2025 P2 Q24b) and also in Part C (May 2024 Q26, Jul 2024 Q27b).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 4,
      years: ["Nov 2024 (Q24b)", "Jul 2025 P1 (Q24a.i)", "Jul 2025 P2 (Q24b)"],
      subtopics: ["Unary representation (0ⁿ or 1ⁿ)", "Separator symbol handling", "ID step-by-step trace"]
    },
    {
      id: "L4-8-3",
      lessonId: 4,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Variations / Extensions of TM, Universal TM & Recursive/RE Languages",
      question:
        "Write detailed notes on: (a) Extensions/Variations of Turing Machines (Multi-tape TM, Multi-track TM, Storage in finite control), (b) Universal Turing Machine (UTM), and (c) Recursive vs Recursively Enumerable languages.",
      priority: "HIGH",
      priorityReason:
        "Directly tested in May 2025 (Q24b) and Jul 2025 P2 (Q24a - prime check using multiple tracks).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 2,
      years: ["May 2025 (Q24b)", "Jul 2025 P2 (Q24a)"],
      subtopics: ["Multi-tape & Multi-track TMs", "Storage in finite control", "Universal Turing Machine", "Church-Turing Thesis"]
    },
    {
      id: "L4-8-4",
      lessonId: 4,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Closure Properties of Recursive Languages",
      question:
        "Prove that the Union of two Recursive languages is Recursive. Also prove and discuss the Complement property of Recursive languages.",
      priority: "HIGH",
      priorityReason:
        "Directly tested in May 2024 (Q24a) and Part A (Jul 2025 P1 Q18, Q19), and detailed in Unit 5/4 notes.",
      sourceType: "Exact PYQ",
      appearedInPYQ: true,
      appearancesCount: 1,
      years: ["May 2024 (Q24a)"],
      subtopics: ["Simulation of M₁ and M₂ in sequence", "Swapping accept/reject halting states for complement", "Comparison with RE languages"]
    },

    // ==================== LESSON 4: 16-MARK ====================
    {
      id: "L4-16-1",
      lessonId: 4,
      markCategory: "16",
      historicalMarks: "15 Marks (Part C)",
      topic: "Turing Machine for Palindromes over {0, 1} / {a, b}",
      question:
        "Construct a Turing Machine (complete 7-tuple, transition table, and transition diagram) that accepts all palindromes (or L = {wwᴿ | w ∈ (a+b)*}) over the input alphabet, and trace its execution on both an accepted string and a rejected string.",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared as a 15-mark Part C question in both May 2024 (Q27) and Jul 2025 P2 (Q27).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 2,
      years: ["May 2024 (Q27)", "Jul 2025 P2 (Q27)"],
      subtopics: ["Matching first & last symbols", "Replacing matched symbols with Blank (B)", "Handling even & odd length palindromes"]
    },
    {
      id: "L4-16-2",
      lessonId: 4,
      markCategory: "16",
      historicalMarks: "15 Marks (Part C)",
      topic: "Turing Machine for Multiplication of Two Unary Numbers",
      question:
        "Design a Turing Machine that computes the multiplication of two unary numbers (m × n), clearly explaining the tape layout, state transitions, and tracing an example such as 2 × 3.",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared as a standalone 15-mark Part C question in May 2025 (Q27).",
      sourceType: "Exact PYQ",
      appearedInPYQ: true,
      appearancesCount: 1,
      years: ["May 2025 (Q27)"],
      subtopics: ["Unary encoding 0ᵐ10ⁿ1", "Repeated addition via marker symbols", "Restoring multiplier/multiplicand & cleaning tape"]
    },
    {
      id: "L4-16-3",
      lessonId: 4,
      markCategory: "16",
      historicalMarks: "15 Marks (Part C)",
      topic: "TM Binary Encoding <M, w> and Arithmetic / String-Replacement TM",
      question:
        "(a) Obtain the binary encoding for <M, 1011> given a 7-tuple Turing Machine M and its transition table δ, AND design a TM that adds two numbers (May 2024 Q26); OR (b) Construct a TM that replaces all occurrences of '111' by '101' in a sequence of 0's and 1's, AND construct a TM for proper subtraction m − n (Jul 2024 Q27).",
      priority: "HIGH",
      priorityReason:
        "Tested as 15-mark Part C questions in May 2024 (Q26) and Jul 2024 (Q27).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 2,
      years: ["May 2024 (Q26)", "Jul 2024 (Q27)"],
      subtopics: ["Binary encoding of TM states, symbols, and directions", "In-place substring replacement", "Proper subtraction & addition TMs"]
    },

    // ==================== LESSON 5: 8-MARK ====================
    {
      id: "L5-8-1",
      lessonId: 5,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Post's Correspondence Problem (PCP) & Undecidability",
      question:
        "Define Post's Correspondence Problem (PCP). Solve the given PCP instance to find a matching sequence (e.g., A = (1, 10111, 10), B = (111, 10, 0); or A = (y, yxy³, yx), B = (y³, yx, x)), OR prove that PCP is undecidable.",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared in 5 out of 6 PYQ papers (May 2024 Q25b, Jul 2024 Q25a, May 2025 Q25a.1, Jul 2025 P1 Q26, Jul 2025 P2 Q25a).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 5,
      years: ["May 2024 (Q25b)", "Jul 2024 (Q25a)", "May 2025 (Q25a.1)", "Jul 2025 P2 (Q25a)"],
      subtopics: ["PCP formal definition (Lists A & B)", "Step-by-step index sequence matching", "MPCP & PCP undecidability"]
    },
    {
      id: "L5-8-2",
      lessonId: 5,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Complexity Classes: P, NP, NP-Complete, and NP-Hard",
      question:
        "Explain in detail Class P, Class NP, NP-Complete, and NP-Hard problems. Illustrate the relationship among them (assuming P ≠ NP) and give suitable examples for each class (e.g., Sorting, SAT, TSP, Subset Sum).",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared in 4 out of 6 PYQ papers (May 2024 Q25a, Jul 2024 Q25b, Nov 2024 Q25a, May 2025 Q25a.2).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 4,
      years: ["May 2024 (Q25a)", "Jul 2024 (Q25b)", "Nov 2024 (Q25a)", "May 2025 (Q25a.2)"],
      subtopics: ["Polynomial-time decidable (P)", "Non-deterministic polynomial verifiable (NP)", "Polynomial-time reduction ≤p", "NP-Complete vs NP-Hard"]
    },
    {
      id: "L5-8-3",
      lessonId: 5,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Rice's Theorem and Halting Problem",
      question:
        "State and prove Rice's Theorem for recursively enumerable index sets, OR describe the Halting Problem of Turing Machines and prove that it is undecidable.",
      priority: "HIGH",
      priorityReason:
        "Appeared in Nov 2024 (Q25b) and Jul 2025 P1 (Q25a), plus Part C in Jul 2024 (Q26a).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 2,
      years: ["Nov 2024 (Q25b)", "Jul 2025 P1 (Q25a)"],
      subtopics: ["Non-trivial property of RE languages", "Reduction from Lu to Lp", "Halting problem diagonalization"]
    },
    {
      id: "L5-8-4",
      lessonId: 5,
      markCategory: "8",
      historicalMarks: "8 Marks (Part B)",
      topic: "Decidable vs Undecidable Problems & Emptiness Language (Le)",
      question:
        "Compare and contrast Decidable and Undecidable problems with suitable examples. Also define the emptiness language Le = {<M> | L(M) = ∅} and prove that Le is not recursive (undecidable).",
      priority: "HIGH",
      priorityReason:
        "Tested in May 2025 (Q25b), Jul 2025 P1 (Q25b), and Jul 2025 P2 (Q25b).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 3,
      years: ["May 2025 (Q25b)", "Jul 2025 P1 (Q25b)", "Jul 2025 P2 (Q25b)"],
      subtopics: ["Recursive vs RE languages", "Decidable vs Undecidable examples", "Reduction from Lu to L_ne / Le"]
    },

    // ==================== LESSON 5: 16-MARK ====================
    {
      id: "L5-16-1",
      lessonId: 5,
      markCategory: "16",
      historicalMarks: "15 Marks (Part C)",
      topic: "Undecidability of PCP & Reduction of MPCP to PCP",
      question:
        "(a) State and explain Rice's Theorem and prove that MPCP reduces to PCP (Jul 2024 Q26); OR (b) Prove that Post's Correspondence Problem (PCP) is undecidable, and determine whether the given instance A = (ab, bbab, baa, b), B = (abbb, a, aa, bbb) has a PCP solution and construct its MPCP instance (Jul 2025 P1 Q26).",
      priority: "VERY HIGH",
      priorityReason:
        "Appeared as a 15-mark Part C question in both Jul 2024 (Q26) and Jul 2025 P1 (Q26).",
      sourceType: "Rephrased Repeated PYQ",
      appearedInPYQ: true,
      appearancesCount: 2,
      years: ["Jul 2024 (Q26)", "Jul 2025 P1 (Q26)"],
      subtopics: ["MPCP definition (pair 1 forced first)", "Reduction MPCP ≤ PCP using *, #, $ delimiters", "Solving PCP instance"]
    },
    {
      id: "L5-16-2",
      lessonId: 5,
      markCategory: "16",
      historicalMarks: "Syllabus / Notes (16-Mark Format)",
      topic: "Diagonalization Language (Ld), Universal Language (Lu) & Reductions",
      question:
        "Define the Diagonalization Language Ld and Universal Language Lu. (a) Prove that Ld is not recursively enumerable using Cantor's diagonalization argument, (b) Prove that Lu is recursively enumerable but not recursive, and (c) Explain how reductions from Lu are used to prove undecidability of other TM problems.",
      priority: "HIGH",
      priorityReason:
        "Core Unit 5 theoretical foundation in lecture notes (Unit 5 PPT pages 12–30) underlying Rice's Theorem and Le.",
      sourceType: "Lesson-Based Important",
      appearedInPYQ: false,
      appearancesCount: 0,
      years: [],
      subtopics: ["Binary encoding of TMs wᵢ", "Diagonalization table & Ld", "Universal TM & Lu", "Many-one reductions"]
    }
  ],

  mostRepeated: [
    {
      rank: 1,
      lessonId: 3,
      concept: "Construct PDA for given CFL & trace Instantaneous Description (ID)",
      appearances: "6 / 6 Papers",
      years: ["May 2024", "Jul 2024", "Nov 2024", "May 2025", "Jul 2025 (P1)", "Jul 2025 (P2)"],
      markType: "8 Marks (Part B)",
      note: "Tested in every single paper — master aⁿbⁿ, wwᴿ, equal a's & b's, aⁿbᵐcᵐdⁿ, and ID traces."
    },
    {
      rank: 2,
      lessonId: 4,
      concept: "Construct Turing Machine for Language Recognition (aⁿbⁿcⁿ, wwᴿ, palindromes, 0ⁿ1ⁿ0ⁿ)",
      appearances: "6 / 6 Papers",
      years: ["May 2024", "Jul 2024", "Nov 2024", "May 2025", "Jul 2025 (P1)", "Jul 2025 (P2)"],
      markType: "8 & 15 Marks",
      note: "Guaranteed in Part B and frequently in Part C. Always include 7-tuple, transition diagram, and an input trace."
    },
    {
      rank: 3,
      lessonId: 4,
      concept: "Turing Machine for Unary Arithmetic (Addition, Proper Subtraction, Multiplication)",
      appearances: "5 / 6 Papers",
      years: ["May 2024", "Jul 2024", "Nov 2024", "May 2025", "Jul 2025 (P1)", "Jul 2025 (P2)"],
      markType: "8 & 15 Marks",
      note: "Unary addition, proper subtraction m − n, and multiplication m × n appear across both Part B and Part C."
    },
    {
      rank: 4,
      lessonId: 5,
      concept: "Post's Correspondence Problem (PCP) Instance Solving & Undecidability",
      appearances: "5 / 6 Papers",
      years: ["May 2024", "Jul 2024", "May 2025", "Jul 2025 (P1)", "Jul 2025 (P2)"],
      markType: "8 & 15 Marks",
      note: "Practice both finding matching index sequences (List A / List B) and the MPCP → PCP reduction."
    },
    {
      rank: 5,
      lessonId: 2,
      concept: "Conversion of CFG to Greibach Normal Form (GNF)",
      appearances: "5 / 6 Papers",
      years: ["Jul 2024", "Nov 2024", "May 2025", "Jul 2025 (P1)", "Jul 2025 (P2)"],
      markType: "8 & 15 Marks",
      note: "Know left-recursion elimination and variable substitution order A₁ < A₂ < ... < Aₙ."
    },
    {
      rank: 6,
      lessonId: 1,
      concept: "NFA to DFA Conversion (Subset Construction)",
      appearances: "4 / 6 Papers",
      years: ["Jul 2024", "Nov 2024", "Jul 2025 (P1)", "Jul 2025 (P2)"],
      markType: "8 Marks (Part B)",
      note: "Convert transition tables cleanly using subset construction and verify string acceptance."
    },
    {
      rank: 7,
      lessonId: 2,
      concept: "Simplification of CFG (Null, Unit & Useless Productions)",
      appearances: "4 / 6 Papers",
      years: ["May 2024", "May 2025", "Jul 2025 (P2)"],
      markType: "8 & 15 Marks",
      note: "Always remove in order: (1) ε-productions → (2) Unit productions → (3) Useless symbols."
    },
    {
      rank: 8,
      lessonId: 5,
      concept: "Complexity Classes: P, NP, NP-Complete & NP-Hard",
      appearances: "4 / 6 Papers",
      years: ["May 2024", "Jul 2024", "Nov 2024", "May 2025"],
      markType: "8 Marks (Part B)",
      note: "Include definitions, Venn diagram relationship, polynomial-time reduction, and examples (SAT, TSP, Subset Sum)."
    },
    {
      rank: 9,
      lessonId: 1,
      concept: "Moore and Mealy Machines (Design & Inter-Conversion)",
      appearances: "3 / 6 Papers",
      years: ["Nov 2024", "May 2025", "Jul 2025 (P1)"],
      markType: "8 Marks (Part B)",
      note: "Remember: Moore output depends only on state (length n+1); Mealy depends on state + input (length n)."
    },
    {
      rank: 10,
      lessonId: 3,
      concept: "CFG to Equivalent PDA & String Acceptance Trace",
      appearances: "3 / 6 Papers",
      years: ["Nov 2024", "May 2025", "Jul 2025 (P1)"],
      markType: "8 Marks (Part B)",
      note: "Single-state PDA simulation of leftmost derivations: expand variables, match terminals."
    }
  ],

  lastMinuteRevision: [
    {
      lessonId: 1,
      title: "Unit 1: Finite Automata & Regular Expressions",
      items: [
        "DFA 5-tuple: M = (Q, Σ, δ, q₀, F), where δ: Q × Σ → Q. NFA: δ: Q × Σ → 2^Q (max 2^N DFA states).",
        "ε-NFA → DFA: Always compute ε-closure(q) first, then δ'(S, a) = ⋃_{p ∈ S} ε-closure(δ(p, a)).",
        "Thompson's Construction: Build ε-NFA blocks for a, ε, r₁ + r₂, r₁r₂, and r*.",
        "Rijk's Formula (DFA → RE): R_ij^k = R_ij^(k-1) + R_ik^(k-1) (R_kk^(k-1))* R_kj^(k-1).",
        "Moore vs Mealy: Moore output length = n + 1; Mealy output length = n. To convert Moore → Mealy, attach state output λ(δ(q, a)) to incoming transitions."
      ]
    },
    {
      lessonId: 2,
      title: "Unit 2: Regular Sets & Context-Free Grammars",
      items: [
        "CFG Simplification Order: (1) Remove ε-productions → (2) Remove unit productions (A → B) → (3) Remove useless symbols (non-generating first, then non-reachable).",
        "Chomsky Normal Form (CNF): Every rule is A → BC or A → a (plus S → ε only if ε ∈ L).",
        "Greibach Normal Form (GNF): Every rule is A → aα (one terminal followed by zero or more variables). Eliminate left recursion A → Aα | β ⇒ A → βZ, Z → αZ | ε.",
        "DFA Minimization (Table-Filling): Mark all (p, q) where one is final and one is non-final; iteratively mark (p, q) if (δ(p, a), δ(q, a)) is marked.",
        "Regular Sets are closed under Union, Intersection, Complement, Difference, Concatenation, Kleene Star, Reversal."
      ]
    },
    {
      lessonId: 3,
      title: "Unit 3: Pushdown Automata & Parsing",
      items: [
        "PDA 7-tuple: P = (Q, Σ, Γ, δ, q₀, Z₀, F), where δ: Q × (Σ ∪ {ε}) × Γ → finite subsets of Q × Γ*.",
        "DPDA vs NPDA: DPDA accepts DCFLs (e.g., wcwᴿ, aⁿbⁿ); NPDA accepts all CFLs (e.g., wwᴿ). DCFL ⊂ CFL.",
        "CFG → PDA: Single state q. For each A → α, add δ(q, ε, A) = (q, α); for each terminal a, add δ(q, a, a) = (q, ε).",
        "Pumping Lemma for CFLs: If L is CFL, ∃p such that |z| ≥ p ⇒ z = uvwxy with |vwx| ≤ p, |vx| ≥ 1, uvⁱwxⁱy ∈ L. Used to prove aⁿbⁿcⁿ is not CFL.",
        "CFLs are closed under Union, Concatenation, Kleene Star, Reversal; NOT closed under Intersection or Complement."
      ]
    },
    {
      lessonId: 4,
      title: "Unit 4: Turing Machines",
      items: [
        "TM 7-tuple: M = (Q, Σ, Γ, δ, q₀, B, F), where δ: Q × Γ → Q × Γ × {L, R}.",
        "Check-off pattern for aⁿbⁿcⁿ: Replace a → X, scan right to b → Y, scan right to c → Z, return left to X; repeat until all matched.",
        "Unary Arithmetic: Addition (join two 1ⁿ blocks by replacing separator 0/c with 1 and trimming end); Proper Subtraction m ∸ n (cancel one 1 from m and one 1 from n per pass).",
        "Church-Turing Thesis: Any effectively computable function can be computed by a Turing Machine. Multi-tape & Multi-track TMs have equal power to single-tape TMs.",
        "Recursive (Decidable) languages: TM always halts (accept/reject). Closed under Union, Intersection, Complement. RE languages are closed under Union & Intersection, NOT Complement."
      ]
    },
    {
      lessonId: 5,
      title: "Unit 5: Computational Complexity & Undecidability",
      items: [
        "Language Hierarchy: Regular ⊂ DCFL ⊂ CFL ⊂ CSL ⊂ Recursive ⊂ Recursively Enumerable (RE).",
        "Ld (Diagonalization) is not RE. Lu (Universal Language) and Halting Problem are RE but NOT Recursive (Undecidable). Le (Emptiness) is not Recursive.",
        "Rice's Theorem: Every non-trivial semantic property of the language recognized by a TM is undecidable.",
        "PCP: Given lists A = (w₁,…,wₖ) and B = (x₁,…,xₖ), find index sequence i₁…iₘ such that w_{i1}…w_{im} = x_{i1}…x_{im}. Undecidable (via MPCP → PCP reduction).",
        "Complexity Classes: P ⊆ NP. NP-Complete = in NP AND NP-Hard (e.g., SAT, TSP decision, Subset Sum). NP-Hard = every NP problem reduces to it in polynomial time."
      ]
    }
  ]
};
