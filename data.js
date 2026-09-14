window.TRAINING_DATA = {
  updatedAt: "September 13, 2026 · long-term priority reset",
  raceDate: "2026-10-04T07:00:00-07:00",
  blockStart: "2026-08-03T00:00:00-07:00",
  recovery: {
    label: "Long run absorbed well · recover next",
    metrics: [
      { label: "Long run", value: "13.18", unit: "miles", tone: "good" },
      { label: "Average HR", value: "153", unit: "bpm", tone: "good" },
      { label: "Average pace", value: "10:51", unit: "/mi", tone: "good" },
      { label: "End stamina", value: "69", unit: "%", tone: "good" }
    ],
    note: "The second half was approximately 4% faster while HR rose only about 2 bpm. Compared with September 4, this was longer, lower-HR, less costly, and showed materially better aerobic durability. The week closes at 44.37 running miles."
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
    targetMiles: 46,
    days: [
      { date: "2026-09-07", day: "Mon", miles: 0, type: "rest", title: "Strength + row + swim", detail: "44 min strength · 11 min row · 1,100 m swim · load 96", completed: true, weekMarker: "Last week" },
      { date: "2026-09-08", day: "Tue", miles: 7.55, type: "easy", title: "Easy + strides complete", detail: "10:35/mi · HR 151 · 4 fast segments · strength before", completed: true },
      { date: "2026-09-09", day: "Wed", miles: 9.02, type: "quality", title: "Threshold complete", detail: "4 × 8 min · HR 170 avg / 208 max · load 295 · strong reserve", key: true, completed: true },
      { date: "2026-09-10", day: "Thu", miles: 8.01, type: "easy", title: "Aerobic volume complete", detail: "10:43/mi · HR 147 · load 49", completed: true },
      { date: "2026-09-11", day: "Fri", miles: 0, type: "quality", title: "Soccer complete", detail: "2:02 total · 5.84 mi movement · HR 105 avg / 185 max · load 30", completed: true },
      { date: "2026-09-12", day: "Sat", miles: 6.61, type: "easy", title: "Easy + strength complete", detail: "11:20/mi · HR 144 · 50 min strength before · combined load 57", completed: true },
      { date: "2026-09-13", day: "Sun", miles: 13.18, type: "long", title: "Long run complete", detail: "10:51/mi · HR 153 · load 123 · minimal drift · end stamina 69", key: true, completed: true },
      {
        date: "2026-09-14", day: "Mon", miles: 0, type: "rest", title: "Run-rest and absorb", detail: "Optional easy swim · optional controlled upper body", weekMarker: "Peak week",
        workout: {
          date: "2026-09-14", type: "rest", title: "Run-rest and absorb",
          details: [
            { label: "Running", value: "Rest" },
            { label: "Optional swim", value: "25–35 min genuinely easy · RPE 2" },
            { label: "Strength", value: "Upper body only if fresh · cap at RPE 7" },
            { label: "Lower body", value: "None after the 13.18-mile run" },
            { label: "Recovery", value: "Carbohydrate + 30–40 g protein · hydrate" }
          ],
          purpose: "Absorb the 44.37-mile week and arrive responsive for the final race-specific build."
        }
      },
      {
        date: "2026-09-15", day: "Tue", miles: 8, type: "easy", title: "Easy + strides", detail: "Conversational · 6 × 20 sec relaxed strides",
        workout: {
          date: "2026-09-15", type: "easy", title: "8 easy + relaxed strides",
          details: [
            { label: "Total", value: "8 miles" },
            { label: "Effort", value: "RPE 2–3 · full conversation" },
            { label: "Strides", value: "6 × 20 sec fast, smooth, not sprinting" },
            { label: "Recovery", value: "60–90 sec walk/jog after each" },
            { label: "Condition", value: "Skip strides if legs are dull or soreness exceeds 2/10" }
          ],
          purpose: "Restore rhythm after Monday recovery and prime mechanics without adding metabolic fatigue."
        }
      },
      {
        date: "2026-09-16", day: "Wed", miles: 11, type: "quality", title: "2 × 3 miles at HM effort", detail: "7:15–7:20/mi · 4 min easy jog · controlled throughout", key: true,
        workout: {
          date: "2026-09-16", type: "quality", title: "2 × 3 miles at HM effort",
          details: [
            { label: "Total", value: "Approximately 11 miles" },
            { label: "Warm-up", value: "2.5 mi easy + drills + 4 relaxed pickups" },
            { label: "Main work", value: "2 × 3 mi @ 7:15–7:20/mi" },
            { label: "Recovery", value: "4 min very easy jog" },
            { label: "Treadmill", value: "8.2 mph; 8.3 only late if controlled · 0.5% incline" },
            { label: "Execution", value: "No HR cap; stable breathing, mechanics, and pace decide" }
          ],
          purpose: "Test goal-pace durability in long repetitions. Finish knowing you could run another mile—not emptied."
        }
      },
      {
        date: "2026-09-17", day: "Thu", miles: 8, type: "easy", title: "Aerobic recovery", detail: "Easy only · no strides · no pace target",
        workout: {
          date: "2026-09-17", type: "easy", title: "8-mile aerobic recovery",
          details: [
            { label: "Total", value: "8 miles" },
            { label: "Effort", value: "RPE 2–3 · conversational" },
            { label: "Pace", value: "No target; slower is appropriate after Wednesday" },
            { label: "Strides", value: "None" },
            { label: "Adjustment", value: "Stop at 6–7 only for pain, altered gait, or systemic fatigue" }
          ],
          purpose: "Add low-cost aerobic volume while absorbing the HM-specific workout."
        }
      },
      {
        date: "2026-09-18", day: "Fri", miles: 0, type: "quality", title: "Soccer or rest", detail: "Soccer counts as intensity · no additional run",
        workout: {
          date: "2026-09-18", type: "quality", title: "Soccer or complete rest",
          details: [
            { label: "If soccer", value: "Play, but do not add running mileage" },
            { label: "If no soccer", value: "Rest; optional 25–40 min easy swim" },
            { label: "Strength", value: "Upper body only · no grinding" },
            { label: "Guardrail", value: "No lower-body lifting before the weekend" }
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
          purpose: "Complete the 46-mile peak week with aerobic durability, not another race simulation."
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
        day: "Wednesday after quality",
        title: "Lower maintenance",
        timing: "Minimum effective dose · consolidate stress after the key run",
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
    { label: "Sep 7", miles: 44.4, state: "complete" },
    { label: "Sep 14", miles: 46, state: "current" },
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
