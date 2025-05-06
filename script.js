const defaultMoods = {
  happy: {
    label: "😊 Happy",
    description: "Feeling joyful, content, cheerful.",
    affirmations: [
      "Today is full of joy and possibility!",
      "Your happiness inspires everyone around you.",
      "You're smiling more than ever today."
    ],
    images: ["https://picsum.photos/seed/happy/600/400", "https://picsum.photos/seed/sunrise/600/400"],
    sound: "https://cdn.pixabay.com/audio/2022/03/15/audio_4e8d5c5dae.mp3",
    bgColor: "#fff3cd",
    textColor: "#7d4e00",
    headerBg: "#fcd34d",
    headerColor: "#3b1f00",
    buttonBg: "#fbbf24",
    buttonColor: "white",
    calendarColor: "#fcd34d"
  },
  calm: {
    label: "🧘‍♀️ Calm",
    description: "Peaceful, relaxed, centered.",
    affirmations: [
      "Peace begins with a single breath.",
      "You're grounded, centered, and calm.",
      "Every moment is a chance to breathe deeply."
    ],
    images: ["https://picsum.photos/seed/forest/600/400", "https://picsum.photos/seed/lake/600/400"],
    sound: "https://cdn.pixabay.com/audio/2021/12/10/audio_b398ceac60.mp3",
    bgColor: "#d6f5f5",
    textColor: "#005c5c",
    headerBg: "#7ee0e0",
    headerColor: "#003333",
    buttonBg: "#0ea5e9",
    buttonColor: "white",
    calendarColor: "#7ee0e0"
  },
  energetic: {
    label: "⚡ Energetic",
    description: "Motivated, alert, active.",
    affirmations: [
      "You're unstoppable today!",
      "Energy flows through you like fire.",
      "You have all the power you need within you."
    ],
    images: ["https://picsum.photos/seed/mountain/600/400", "https://picsum.photos/seed/run/600/400"],
    sound: "https://cdn.pixabay.com/audio/2022/02/22/audio_e9a2efe1c1.mp3",
    bgColor: "#ffe6f0",
    textColor: "#8b003c",
    headerBg: "#ffaddb",
    headerColor: "#4d0011",
    buttonBg: "#ec4899",
    buttonColor: "white",
    calendarColor: "#ec4899"
  },
  sad: {
    label: "😢 Sad",
    description: "Down, grieving, low energy.",
    affirmations: [
      "It’s okay to feel this way.",
      "Healing takes time — be gentle with yourself.",
      "You’re not alone in how you feel."
    ],
    images: ["https://picsum.photos/seed/rain/600/400", "https://picsum.photos/seed/cloudy-sky/600/400"],
    sound: "https://cdn.pixabay.com/audio/2021/09/20/audio_c0cddda29d.mp3",
    bgColor: "#e0e0e0",
    textColor: "#2a2a2a",
    headerBg: "#999",
    headerColor: "#fff",
    buttonBg: "#6b7280",
    buttonColor: "white",
    calendarColor: "#999"
  },
  tired: {
    label: "😴 Tired",
    description: "Fatigued, sleepy, drained.",
    affirmations: [
      "Rest is part of growth.",
      "You’ve done enough today.",
      "Recharge — you deserve it."
    ],
    images: ["https://picsum.photos/seed/sunset/600/400", "https://picsum.photos/seed/coffee/600/400"],
    sound: "https://cdn.pixabay.com/audio/2021/06/13/audio_8df7b59eb1.mp3",
    bgColor: "#f1f1c9",
    textColor: "#555522",
    headerBg: "#c7c795",
    headerColor: "#333",
    buttonBg: "#a1a100",
    buttonColor: "white",
    calendarColor: "#c7c795"
  },
  reflective: {
    label: "🤔 Reflective",
    description: "Thoughtful, introspective, curious.",
    affirmations: [
      "Growth comes from reflection.",
      "You are learning something new every day.",
      "Questions lead to clarity."
    ],
    images: ["https://picsum.photos/seed/mountain-view/600/400", "https://picsum.photos/seed/library/600/400"],
    sound: "https://cdn.pixabay.com/audio/2021/03/08/audio_3e81c1f562.mp3",
    bgColor: "#f0f4ff",
    textColor: "#003366",
    headerBg: "#a0c4ff",
    headerColor: "#001f3f",
    buttonBg: "#3b82f6",
    buttonColor: "white",
    calendarColor: "#3b82f6"
  },
  loved: {
    label: "🥰 Loved",
    description: "Connected, cared for, warm-hearted.",
    affirmations: [
      "You are worthy of love and belonging.",
      "You give and receive love freely.",
      "You are never truly alone."
    ],
    images: ["https://picsum.photos/seed/family/600/400", "https://picsum.photos/seed/couple/600/400"],
    sound: "https://cdn.pixabay.com/audio/2021/03/08/audio_3e81c1f562.mp3",
    bgColor: "#fff0f6",
    textColor: "#7a003c",
    headerBg: "#fbcfe8",
    headerColor: "#7a003c",
    buttonBg: "#f472b6",
    buttonColor: "white",
    calendarColor: "#fbcfe8"
  }
};

let moodData = JSON.parse(localStorage.getItem("moodData")) || defaultMoods;

function saveMoodData() {
  localStorage.setItem("moodData", JSON.stringify(moodData));
}

// Populate mood dropdowns
function populateMoodSelect(selectId = "moodSelect") {
  const select = document.getElementById(selectId);
  select.innerHTML = "";
  Object.keys(moodData).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = moodData[key].label;
    select.appendChild(option);
  });
}

// Update UI based on selected mood
function updateMoodUI(moodKey) {
  const mood = moodData[moodKey];
  document.body.className = '';
  document.body.classList.add(moodKey);

  const header = document.querySelector("header");
  header.style.backgroundColor = mood.headerBg || "#007bff";
  header.style.color = mood.headerColor || "white";

  // Change image
  const image = mood.images[Math.floor(Math.random() * mood.images.length)];
  const carouselImage = document.getElementById("carouselImage");
  carouselImage.style.opacity = 0;
  setTimeout(() => {
    carouselImage.src = image;
    carouselImage.style.opacity = 1;
  }, 300);

  if (document.getElementById("soundToggle").checked) {
    document.getElementById("ambientSound").src = mood.sound;
    document.getElementById("ambientSound").play();
  }

  // Show random affirmation
  const aff = mood.affirmations[Math.floor(Math.random() * mood.affirmations.length)] || "";
  const affDiv = document.getElementById("dailyAffirmation");
  affDiv.style.opacity = 0;
  setTimeout(() => {
    affDiv.textContent = aff;
    affDiv.style.opacity = 1;
  }, 300);

  // Update buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.style.backgroundColor = mood.buttonBg || "#007bff";
    btn.style.color = mood.buttonColor || "white";
  });

  // Load theme settings
  document.getElementById("bgColorPicker").value = mood.bgColor || "#ffffff";
  document.getElementById("textColorPicker").value = mood.textColor || "#333333";
  document.getElementById("buttonColorPicker").value = mood.buttonBg || "#007bff";
  document.getElementById("headerColorPicker").value = mood.headerBg || "#007bff";
  document.getElementById("calendarColorPicker").value = mood.calendarColor || "#eee";

  renderCalendar("homepageCalendarGrid");
}

// Load greeting
function greetUser() {
  const greetingEl = document.getElementById("greeting");
  const now = new Date();
  const hour = now.getHours();

  let greeting = "Welcome back!";
  if (hour >= 5 && hour < 12) greeting = "Good morning!";
  else if (hour >= 12 && hour < 17) greeting = "Good afternoon!";
  else greeting = "Hello again!";
  greetingEl.textContent = `${greeting}`;
}
greetUser();

// Tabs
document.querySelectorAll(".tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
    if (btn.dataset.tab === "dashboard") updateMoodUI(moodSelect.value);
  });
});

// Mood selector
const moodSelect = document.getElementById("moodSelect");
populateMoodSelect();
moodSelect.addEventListener("change", e => updateMoodUI(e.target.value));
updateMoodUI("happy");

// Sound toggle
document.getElementById("soundToggle").addEventListener("change", () => {
  const mood = moodData[moodSelect.value];
  if (document.getElementById("soundToggle").checked) {
    document.getElementById("ambientSound").src = mood.sound;
    document.getElementById("ambientSound").play();
  } else {
    document.getElementById("ambientSound").pause();
  }
});

// Save journal entry
document.getElementById("saveJournalBtn").addEventListener("click", () => {
  const mood = moodSelect.value;
  const journalEntry = document.getElementById("journalEntry").value.trim();
  const dateStr = new Date().toISOString().split('T')[0];

  if (!journalEntry) return alert("Please write something before saving.");

  const entry = { mood, journal: journalEntry };
  localStorage.setItem(`journal-${dateStr}`, JSON.stringify(entry));

  document.getElementById("journalEntry").value = "";
  alert("✅ Entry saved!");
  renderHistory();
  renderCalendar("homepageCalendarGrid");
});

// Render history
function renderHistory() {
  const list = document.getElementById("historyList");
  const keys = Object.keys(localStorage).filter(k => k.startsWith("journal-"));

  if (keys.length === 0) {
    list.innerHTML = "<p>No journal entries made yet.</p>";
    return;
  }

  list.innerHTML = "<ul>";
  keys
    .sort((a, b) => b.localeCompare(a))
    .forEach(key => {
      const entry = JSON.parse(localStorage.getItem(key));
      const date = key.replace("journal-", "");
      const moodLabel = moodData[entry.mood]?.label || entry.mood;
      list.innerHTML += `
        <li>
          <strong>${date}</strong> - ${moodLabel}<br>
          <em>"${entry.journal}"</em>
        </li>`;
    });
  list.innerHTML += "</ul>";
}

// Renders calendar grid into a container by ID
function renderCalendar(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  // Get current month/year for display
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const monthName = monthNames[month];

  // Display month + year above calendar
  const heading = document.getElementById("calendarMonthYear");
  if (heading) {
    heading.textContent = `${monthName} ${year}`;
  }

  // First day of the month (0-6)
  const firstDay = new Date(year, month, 1);
  const startDay = firstDay.getDay();

  // Last day of the month
  const lastDay = new Date(year, month + 1, 0).getDate();

  // Add empty cells for days before the 1st
  for (let i = 0; i < startDay; i++) {
    const emptyCell = document.createElement("div");
    container.appendChild(emptyCell);
  }

  // Fill in each day
  for (let d = 1; d <= lastDay; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const entry = JSON.parse(localStorage.getItem(`journal-${dateStr}`)) || {};

    const cell = document.createElement("div");
    cell.textContent = d;
    cell.style.backgroundColor = entry.mood ? moodData[entry.mood]?.calendarColor || "#eee" : "#eee";
    cell.title = entry.mood ? moodData[entry.mood]?.label : "";
    container.appendChild(cell);
  }
}

// Affirmations tab
function renderAffirmationsTab() {
  const select = document.getElementById("affirmationMoodSelect");
  const list = document.getElementById("affirmationList");
  const input = document.getElementById("newAffirmationInput");
  const addBtn = document.getElementById("addAffirmationBtn");

  function populateAffirmationSelect() {
    select.innerHTML = "";
    Object.keys(moodData).forEach(key => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = moodData[key].label;
      select.appendChild(option);
    });
  }

  function renderAffirmations() {
    const mood = select.value;
    const affirmations = moodData[mood]?.affirmations || [];
    list.innerHTML = "";
    affirmations.forEach(aff => {
      const li = document.createElement("li");
      li.textContent = aff;
      list.appendChild(li);
    });
  }

  select.addEventListener("change", renderAffirmations);
  addBtn.addEventListener("click", () => {
    const mood = select.value;
    const text = input.value.trim();
    if (text) {
      moodData[mood].affirmations.push(text);
      saveMoodData();
      input.value = "";
      renderAffirmations();
    }
  });

  populateAffirmationSelect();
  renderAffirmations();
}

// Mood guide
function renderMoodGuide() {
  const list = document.getElementById("moodGuideList");
  list.innerHTML = "";
  Object.entries(moodData).forEach(([key, mood]) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${mood.label}</strong>: ${mood.description}`;
    list.appendChild(li);
  });
}

// Add new mood
document.getElementById("addMoodBtn").addEventListener("click", () => {
  const name = document.getElementById("newMoodName").value.trim();
  const label = document.getElementById("newMoodLabel").value.trim();
  const description = document.getElementById("newMoodDescription").value.trim();

  if (!name || !label || !description) {
    return alert("All fields are required.");
  }

  moodData[name] = {
    label,
    description,
    affirmations: [],
    images: [`https://picsum.photos/seed/${name}/600/400`],
    sound: "",
    bgColor: "#eee",
    textColor: "#333",
    headerBg: "#aaa",
    headerColor: "#000",
    buttonBg: "#007bff",
    buttonColor: "white",
    calendarColor: "#ccc"
  };

  saveMoodData();
  populateMoodSelect();
  renderMoodGuide();
  alert("🆕 New mood added!");
});

// Theme settings
function loadThemeSettings() {
  const mood = moodData[moodSelect.value];
  document.getElementById("bgColorPicker").value = mood.bgColor || "#ffffff";
  document.getElementById("textColorPicker").value = mood.textColor || "#333333";
  document.getElementById("buttonColorPicker").value = mood.buttonBg || "#007bff";
  document.getElementById("headerColorPicker").value = mood.headerBg || "#007bff";
  document.getElementById("calendarColorPicker").value = mood.calendarColor || "#ccc";
}

// Save Theme Button Click
document.getElementById("saveThemeBtn").addEventListener("click", () => {
  const mood = moodSelect.value;
  moodData[mood].bgColor = document.getElementById("bgColorPicker").value;
  moodData[mood].textColor = document.getElementById("textColorPicker").value;
  moodData[mood].buttonBg = document.getElementById("buttonColorPicker").value;
  moodData[mood].headerBg = document.getElementById("headerColorPicker").value;
  moodData[mood].calendarColor = document.getElementById("calendarColorPicker").value;

  saveMoodData();
  updateMoodUI(mood);
  alert("🎨 Theme updated!");
});

// Update Mood UI Function
function updateMoodUI(moodKey) {
  const mood = moodData[moodKey];
  document.body.className = '';
  document.body.classList.add(moodKey);

  // Apply background color to body
  document.body.style.backgroundColor = mood.bgColor || "#ffffff";

  // Other UI updates...
}

window.addEventListener("DOMContentLoaded", () => {
  renderHistory();
  renderCalendar("homepageCalendarGrid");
  renderAffirmationsTab();
  renderMoodGuide();
  loadThemeSettings();
});
