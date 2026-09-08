(function () {
  const data = window.TRAINING_DATA;
  const $ = (selector) => document.querySelector(selector);

  const formatDate = (dateString) =>
    new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(
      new Date(`${dateString}T12:00:00`)
    );

  function renderCountdown() {
    const now = new Date();
    const race = new Date(data.raceDate);
    const start = new Date(data.blockStart);
    const remaining = Math.max(0, Math.ceil((race - now) / 86400000));
    const total = race - start;
    const elapsed = Math.max(0, Math.min(total, now - start));
    $("#daysToRace").textContent = remaining;
    $("#countdownProgress").style.width = `${Math.round((elapsed / total) * 100)}%`;
    $("#updatedAt").textContent = `Plan updated ${data.updatedAt}`;
  }

  function renderCurrentWorkout() {
    const workout = data.currentWorkout;
    $("#nextWorkoutTitle").textContent = workout.title;
    $("#nextWorkoutIcon").textContent = workout.type === "long" ? "↗" : workout.type === "rest" ? "○" : "⚡";
    $("#nextWorkoutPurpose").textContent = workout.purpose;
    $("#nextWorkoutDetails").innerHTML = workout.details
      .map(
        (item) => `
          <div class="detail-row">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </div>`
      )
      .join("");
  }

  function renderRecovery() {
    $("#metricGrid").innerHTML = data.recovery.metrics
      .map(
        (metric) => `
          <div class="metric ${metric.tone}">
            <span>${metric.label}</span>
            <strong>${metric.value}</strong>
            <small>${metric.unit}</small>
          </div>`
      )
      .join("");
    $("#recoveryNote").textContent = data.recovery.note;
  }

  function renderWeek() {
    const stored = JSON.parse(localStorage.getItem("hm-dashboard-completed") || "{}");
    $("#weekRange").textContent = data.week.label || "CURRENT TRAINING WEEK";
    $("#weekMiles").textContent = data.week.targetMiles;
    $("#weekGrid").innerHTML = data.week.days
      .map((day) => {
        const completed = Boolean(day.completed || stored[day.date]);
        return `
          <article class="day-card ${day.type} ${day.key ? "key" : ""} ${completed ? "completed" : ""}">
            <div class="day-top">
              <div><strong>${day.day}</strong><span>${formatDate(day.date).split(", ")[1]}</span></div>
              ${day.key ? '<span class="key-label">KEY</span>' : ""}
            </div>
            <div class="day-distance">${day.miles ? `<strong>${day.miles}</strong><span>mi</span>` : '<strong class="rest-mark">—</strong>'}</div>
            <h3>${day.title}</h3>
            <p>${day.detail}</p>
            <button class="complete-toggle" data-date="${day.date}" aria-pressed="${completed}">
              <span>${completed ? "✓" : ""}</span>${completed ? "Completed" : "Mark complete"}
            </button>
          </article>`;
      })
      .join("");

    document.querySelectorAll(".complete-toggle").forEach((button) => {
      button.addEventListener("click", () => {
        const state = JSON.parse(localStorage.getItem("hm-dashboard-completed") || "{}");
        state[button.dataset.date] = !state[button.dataset.date];
        localStorage.setItem("hm-dashboard-completed", JSON.stringify(state));
        renderWeek();
      });
    });
  }

  function renderVolume() {
    const max = Math.max(...data.volume.map((week) => week.miles));
    $("#volumeChart").innerHTML = data.volume
      .map(
        (week) => `
          <div class="volume-column ${week.state}">
            <span class="volume-value">${week.miles}</span>
            <div class="bar-track"><i style="height:${Math.round((week.miles / max) * 100)}%"></i></div>
            <span class="volume-label">${week.label}</span>
          </div>`
      )
      .join("");
  }

  function renderStrength() {
    const stored = JSON.parse(localStorage.getItem("hm-dashboard-strength") || "{}");
    $("#strengthGrid").innerHTML = data.strength.sessions
      .map(
        (session) => `
          <article class="strength-card ${session.tone}">
            <div class="strength-card-head">
              <div><span>${session.day}</span><h3>${session.title}</h3></div>
              <span class="session-type">${session.tone}</span>
            </div>
            <p class="strength-timing">${session.timing}</p>
            <div class="exercise-list">
              ${session.exercises
                .map((exercise, index) => {
                  const key = `${session.id}-${index}`;
                  const completed = Boolean(stored[key]);
                  return `
                    <button class="exercise ${completed ? "completed" : ""}" data-exercise="${key}" aria-pressed="${completed}">
                      <span class="exercise-check">${completed ? "✓" : ""}</span>
                      <span class="exercise-copy"><strong>${exercise.name}</strong><small>${exercise.note}</small></span>
                      <b>${exercise.dose}</b>
                    </button>`;
                })
                .join("")}
            </div>
            ${session.alternative ? `<p class="strength-alternative"><strong>Alternative:</strong> ${session.alternative}</p>` : ""}
          </article>`
      )
      .join("");

    $("#strengthGuardrails").innerHTML = data.strength.guardrails
      .map((guardrail) => `<span>${guardrail}</span>`)
      .join("");

    document.querySelectorAll(".exercise").forEach((button) => {
      button.addEventListener("click", () => {
        const state = JSON.parse(localStorage.getItem("hm-dashboard-strength") || "{}");
        state[button.dataset.exercise] = !state[button.dataset.exercise];
        localStorage.setItem("hm-dashboard-strength", JSON.stringify(state));
        renderStrength();
      });
    });
  }

  function renderRules() {
    $("#rulesGrid").innerHTML = data.rules
      .map(
        (rule) => `
          <article class="rule">
            <span class="rule-icon">${rule.icon}</span>
            <div><h3>${rule.title}</h3><p>${rule.text}</p></div>
          </article>`
      )
      .join("");
  }

  renderCountdown();
  renderCurrentWorkout();
  renderRecovery();
  renderWeek();
  renderStrength();
  renderVolume();
  renderRules();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");
  window.scrollTo(0, 0);
})();
