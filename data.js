window.TRAINING_DATA = {
  updatedAt: "September 16, 2026 · balanced development schedule",
  revision: "20260916-balanced",
  raceGoal: { time: "1:38", pace: "7:29/mi", status: "Provisional; confirm with recovered effort" },
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
    note: "Sep 16: 10.05 mi total, 3 + 2.5 mi work reported; work laps approximately 7:22/mi in both blocks. Athlete ran out of gas; legs felt okay, no pain. Pauses were red lights and a longer water break, not reported fatigue stops. Second-block lap HR 194 → 202 → 203, recorded RPE 9. The prescribed duration progression was too large for controlled execution. Station wind was 17 mph; personal exposure unknown. Fueling contribution remains unconfirmed."
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
    label: "SEP 7 — SEP 27 · NEXT WEEK PROVISIONAL",
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
            { label: "Recovery / pauses", value: "~5:17 easy lap; pauses were red lights and a longer water break" },
            { label: "Athlete feedback", value: "Ran out of gas; legs okay, no pain. Fuel intake not yet known." },
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
        date: "2026-09-18", day: "Fri", miles: 0, type: "rest", title: "Lower + easy bike", detail: "Planned if recovered · soccer alternative excludes lifting/bike",
        workout: {
          date: "2026-09-18", type: "rest", title: "Reduced lower + 45-minute easy bike",
          details: [
            { label: "If soccer", value: "Prefer skipping this week; play only if recovered, and no extra running/lower lifting" },
            { label: "Bike", value: "45 min at conversational RPE 2; no hills/surges. Swim 30 min if bike unavailable." },
            { label: "Lower", value: "Squat 2 × 3 RPE 6; split squat 1 × 5/side; soleus 2 × 12; calf 2 × 10" },
            { label: "Placement", value: "Separate bike/lifting if convenient; use familiar loads and leave ≥3 reps in reserve" },
            { label: "Recovery / soccer", value: "If still fatigued or playing soccer, omit lifting/bike; next lower slot is Tue Sep 22, not an indefinite deferral" }
          ],
          purpose: "Restore a scheduled strength/aerobic exposure after recovery from Wednesday. Soccer consumes recovery capacity but is not equivalent to a targeted VO2 workout."
        }
      },
      {
        date: "2026-09-19", day: "Sat", miles: 6, type: "easy", title: "Easy + relaxed swim", detail: "6 easy + 25 min swim · shorten if soccer fatigue",
        workout: {
          date: "2026-09-19", type: "easy", title: "6-mile easy reset",
          details: [
            { label: "Total", value: "6 miles" },
            { label: "Effort", value: "RPE 2–3" },
            { label: "Swim", value: "25 min relaxed RPE 2, separated if convenient; omit for residual fatigue" },
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
      },
      {
        date: "2026-09-21", day: "Mon", miles: 0, type: "rest", title: "Swim + Upper A", detail: "30 min easy swim · controlled upper · no running", weekMarker: "Next week · provisional",
        workout: {
          date: "2026-09-21", type: "rest", title: "30-minute swim + Upper A",
          details: [
            { label: "Swim", value: "30 min relaxed RPE 2; no hard sets" },
            { label: "Upper", value: "Upper A below; 30–40 min, RPE ≤7, no failure" },
            { label: "Running", value: "Rest" },
            { label: "Week budget", value: "45 mi without soccer; 39 mi with Friday soccer. 100 min easy cross-training + one lower session." },
            { label: "Status", value: "Provisional pending weekend recovery and soccer plans; hold volume while adding structure" }
          ],
          purpose: "Keep low-impact aerobic work and strength in the plan while allowing recovery from the long run. San Jose is a checkpoint, not the sole purpose of this program."
        }
      },
      {
        date: "2026-09-22", day: "Tue", miles: 8, type: "quality", title: "Controlled threshold + lower", detail: "3 × 8 min / 2 min jog · lower later · 8 mi total", key: true,
        workout: {
          date: "2026-09-22", type: "quality", title: "3 × 8 minutes controlled + lower",
          details: [
            { label: "Total", value: "About 8 mi including warm-up, recoveries and easy cooldown" },
            { label: "Warm-up", value: "2 mi easy + familiar drills + 4 × 15 sec relaxed pickups with full easy recovery" },
            { label: "Work", value: "3 × 8 min, 2 min easy jog; RPE 6–7, short phrases, finish with another rep available" },
            { label: "Pacing", value: "Start clearly easier than Sep 16; no fixed target or HR cap. Slow if effort rises beyond controlled." },
            { label: "Lower later", value: "30–35 min, ideally ≥6 hours later: use the Tuesday lower prescription below" },
            { label: "Decision", value: "Proceed after normal easy days and responsive warm-up. If rep 1 is already hard, switch to easy and reassess." }
          ],
          purpose: "Accumulate repeatable threshold-oriented work rather than test HM fitness. Restore a regular strength stimulus. If quality unexpectedly becomes RPE 8–9, reassess lifting and Friday intensity rather than stacking fatigue."
        }
      },
      {
        date: "2026-09-23", day: "Wed", miles: 8, type: "easy", title: "Easy + aerobic bike", detail: "8 easy + 45 min easy bike · separate sessions",
        workout: {
          date: "2026-09-23", type: "easy", title: "8 easy miles + 45-minute bike",
          details: [
            { label: "Run", value: "8 mi conversational RPE 2–3; no strides" },
            { label: "Bike", value: "45 min RPE 2–3, light gearing; roughly 100–120 W only if genuinely easy" },
            { label: "Environment", value: "Cooler daylight or indoor fan; do not force hot afternoon riding or unlit routes" },
            { label: "Adjustment", value: "Separate by several hours. Shorten for persistent leg heaviness; do not chase watts." }
          ],
          purpose: "Add low-impact aerobic time without turning an easy day into another quality session. Check the response to Tuesday lifting."
        }
      },
      {
        date: "2026-09-24", day: "Thu", miles: 7, type: "easy", title: "Easy + swim", detail: "7 easy + 25 min relaxed swim",
        workout: {
          date: "2026-09-24", type: "easy", title: "7 easy miles + 25-minute swim",
          details: [
            { label: "Run", value: "7 mi RPE 2–3, no fast finish" },
            { label: "Swim", value: "25 min relaxed RPE 2; no intervals or hard kick sets" },
            { label: "Upper B", value: "Optional 25–30 min only if fresh; less important than completing weekly lower work" }
          ],
          purpose: "Maintain easy aerobic frequency and reach 100 scheduled cross-training minutes this week without borrowing from Friday quality."
        }
      },
      {
        date: "2026-09-25", day: "Fri", miles: 6, type: "quality", title: "Aerobic power OR soccer", detail: "4 × 3 min / 3 min easy only if recovered and no soccer", key: true,
        workout: {
          date: "2026-09-25", type: "quality", title: "Second quality slot: 4 × 3 minutes",
          details: [
            { label: "Total", value: "About 6 mi with ≥2 mi warm-up and easy cooldown" },
            { label: "Work", value: "4 × 3 min at repeatable RPE 8, 3 min easy jog; no sprints, no final-rep time trial" },
            { label: "Gate", value: "Only if Tuesday stayed controlled and Thursday legs/easy effort are normal" },
            { label: "If soccer", value: "Soccer replaces this session; no run. Week becomes 39 mi, without make-up miles." },
            { label: "If fatigue", value: "No intervals: 4–6 easy or rest according to symptoms; reassess the combined workload" }
          ],
          purpose: "Introduce a small faster-running dose targeting aerobic power and mechanics. Soccer uses the same recovery slot, but does not replicate this adaptation. No fast-finish long run as a third quality session."
        }
      },
      {
        date: "2026-09-26", day: "Sat", miles: 5, type: "easy", title: "5 recovery miles", detail: "RPE 2 · no extra lifting or strides",
        workout: {
          date: "2026-09-26", type: "easy", title: "5 recovery miles",
          details: [{ label: "Run", value: "5 mi very easy; shorten/rest if soccer left soreness or altered mechanics" }],
          purpose: "Absorb Friday's work and preserve a comfortable Sunday long run."
        }
      },
      {
        date: "2026-09-27", day: "Sun", miles: 11, type: "long", title: "11 easy long run", detail: "No fast finish · race-week reduction follows", key: true,
        workout: {
          date: "2026-09-27", type: "long", title: "11 easy miles",
          details: [
            { label: "Run", value: "11 mi conversational RPE 2–3; no pace test" },
            { label: "Fuel", value: "Eat beforehand; 30–45 g carbohydrate/hour plus fluids" },
            { label: "Next phase", value: "Reduce race-week volume; resume development after recovery from the Oct 4 benchmark" }
          ],
          purpose: "Keep aerobic consistency with a shorter long run while balancing the added quality and strength. Do not increase weekly mileage and supplementary workload simultaneously."
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
        day: "Tuesday Sep 22 · weekly anchor",
        title: "Lower-body development",
        timing: "30–35 min after controlled quality, preferably ≥6 hours later. Sep 18 uses the reduced dose in its calendar card. Do not indefinitely defer this session for ordinary training tiredness.",
        tone: "lower",
        exercises: [
          { name: "Back squat", dose: "2–3 × 3 · RPE 6–7", note: "Start with 2 sets if no recent lower training; familiar load, ≥3 reps in reserve" },
          { name: "Bulgarian split squat", dose: "1–2 × 5 / side", note: "Start with 1 set if returning; no new loading or deep eccentric emphasis" },
          { name: "Hamstring curl", dose: "2 × 8 · RPE 6", note: "Only a familiar variation; do not introduce sore-inducing new work before the race" },
          { name: "Bent-knee soleus raise", dose: "2 × 10–15", note: "Controlled familiar load; no failure" },
          { name: "Standing calf raise", dose: "2 × 8–12", note: "Straight knee; no failure" }
        ],
        alternative: "This is a modified strength program, not full Candito. After San Jose recovery, progress familiar squat/hinge loads and consider a second short lower exposure. Cleans are not automatically easier to recover from and are not a substitute for all posterior-chain work."
      },
      {
        id: "upper-b",
        day: "Thursday · optional",
        title: "Upper B",
        timing: "25–30 min if fresh; the second upper session does not displace lower-body training",
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
      "One scheduled lower session now; consider a second short exposure after race recovery",
      "No lower-body AMRAPs or grinders",
      "Stop cleans when speed or technique fades",
      "Reduce lower volume in race week; no new lifts or soreness-inducing work"
    ]
  },
  volume: [
    { label: "Aug 24", miles: 39.5, state: "complete" },
    { label: "Aug 31", miles: 38.6, state: "complete" },
    { label: "Sep 7", miles: 44.4, state: "complete" },
    { label: "Sep 14", miles: 43.1, state: "current" },
    { label: "Sep 21", miles: 45, state: "planned" },
    { label: "Race", miles: 27, state: "race" }
  ],
  rules: [
    { icon: "↘", title: "Easy means easy", text: "Use conversational effort. Pace can float with heat and fatigue." },
    { icon: "◇", title: "Fuel the work", text: "Do not create the calorie deficit around threshold or long-run sessions." },
    { icon: "⚑", title: "Two quality slots, not three", text: "Tuesday controlled threshold; Friday modest aerobic-power work if no soccer and recovered. Soccer uses Friday's recovery budget but is not a VO2 substitute. Keep the long run easy." },
    { icon: "⌁", title: "Protect weekly lower training", text: "Tuesday lower is scheduled, not a leftover. Scale its dose to recent lifting history. If genuinely unready, document why and set the replacement date." },
    { icon: "+", title: "Schedule aerobic support", text: "Next week: Mon 30-min swim, Wed 45-min bike, Thu 25-min swim = 100 min at RPE 2–3. Progress duration only after this combined week is absorbed." },
    { icon: "↗", title: "Build toward 65 mpw", text: "Establish 45–50, then hold and progress through 55 and 60 before 65. Pair it with 2–4 easy cross-training hours rather than forcing 75–80 running miles." }
  ]
};

// Use the timeline prescription as the single source for the next-session panel.
window.TRAINING_DATA.currentWorkout = window.TRAINING_DATA.week.days.find(
  (day) => day.date === "2026-09-17"
).workout;
