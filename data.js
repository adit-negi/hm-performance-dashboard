window.TRAINING_DATA = {
  updatedAt: "September 7, 2026 · lower-body session restored",
  raceDate: "2026-10-04T07:00:00-07:00",
  blockStart: "2026-08-03T00:00:00-07:00",
  recovery: {
    label: "Ready for easy cycling · Sep 7",
    metrics: [
      { label: "Readiness", value: "95", unit: "prime", tone: "good" },
      { label: "Overnight HRV", value: "94", unit: "ms", tone: "good" },
      { label: "Resting HR", value: "49", unit: "bpm", tone: "good" },
      { label: "Body Battery", value: "82", unit: "current", tone: "good" }
    ],
    note: "Recovery supports one minimum-effective-dose lower session. This preserves long-term strength without turning Monday into a high-fatigue Candito leg day before Wednesday threshold."
  },
  currentWorkout: {
    date: "2026-09-07",
    type: "rest",
    title: "Lower-body maintenance",
    details: [
      { label: "Power clean", value: "4 × 2 @ 60–70% · RPE 5–6" },
      { label: "Back squat", value: "3 × 3 @ 70–75% · RPE 6–7" },
      { label: "Unilateral", value: "Bulgarian split squat 2 × 5 / side · RPE 6" },
      { label: "Lower leg", value: "Soleus 3 × 10–15 + standing calf 2 × 8–12" },
      { label: "Optional", value: "20–30 min easy swim · no running or cycling" }
    ],
    purpose: "Maintain force production and lower-limb tissue capacity with the smallest useful fatigue dose. Every repetition should remain fast and technically clean so Wednesday quality stays viable."
  },
  week: {
    label: "SEP 7 — SEP 13",
    targetMiles: 45,
    days: [
      { date: "2026-09-07", day: "Mon", miles: 0, type: "rest", title: "Run rest + lower maintenance", detail: "Cleans + squat + unilateral/calf work · optional easy swim" },
      { date: "2026-09-08", day: "Tue", miles: 7, type: "easy", title: "Easy + strides", detail: "6 × 20 sec relaxed · full recovery" },
      { date: "2026-09-09", day: "Wed", miles: 9, type: "quality", title: "Threshold density", detail: "4 × 8 min @ 8.1 mph · 2 min jog · final 8.2 only if controlled", key: true },
      { date: "2026-09-10", day: "Thu", miles: 8, type: "easy", title: "Aerobic volume", detail: "Conversational · no pace target" },
      { date: "2026-09-11", day: "Fri", miles: 4, type: "easy", title: "Easy or soccer", detail: "If soccer happens, omit the run" },
      { date: "2026-09-12", day: "Sat", miles: 4, type: "easy", title: "Recovery", detail: "Very easy · keep legs quiet" },
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
    { label: "Aug 31", miles: 43, state: "current" },
    { label: "Sep 7", miles: 45, state: "planned" },
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
