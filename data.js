window.TRAINING_DATA = {
  updatedAt: "September 13, 2026 · weekly review",
  raceDate: "2026-10-04T07:00:00-07:00",
  blockStart: "2026-08-03T00:00:00-07:00",
  recovery: {
    label: "Recovered and ready · Sep 13",
    metrics: [
      { label: "Readiness", value: "77", unit: "high", tone: "good" },
      { label: "Overnight HRV", value: "83", unit: "ms · balanced", tone: "good" },
      { label: "Resting HR", value: "50", unit: "bpm", tone: "good" },
      { label: "Sleep", value: "7:40", unit: "score 88", tone: "good" }
    ],
    note: "Recovery has normalized after Wednesday's quality session and Friday soccer. The athlete feels good, HRV is balanced, RHR is baseline, and readiness is high. Proceed with 13 easy, but keep it fully conversational after Saturday's strength and 6.61-mile run."
  },
  currentWorkout: {
    date: "2026-09-13",
    type: "long",
    title: "13-mile easy long run",
    details: [
      { label: "Total", value: "13 miles · fully easy" },
      { label: "Effort", value: "RPE 2–3 · full-sentence conversation" },
      { label: "Pace", value: "No target · hold back early and late" },
      { label: "HR context", value: "Usually 145–160 · do not chase a hard cap" },
      { label: "Fuel", value: "Start fed · 30–45 g carbohydrate/hour" },
      { label: "Route", value: "Prefer sheltered/controlled · avoid exposed Baylands wind" }
    ],
    purpose: "Build easy aerobic durability and complete an approximately 44-mile peak week while absorbing Wednesday threshold, Friday soccer, and Saturday strength. No fast finish today."
  },
  week: {
    label: "SEP 7 — SEP 13",
    targetMiles: 45,
    days: [
      { date: "2026-09-07", day: "Mon", miles: 0, type: "rest", title: "Strength + row + swim", detail: "44 min strength · 11 min row · 1,100 m swim · load 96", completed: true },
      { date: "2026-09-08", day: "Tue", miles: 7.55, type: "easy", title: "Easy + strides complete", detail: "10:35/mi · HR 151 · 4 fast segments · strength before", completed: true },
      { date: "2026-09-09", day: "Wed", miles: 9.02, type: "quality", title: "Threshold complete", detail: "4 × 8 min · HR 170 avg / 208 max · load 295 · strong reserve", key: true, completed: true },
      { date: "2026-09-10", day: "Thu", miles: 8.01, type: "easy", title: "Aerobic volume complete", detail: "10:43/mi · HR 147 · load 49", completed: true },
      { date: "2026-09-11", day: "Fri", miles: 0, type: "quality", title: "Soccer complete", detail: "2:02 total · 5.84 mi movement · HR 105 avg / 185 max · load 30", completed: true },
      { date: "2026-09-12", day: "Sat", miles: 6.61, type: "easy", title: "Easy + strength complete", detail: "11:20/mi · HR 144 · 50 min strength before · combined load 57", completed: true },
      { date: "2026-09-13", day: "Sun", miles: 13, type: "long", title: "Long run", detail: "Fully easy · fuel 30–45 g carbohydrate/hour", key: true }
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
        day: "Monday this week",
        title: "Lower maintenance",
        timing: "Minimum effective dose · approximately 48 hours before threshold",
        tone: "lower",
        exercises: [
          { name: "Power clean", dose: "4 × 2 @ 60–70%", note: "RPE 5–6; only with established technique" },
          { name: "Back squat", dose: "3 × 3 @ 70–80%", note: "RPE 6–7; every rep fast and clean" },
          { name: "Bulgarian split squat", dose: "2 × 5–6 / side", note: "Running-specific unilateral strength" },
          { name: "Bent-knee soleus raise", dose: "3 × 10–15", note: "Full range; controlled lowering" },
          { name: "Standing calf raise", dose: "2 × 8–12", note: "Straight knee; no failure" }
        ],
        alternative: "If clean technique is not already reliable: replace cleans with one deadlift top set of 2–3 at RPE 6–7 plus 1–2 light back-off sets."
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
    { label: "Sep 7", miles: 44.2, state: "current" },
    { label: "Sep 14", miles: 46, state: "peak" },
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
