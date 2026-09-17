window.TRAINING_DATA = {
  updatedAt: "September 16, 2026 · hard session reviewed",
  revision: "20260916-review",
  raceDate: "2026-10-04T07:00:00-07:00",
  blockStart: "2026-08-03T00:00:00-07:00",
  recovery: {
    label: "Quality completed hard · recovery next",
    metrics: [
      { label: "Recorded effort", value: "9/10", unit: "harder than intended", tone: "warn" },
      { label: "Readiness after run", value: "38", unit: "morning 100", tone: "warn" },
      { label: "Morning HRV", value: "111", unit: "ms · 7-day 90 balanced", tone: "good" },
      { label: "Sleep", value: "8:14", unit: "score 84 · RHR 45", tone: "good" }
    ],
    note: "Sep 16: 10.05 mi total, 3 + 2.5 mi work reported; work laps approximately 7:22/mi in both blocks. Effort was hard and uncontrolled; second-block lap HR 194 → 202 → 203. Garmin load 300. Morning recovery was good, but readiness cannot guarantee workout tolerance. The progression from 32 minutes of short repetitions to ~44 minutes in long repetitions was too large for controlled execution. Station weather: 68°F and 17 mph wind; personal exposure unknown. Paused time limits continuous-effort comparisons."
  },
  currentWorkout: {
    date: "2026-09-14",
    type: "rest",
    title: "Run-rest and absorb",
    details: [
      { label: "Running", value: "Rest" },
      { label: "Optional swim", value: "25–35 min genuinely easy · RPE 2" },
      { label: "Strength", value: "Upper body only if fresh · cap at RPE 7" },
      { label: "Lower body", value: "None after the 13.18-mile run" },
      { label: "Recovery", value: "Carbohydrate + 30–40 g protein · hydrate" },
      { label: "Decision", value: "Tuesday depends on morning legs and recovery" }
    ],
    purpose: "Consolidate a successful 44.37-mile week and preserve the quality of the final race-specific build. Fitness is gained during recovery from the work, not by adding Monday mileage."
  },
  week: {
    label: "SEP 7 — SEP 20 · SWIPE TO EXPLORE",
    targetMiles: 43,
    days: [
      { date: "2026-09-07", day: "Mon", miles: 0, type: "rest", title: "Strength + row + swim", detail: "44 min strength · 11 min row · 1,100 m swim · load 96", completed: true, weekMarker: "Last week" },
      { date: "2026-09-08", day: "Tue", miles: 7.55, type: "easy", title: "Easy + strides complete", detail: "10:35/mi · HR 151 · 4 fast segments · strength before", completed: true },
      { date: "2026-09-09", day: "Wed", miles: 9.02, type: "quality", title: "Threshold complete", detail: "4 × 8 min · HR 170 avg / 208 max · load 295 · strong reserve", key: true, completed: true },
      { date: "2026-09-10", day: "Thu", miles: 8.01, type: "easy", title: "Aerobic volume complete", detail: "10:43/mi · HR 147 · load 49", completed: true },
      { date: "2026-09-11", day: "Fri", miles: 0, type: "quality", title: "Soccer complete", detail: "2:02 total · 5.84 mi movement · HR 105 avg / 185 max · load 30", completed: true },
      { date: "2026-09-12", day: "Sat", miles: 6.61, type: "easy", title: "Easy + strength complete", detail: "11:20/mi · HR 144 · 50 min strength before · combined load 57", completed: true },
      { date: "2026-09-13", day: "Sun", miles: 13.18, type: "long", title: "Long run complete", detail: "10:51/mi · HR 153 · load 123 · minimal drift · end stamina 69", key: true, completed: true },
      {
        date: "2026-09-14", day: "Mon", miles: 0, type: "rest", title: "Recovery swim complete", detail: "1,000 m · 32:54 total · HR 115 · load 36", weekMarker: "Current week", completed: true,
        workout: {
          date: "2026-09-14", type: "rest", title: "Recovery swim complete",
          details: [
            { label: "Running", value: "Rest" },
            { label: "Swim", value: "1,000 m · 32:54 total · 23:38 moving" },
            { label: "Average HR", value: "115 bpm" },
            { label: "Training load", value: "36 · Garmin recovery label" },
            { label: "Strength", value: "No session recorded in Garmin" }
          ],
          purpose: "Absorb the 44.37-mile week and arrive responsive for the final race-specific build."
        }
      },
      {
        date: "2026-09-15", day: "Tue", miles: 8, type: "easy", title: "Easy + speed complete", detail: "1:19:37 · HR 149 · RPE 3 · 4 fast segments · load 95", completed: true,
        workout: {
          date: "2026-09-15", type: "easy", title: "8 miles + finishing speed work",
          details: [
            { label: "Recorded total", value: "8.00 mi · 1:19:37 timer · 9:57/mi overall" },
            { label: "Effort", value: "Recorded RPE 3/10 · HR 149 average / 201 peak" },
            { label: "Easy section", value: "7.3 mi @ 5.9 mph (10:10/mi); settled lap HR 147–149" },
            { label: "Fast work", value: "Final 0.7 mi includes strides @ 5:00/mi (12 mph)" },
            { label: "Trace", value: "4 fast segments ~28–36 sec; exact duration affected by belt/watch lag" },
            { label: "Data caveat", value: "Belt settings athlete-confirmed; raw watch laps ~7.70 mi; incline unknown" }
          ],
          purpose: "Easy aerobic work was controlled after Sunday’s long run. Finishing efforts added speed exposure, with more intensity than the prescribed short relaxed strides. Keep future strides around 15–20 sec with full recovery."
        }
      },
      {
        date: "2026-09-16", day: "Wed", miles: 10.05, type: "quality", title: "3 + 2.5 miles · hard", detail: "Work ~7:22/mi · RPE 9 · second rep shortened · load 300", key: true, completed: true,
        workout: {
          date: "2026-09-16", type: "quality", title: "3 + 2.5 miles completed hard",
          details: [
            { label: "Total", value: "10.05 mi · 1:28:13 timer / 1:33:35 elapsed" },
            { label: "Work", value: "3 + 2.5 mi reported · ~7:22/mi work-lap pace" },
            { label: "Second block", value: "Mile 1 7:19 / HR 194; mile 2 7:23 / HR 202; last ~0.5 HR 203" },
            { label: "Effort", value: "Recorded RPE 9/10; athlete reports hard, not controlled" },
            { label: "Conditions", value: "Station 68°F / 17 mph wind; route exposure unknown" },
            { label: "Recovery / pauses", value: "~5:17 easy lap plus paused time; confirm stop reasons" },
            { label: "Strength tonight", value: "Defer lower body; recover from the run" }
          ],
          purpose: "The intended controlled endurance work became too hard. Cutting the second rep was appropriate. Next quality session should return to 24–30 minutes of controlled work and progress one variable at a time; do not repeat this as a redemption test."
        }
      },
      {
        date: "2026-09-17", day: "Thu", miles: 6, type: "easy", title: "5–6 easy or rest", detail: "Recovery check first · no strides · no compensatory miles",
        workout: {
          date: "2026-09-17", type: "easy", title: "5–6 recovery miles if comfortable",
          details: [
            { label: "Total", value: "5–6 miles if legs feel normal; rest if markedly fatigued" },
            { label: "Effort", value: "RPE 2 · full conversation" },
            { label: "Pace", value: "No target; keep the opening 10–15 minutes very gentle" },
            { label: "Strides", value: "None" },
            { label: "Alternative", value: "20–30 min easy swim instead of running if impact feels unwelcome" },
            { label: "Adjustment", value: "Stop for pain or altered gait; no additional lower-body lifting" }
          ],
          purpose: "Allow recovery after the RPE-9 session so the next training days remain useful. Do not make up the omitted rep or mileage."
        }
      },
      {
        date: "2026-09-18", day: "Fri", miles: 0, type: "quality", title: "Soccer or rest", detail: "Soccer counts as intensity · no additional run",
        workout: {
          date: "2026-09-18", type: "quality", title: "Soccer or complete rest",
          details: [
            { label: "If soccer", value: "Prefer skipping this week; play only if recovered, and no extra running/lower lifting" },
            { label: "If no soccer", value: "45–60 min easy bike or 25–40 min easy swim; rest if tired" },
            { label: "Strength", value: "Deferred lower maintenance only if recovered AND no soccer; low volume, no grinders" },
            { label: "Guardrail", value: "Reassess legs/recovery Friday; residual soreness overrides the schedule" }
          ],
          purpose: "Respect soccer as the week's second hard-leg stimulus and protect Sunday durability."
        }
      },
      {
        date: "2026-09-19", day: "Sat", miles: 6, type: "easy", title: "Easy reset", detail: "Very easy after soccer · keep mechanics quiet",
        workout: {
          date: "2026-09-19", type: "easy", title: "6-mile easy reset",
          details: [
            { label: "Total", value: "6 miles" },
            { label: "Effort", value: "RPE 2–3" },
            { label: "After soccer", value: "Keep it recovery-easy; no strides" },
            { label: "If sore", value: "4 miles or rest; do not compensate Sunday" }
          ],
          purpose: "Maintain frequency without carrying soccer fatigue into the long run."
        }
      },
      {
        date: "2026-09-20", day: "Sun", miles: 13, type: "long", title: "Easy long run", detail: "Fully conversational · no fast finish · fuel normally", key: true,
        workout: {
          date: "2026-09-20", type: "long", title: "13-mile easy long run",
          details: [
            { label: "Total", value: "13 miles" },
            { label: "Effort", value: "RPE 2–3 · full conversation" },
            { label: "Pace", value: "No target and no fast finish" },
            { label: "Fuel", value: "30–45 g carbohydrate/hour + fluids" },
            { label: "Route", value: "Sheltered and controlled if possible" }
          ],
          purpose: "Continue easy durability work only if the hard session and subsequent days are absorbed. Reassess before Sunday; do not chase a weekly total."
        }
      }
    ]
  },
  strength: {
    sessions: [
      {
        id: "upper-a",
        day: "Monday",
        title: "Upper A",
        timing: "After the swim or separated by several hours",
        tone: "upper",
        exercises: [
          { name: "Bench press", dose: "Candito primary sets", note: "Cap at RPE 8; no optional back-off volume" },
          { name: "Weighted pull-up", dose: "3 × 4–6", note: "Leave 2 reps in reserve" },
          { name: "Strict press", dose: "2 × 5–6", note: "Use strict press instead of push press" },
          { name: "Chest-supported row", dose: "3 × 6–10", note: "Controlled; leave 2 reps in reserve" }
        ]
      },
      {
        id: "lower",
        day: "Friday · conditional",
        title: "Lower maintenance",
        timing: "Deferred after Wednesday RPE 9. Only if recovered and skipping soccer; otherwise reschedule after the weekend recovery check.",
        tone: "lower",
        exercises: [
          { name: "Power clean", dose: "Omit this exposure", note: "Reduce the dose after Wednesday’s hard run" },
          { name: "Back squat", dose: "2 × 3 · RPE 6", note: "Only if recovered; familiar weight, several reps in reserve" },
          { name: "Bulgarian split squat", dose: "1 × 5 / side", note: "Light familiar load; omit if residual soreness" },
          { name: "Bent-knee soleus raise", dose: "2 × 10–15", note: "Controlled familiar load; no failure" },
          { name: "Standing calf raise", dose: "2 × 8–12", note: "Straight knee; no failure" }
        ],
        alternative: "Do not replace the omitted cleans with extra deadlifts. This is a temporary reduced dose; retain regular lower-body training as recovery allows."
      },
      {
        id: "upper-b",
        day: "Friday",
        title: "Upper B",
        timing: "Run-rest day · skip if soccer creates excess load",
        tone: "upper",
        exercises: [
          { name: "Bench press", dose: "Candito secondary sets", note: "Cap at RPE 7–8; no AMRAP or failure" },
          { name: "Weighted pull-up", dose: "3 × 5", note: "Leave 2–3 reps in reserve" },
          { name: "One-arm or cable row", dose: "3 × 8 / side", note: "No torso grinding" },
          { name: "Pallof press", dose: "2 × 10 / side", note: "Slow anti-rotation control" }
        ]
      }
    ],
    guardrails: [
      "No second lower-body day",
      "No lower-body AMRAPs or grinders",
      "Stop cleans when speed or technique fades",
      "Reduce lower lifting again in the final 10 days"
    ]
  },
  volume: [
    { label: "Aug 24", miles: 39.5, state: "complete" },
    { label: "Aug 31", miles: 38.6, state: "complete" },
    { label: "Sep 7", miles: 44.4, state: "complete" },
    { label: "Sep 14", miles: 43.1, state: "current" },
    { label: "Sep 21", miles: 34, state: "taper" },
    { label: "Race", miles: 27, state: "race" }
  ],
  rules: [
    { icon: "↘", title: "Easy means easy", text: "Use conversational effort. Pace can float with heat and fatigue." },
    { icon: "◇", title: "Fuel the work", text: "Do not create the calorie deficit around threshold or long-run sessions." },
    { icon: "⚑", title: "Soccer is intensity", text: "If soccer happens Friday, reduce Saturday and keep Sunday fully easy." },
    { icon: "⌁", title: "Strength supports running", text: "Keep one lower session weekly, placed Monday at low dose or after quality. No grinders; leave 2–3 reps in reserve." },
    { icon: "+", title: "Build the aerobic ceiling", text: "Use 90–150 easy cross-training minutes weekly. Bike and swim supplement running; they do not replace run-specific durability." },
    { icon: "↗", title: "Build toward 65 mpw", text: "Establish 45–50, then hold and progress through 55 and 60 before 65. Pair it with 2–4 easy cross-training hours rather than forcing 75–80 running miles." }
  ]
};

// Use the timeline prescription as the single source for the next-session panel.
window.TRAINING_DATA.currentWorkout = window.TRAINING_DATA.week.days.find(
  (day) => day.date === "2026-09-17"
).workout;
