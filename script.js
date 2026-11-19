/* =====================================================================
   CONFIGURATION — EDIT CLASS NAMES, OPTIONAL PIN, OR GOOGLE SHEETS URL
   ===================================================================== */
const CONFIG = {
  GOOGLE_SCRIPT_URL: "", // Paste your Google Apps Script Web App URL here
  CLASS_PASSCODE: "",    // Optional shared PIN (leave "" for open access)
  CLASSES: [
    "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
    "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"
  ]
};

/* =====================================================================
   SVG SPECIMEN LIBRARY (Mapped by visualId from quizquestions.json)
   ===================================================================== */
const SPECIMEN_SVGS = {
  mitochondria: `
    <svg viewBox="0 0 360 220" width="100%" height="100%">
      <defs>
        <radialGradient id="cellGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#090d16"/>
        </radialGradient>
      </defs>
      <rect width="360" height="220" rx="14" fill="url(#cellGlow)"/>
      <ellipse cx="180" cy="110" rx="145" ry="88" fill="#111c33" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="135" cy="105" r="34" fill="#3b1d5e" stroke="#a855f7" stroke-width="2"/>
      <circle cx="135" cy="105" r="12" fill="#c084fc" opacity="0.6"/>
      <g transform="translate(215, 78) rotate(-18)">
        <rect x="-32" y="-15" width="64" height="30" rx="15" fill="#7c2d12" stroke="#fb923c" stroke-width="2.5"/>
        <path d="M-22,0 Q-15,-10 -8,0 T6,0 T20,0" fill="none" stroke="#fdba74" stroke-width="2"/>
      </g>
      <circle cx="222" cy="76" r="36" fill="none" stroke="#2dd4bf" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="225" y="34" fill="#2dd4bf" font-size="11" font-family="sans-serif" font-weight="bold">TARGET ORGANELLE</text>
      <line x1="225" y1="38" x2="222" y2="55" stroke="#2dd4bf" stroke-width="1.5"/>
    </svg>`,
  prokaryote: `
    <svg viewBox="0 0 360 220" width="100%" height="100%">
      <rect width="360" height="220" rx="14" fill="#090d16"/>
      <rect x="65" y="60" width="210" height="100" rx="50" fill="#132238" stroke="#2dd4bf" stroke-width="3"/>
      <rect x="73" y="68" width="194" height="84" rx="42" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="5 3"/>
      <path d="M275,110 Q305,85 325,110 T355,105" fill="none" stroke="#a855f7" stroke-width="3"/>
      <path d="M115,110 C125,85 155,135 165,105 C175,80 195,130 205,110" fill="none" stroke="#f472b6" stroke-width="3"/>
      <circle cx="228" cy="95" r="11" fill="none" stroke="#facc15" stroke-width="2.5"/>
      <circle cx="228" cy="95" r="17" fill="none" stroke="#facc15" stroke-width="1" stroke-dasharray="3 3"/>
      <text x="195" y="46" fill="#facc15" font-size="11" font-family="sans-serif" font-weight="bold">SMALL DNA RING</text>
      <line x1="228" y1="52" x2="228" y2="78" stroke="#facc15" stroke-width="1.5"/>
    </svg>`,
  magnification: `
    <svg viewBox="0 0 360 220" width="100%" height="100%">
      <rect width="360" height="220" rx="14" fill="#090d16"/>
      <circle cx="180" cy="110" r="85" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
      <rect x="115" y="92" width="130" height="36" rx="6" fill="#1e293b" stroke="#2dd4bf" stroke-width="2"/>
      <line x1="115" y1="142" x2="245" y2="142" stroke="#facc15" stroke-width="2"/>
      <line x1="115" y1="136" x2="115" y2="148" stroke="#facc15" stroke-width="2"/>
      <line x1="245" y1="136" x2="245" y2="148" stroke="#facc15" stroke-width="2"/>
      <text x="180" y="162" text-anchor="middle" fill="#facc15" font-size="12" font-family="monospace" font-weight="bold">Image = 24 mm (×400)</text>
    </svg>`,
  resolution: `
    <svg viewBox="0 0 360 220" width="100%" height="100%">
      <rect width="360" height="220" rx="14" fill="#090d16"/>
      <rect x="30" y="45" width="130" height="130" rx="12" fill="#111827" stroke="#64748b" stroke-width="1.5"/>
      <circle cx="95" cy="110" r="24" fill="#38bdf8" opacity="0.35"/>
      <text x="95" y="162" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">Light Microscope</text>
      <rect x="200" y="45" width="130" height="130" rx="12" fill="#111827" stroke="#2dd4bf" stroke-width="2"/>
      <circle cx="252" cy="110" r="12" fill="#2dd4bf"/>
      <circle cx="282" cy="110" r="12" fill="#a855f7"/>
      <text x="265" y="162" text-anchor="middle" fill="#2dd4bf" font-size="11" font-family="sans-serif" font-weight="bold">Electron Microscope</text>
    </svg>`,
  roothair: `
    <svg viewBox="0 0 360 220" width="100%" height="100%">
      <rect width="360" height="220" rx="14" fill="#090d16"/>
      <path d="M50,65 L140,65 L140,95 L310,95 L310,125 L140,125 L140,155 L50,155 Z" fill="#132a2e" stroke="#2dd4bf" stroke-width="2.5"/>
      <ellipse cx="95" cy="110" rx="26" ry="30" fill="#1d4ed8" opacity="0.45" stroke="#60a5fa" stroke-width="1.5"/>
      <text x="225" y="82" text-anchor="middle" fill="#2dd4bf" font-size="11" font-family="sans-serif" font-weight="bold">Long Projection (No Chloroplasts)</text>
    </svg>`,
  mitosis: `
    <svg viewBox="0 0 360 220" width="100%" height="100%">
      <rect width="360" height="220" rx="14" fill="#090d16"/>
      <circle cx="180" cy="110" r="78" fill="#111827" stroke="#a855f7" stroke-width="2.5"/>
      <line x1="180" y1="42" x2="180" y2="178" stroke="#475569" stroke-dasharray="4 4"/>
      <path d="M135,80 L150,90 L135,100 M135,120 L150,130 L135,140" fill="none" stroke="#2dd4bf" stroke-width="3"/>
      <path d="M225,80 L210,90 L225,100 M225,120 L210,130 L225,140" fill="none" stroke="#f472b6" stroke-width="3"/>
      <text x="180" y="24" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">Chromatids Pulled to Opposite Poles</text>
    </svg>`,
  meristem: `
    <svg viewBox="0 0 360 220" width="100%" height="100%">
      <rect width="360" height="220" rx="14" fill="#090d16"/>
      <path d="M140,35 L220,35 L205,175 Q180,200 155,175 Z" fill="#14532d" stroke="#4ade80" stroke-width="2.5"/>
      <ellipse cx="180" cy="168" rx="18" ry="16" fill="#22c55e" opacity="0.4" stroke="#bbf7d0" stroke-width="2"/>
      <text x="180" y="24" text-anchor="middle" fill="#4ade80" font-size="11" font-family="sans-serif" font-weight="bold">Shoot / Root Tip Meristem Zone</text>
    </svg>`,
  diffusion: `
    <svg viewBox="0 0 360 220" width="100%" height="100%">
      <rect width="360" height="220" rx="14" fill="#090d16"/>
      <line x1="180" y1="30" x2="180" y2="190" stroke="#38bdf8" stroke-width="3" stroke-dasharray="8 6"/>
      <circle cx="80" cy="70" r="7" fill="#f472b6"/><circle cx="110" cy="95" r="7" fill="#f472b6"/>
      <circle cx="70" cy="125" r="7" fill="#f472b6"/><circle cx="125" cy="145" r="7" fill="#f472b6"/>
      <circle cx="95" cy="165" r="7" fill="#f472b6"/><circle cx="135" cy="65" r="7" fill="#f472b6"/>
      <circle cx="265" cy="105" r="7" fill="#f472b6"/>
      <path d="M150,110 L215,110" stroke="#2dd4bf" stroke-width="3"/>
      <polygon points="215,104 227,110 215,116" fill="#2dd4bf"/>
      <text x="180" y="206" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">High Concentration → Low Concentration</text>
    </svg>`,
  osmosis: `
    <svg viewBox="0 0 360 220" width="100%" height="100%">
      <rect width="360" height="220" rx="14" fill="#090d16"/>
      <rect x="65" y="45" width="230" height="135" rx="10" fill="#0c4a6e" opacity="0.5" stroke="#38bdf8" stroke-width="2"/>
      <rect x="125" y="80" width="110" height="65" rx="8" fill="#78350f" stroke="#fbbf24" stroke-width="2"/>
      <text x="180" y="116" text-anchor="middle" fill="#fef3c7" font-size="11" font-family="sans-serif" font-weight="bold">Potato Cylinder</text>
      <text x="180" y="34" text-anchor="middle" fill="#38bdf8" font-size="11" font-family="sans-serif">Concentrated Sucrose Solution (0.8 mol/dm³)</text>
    </svg>`,
  activetransport: `
    <svg viewBox="0 0 360 220" width="100%" height="100%">
      <rect width="360" height="220" rx="14" fill="#090d16"/>
      <rect x="166" y="30" width="28" height="160" rx="8" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
      <circle cx="95" cy="110" r="8" fill="#2dd4bf"/>
      <circle cx="255" cy="70" r="8" fill="#2dd4bf"/><circle cx="285" cy="95" r="8" fill="#2dd4bf"/>
      <circle cx="250" cy="130" r="8" fill="#2dd4bf"/><circle cx="280" cy="155" r="8" fill="#2dd4bf"/>
      <path d="M120,110 L225,110" stroke="#facc15" stroke-width="3"/>
      <polygon points="225,104 237,110 225,116" fill="#facc15"/>
      <text x="180" y="206" text-anchor="middle" fill="#facc15" font-size="11" font-family="sans-serif" font-weight="bold">Low → High Gradient (Requires ATP)</text>
    </svg>`
};

/* =====================================================================
   STATE & STORAGE
   ===================================================================== */
const STORAGE_KEY = "aqa_cell_bio_league_v1";
let QUESTION_BANK = [];
let currentUser = null;
let quizQuestions = [];
let currentIdx = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let answeredCurrent = false;
let timerInterval = null;
let elapsedSeconds = 0;
let leagueRecords = [];

const SEED_RECORDS = [
  { name: "Amelia R.", className: "Class 1", score: 10, streak: 10, timeSeconds: 74, timestamp: Date.now() - 86400000 },
  { name: "Leo K.", className: "Class 2", score: 9, streak: 7, timeSeconds: 82, timestamp: Date.now() - 72000000 },
  { name: "Priya S.", className: "Class 1", score: 9, streak: 6, timeSeconds: 95, timestamp: Date.now() - 64000000 },
  { name: "Noah T.", className: "Class 3", score: 8, streak: 5, timeSeconds: 88, timestamp: Date.now() - 50000000 },
  { name: "Chloe W.", className: "Class 4", score: 8, streak: 4, timeSeconds: 104, timestamp: Date.now() - 40000000 },
  { name: "Zayn M.", className: "Class 2", score: 7, streak: 4, timeSeconds: 91, timestamp: Date.now() - 32000000 },
  { name: "Isla B.", className: "Class 5", score: 7, streak: 3, timeSeconds: 112, timestamp: Date.now() - 20000000 }
];

/* =====================================================================
   INITIALIZATION (Loads quizquestions.json)
   ===================================================================== */
async function initApp() {
  const classSelect = document.getElementById("classSelect");
  const filterSelect = document.getElementById("leagueClassFilter");

  CONFIG.CLASSES.forEach(cls => {
    const opt1 = document.createElement("option");
    opt1.value = cls;
    opt1.textContent = cls;
    classSelect.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = cls;
    opt2.textContent = cls;
    filterSelect.appendChild(opt2);
  });

  if (CONFIG.CLASS_PASSCODE) {
    document.getElementById("pinGroup").style.display = "flex";
  }

  if (CONFIG.GOOGLE_SCRIPT_URL) {
    const badge = document.getElementById("syncStatusBadge");
    badge.textContent = "● Connected to Live Google Sheet League";
    badge.classList.add("live");
  }

  try {
    const res = await fetch("quizquestions.json");
    QUESTION_BANK = await res.json();
  } catch (err) {
    document.getElementById("loginError").textContent =
      "Could not load quizquestions.json. Make sure it is uploaded in the same folder as index.html.";
    document.getElementById("loginError").style.display = "block";
  }

  await loadLeagueRecords();
}

/* =====================================================================
   VIEW NAVIGATION & LOGIN
   ===================================================================== */
function showView(viewName) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById("btnNavQuiz").classList.remove("active");
  document.getElementById("btnNavLeague").classList.remove("active");

  if (viewName === "login") {
    document.getElementById("viewLogin").classList.add("active");
  } else if (viewName === "quiz") {
    if (!currentUser) {
      document.getElementById("viewLogin").classList.add("active");
      return;
    }
    document.getElementById("viewQuiz").classList.add("active");
    document.getElementById("btnNavQuiz").classList.add("active");
  } else if (viewName === "results") {
    document.getElementById("viewResults").classList.add("active");
  } else if (viewName === "league") {
    document.getElementById("viewLeague").classList.add("active");
    document.getElementById("btnNavLeague").classList.add("active");
  }
}

function handleLogin(e) {
  e.preventDefault();
  if (!QUESTION_BANK.length) return;

  const name = document.getElementById("studentName").value.trim();
  const className = document.getElementById("classSelect").value;
  const pin = document.getElementById("classPin").value.trim();
  const errBox = document.getElementById("loginError");

  if (!name) {
    errBox.textContent = "Please enter your name before starting.";
    errBox.style.display = "block";
    return;
  }

  if (CONFIG.CLASS_PASSCODE && pin !== CONFIG.CLASS_PASSCODE) {
    errBox.textContent = "Incorrect Class Access PIN. Please check with your teacher.";
    errBox.style.display = "block";
    return;
  }

  errBox.style.display = "none";
  currentUser = { name, className };

  document.getElementById("chipName").textContent = name;
  document.getElementById("chipClass").textContent = className;
  document.getElementById("userChip").style.display = "flex";
  document.getElementById("btnSwitchUser").style.display = "inline-flex";

  startQuiz();
}

function logoutStudent() {
  stopTimer();
  currentUser = null;
  document.getElementById("userChip").style.display = "none";
  document.getElementById("btnSwitchUser").style.display = "none";
  showView("login");
}

/* =====================================================================
   QUIZ ENGINE
   ===================================================================== */
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  quizQuestions = shuffleArray(QUESTION_BANK).map(q => {
    const indexedOptions = q.options.map((text, idx) => ({
      text,
      isCorrect: idx === q.correctIndex
    }));
    return {
      ...q,
      shuffledOptions: shuffleArray(indexedOptions)
    };
  });

  currentIdx = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  elapsedSeconds = 0;

  document.getElementById("btn5050").disabled = false;
  document.getElementById("btnClue").disabled = false;

  startTimer();
  showView("quiz");
  renderQuestion();
}

function restartQuiz() {
  startQuiz();
}

function startTimer() {
  stopTimer();
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    elapsedSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
}

function updateTimerDisplay() {
  const mins = String(Math.floor(elapsedSeconds / 60)).padStart(2, "0");
  const secs = String(elapsedSeconds % 60).padStart(2, "0");
  document.getElementById("hudTimer").textContent = `${mins}:${secs}`;
}

function renderQuestion() {
  answeredCurrent = false;
  const q = quizQuestions[currentIdx];
  const total = quizQuestions.length;

  document.getElementById("hudProgress").textContent = `${currentIdx + 1} / ${total}`;
  document.getElementById("hudStreak").textContent = `${streak} 🔥`;
  document.getElementById("hudScore").textContent = score;
  document.getElementById("progressBarFill").style.width = `${((currentIdx + 1) / total) * 100}%`;

  document.getElementById("specimenTag").textContent = `SPECIMEN ${String(currentIdx + 1).padStart(2, "0")}`;
  document.getElementById("specimenTopic").textContent = q.topic;
  document.getElementById("specimenCanvas").innerHTML = SPECIMEN_SVGS[q.visualId] || "";
  document.getElementById("clueBox").style.display = "none";
  document.getElementById("clueBox").textContent = "";

  document.getElementById("qRef").textContent = `${q.ref} • 1 Mark`;
  document.getElementById("questionText").textContent = q.question;
  document.getElementById("feedbackDrawer").style.display = "none";

  const letters = ["A", "B", "C", "D"];
  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  q.shuffledOptions.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.dataset.correct = opt.isCorrect ? "1" : "0";
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span class="opt-text">${opt.text}</span>`;
    btn.onclick = () => selectAnswer(btn, opt.isCorrect, q.explanation);
    container.appendChild(btn);
  });

  document.getElementById("btnNext").textContent =
    currentIdx === total - 1 ? "Finish & Submit to League Table →" : "Next Question →";
}

function selectAnswer(clickedBtn, isCorrect, explanation) {
  if (answeredCurrent) return;
  answeredCurrent = true;

  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.correct === "1") {
      btn.classList.add("correct");
    }
  });

  const titleEl = document.getElementById("feedbackTitle");
  if (isCorrect) {
    clickedBtn.classList.add("correct");
    score++;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
    titleEl.textContent = "✓ Mark Awarded — Accurate AQA Terminology";
    titleEl.style.color = "#2dd4bf";
  } else {
    clickedBtn.classList.add("wrong");
    streak = 0;
    titleEl.textContent = "✗ Distractor Trap — Check Mark-Scheme Phrasing";
    titleEl.style.color = "#fb7185";
  }

  document.getElementById("hudScore").textContent = score;
  document.getElementById("hudStreak").textContent = `${streak} 🔥`;
  document.getElementById("feedbackText").textContent = explanation;
  document.getElementById("feedbackDrawer").style.display = "block";
}

function use5050() {
  if (answeredCurrent) return;
  const btn5050 = document.getElementById("btn5050");
  if (btn5050.disabled) return;
  btn5050.disabled = true;

  const wrongBtns = Array.from(document.querySelectorAll(".option-btn")).filter(
    b => b.dataset.correct === "0"
  );
  shuffleArray(wrongBtns).slice(0, 2).forEach(b => {
    b.disabled = true;
    b.classList.add("eliminated");
  });
}

function useClue() {
  const btnClue = document.getElementById("btnClue");
  if (btnClue.disabled) return;
  btnClue.disabled = true;

  const q = quizQuestions[currentIdx];
  const clueBox = document.getElementById("clueBox");
  clueBox.textContent = `Examiner Hint: ${q.clue}`;
  clueBox.style.display = "block";
}

async function nextQuestion() {
  if (currentIdx < quizQuestions.length - 1) {
    currentIdx++;
    renderQuestion();
  } else {
    await finishQuiz();
  }
}

function calculateGrade(pts) {
  if (pts === 10) return "9";
  if (pts === 9) return "8";
  if (pts === 8) return "7";
  if (pts === 7) return "6";
  if (pts === 6) return "5";
  if (pts === 5) return "4";
  return "3";
}

async function finishQuiz() {
  stopTimer();
  showView("results");

  document.getElementById("resGrade").textContent = calculateGrade(score);
  document.getElementById("resScore").textContent = `${score} / ${quizQuestions.length}`;
  document.getElementById("resStreak").textContent = bestStreak;
  document.getElementById("resTime").textContent = `${elapsedSeconds}s`;
  document.getElementById("resClass").textContent = currentUser.className;

  const record = {
    name: currentUser.name,
    className: currentUser.className,
    score,
    streak: bestStreak,
    timeSeconds: elapsedSeconds,
    timestamp: Date.now()
  };

  await saveLeagueRecord(record);
}

/* =====================================================================
   LEAGUE TABLE STORAGE & GOOGLE SHEETS SYNC
   ===================================================================== */
async function loadLeagueRecords() {
  if (CONFIG.GOOGLE_SCRIPT_URL) {
    try {
      const res = await fetch(CONFIG.GOOGLE_SCRIPT_URL);
      const remoteData = await res.json();
      if (Array.isArray(remoteData)) {
        leagueRecords = remoteData;
        return;
      }
    } catch (err) {
      console.warn("Falling back to local storage:", err);
    }
  }

  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    leagueRecords = JSON.parse(raw);
  } else {
    leagueRecords = [...SEED_RECORDS];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leagueRecords));
  }
}

async function saveLeagueRecord(record) {
  const notice = document.getElementById("submitNotice");
  leagueRecords.push(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leagueRecords));

  if (CONFIG.GOOGLE_SCRIPT_URL) {
    notice.textContent = "Syncing score to Google Sheets league table...";
    try {
      await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record)
      });
      notice.textContent = `✓ Submitted ${record.name} (${record.className}) to the live league table!`;
    } catch (err) {
      notice.textContent = "Saved locally (could not reach Google Sheet endpoint).";
    }
  } else {
    notice.textContent = `✓ Recorded ${record.name} (${record.className}) on the local league table.`;
  }
}

async function openLeagueTable() {
  showView("league");
  await refreshLeagueData();
}

async function refreshLeagueData() {
  await loadLeagueRecords();
  renderLeagueTable();
}

function renderLeagueTable() {
  const filterClass = document.getElementById("leagueClassFilter").value;

  // 1. Class vs Class Standings
  const classMap = {};
  CONFIG.CLASSES.forEach(c => {
    classMap[c] = { className: c, count: 0, totalScore: 0 };
  });

  leagueRecords.forEach(r => {
    if (!classMap[r.className]) {
      classMap[r.className] = { className: r.className, count: 0, totalScore: 0 };
    }
    classMap[r.className].count++;
    classMap[r.className].totalScore += Number(r.score);
  });

  const classRanking = Object.values(classMap)
    .filter(c => c.count > 0)
    .map(c => ({
      ...c,
      avg: (c.totalScore / c.count).toFixed(1)
    }))
    .sort((a, b) => Number(b.avg) - Number(a.avg));

  const grid = document.getElementById("classStandingsGrid");
  grid.innerHTML = classRanking.length
    ? classRanking
        .map(
          (c, idx) => `
      <div class="class-tile">
        <div class="class-tile-top">
          <span class="class-rank">#${idx + 1}</span>
          <strong>${c.className}</strong>
        </div>
        <div class="class-avg">${c.avg} <span>/ 10 avg</span></div>
        <div class="class-meta">${c.count} attempt${c.count === 1 ? "" : "s"}</div>
      </div>`
        )
        .join("")
    : `<p class="muted">No class attempts recorded yet.</p>`;

  // 2. Individual Student Leaderboard
  const filtered =
    filterClass === "ALL"
      ? [...leagueRecords]
      : leagueRecords.filter(r => r.className === filterClass);

  filtered.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.streak !== a.streak) return b.streak - a.streak;
    return a.timeSeconds - b.timeSeconds;
  });

  const tbody = document.getElementById("leagueTableBody");
  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#94a3b8;padding:20px;">No scores recorded for ${filterClass} yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered
    .map((r, idx) => {
      const medal = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `#${idx + 1}`;
      const isCurrent =
        currentUser && r.name === currentUser.name && r.className === currentUser.className;
      return `
        <tr class="${isCurrent ? "highlight-row" : ""}">
          <td><strong>${medal}</strong></td>
          <td>${escapeHtml(r.name)}</td>
          <td><span class="table-class-badge">${escapeHtml(r.className)}</span></td>
          <td><strong>${r.score} / 10</strong></td>
          <td>${r.streak} 🔥</td>
          <td>${r.timeSeconds}s</td>
        </tr>`;
    })
    .join("");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

initApp();
