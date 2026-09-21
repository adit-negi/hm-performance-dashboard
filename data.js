window.TRAINING_DATA = {
  updatedAt: "September 20, 2026 · 50.37-mile week reviewed",
  revision: "20260920-review",
  raceGoal: { time: "1:38", pace: "7:29/mi", status: "Provisional; confirm with recovered effort" },
  raceDate: "2026-10-04T07:00:00-07:00",
  blockStart: "2026-08-03T00:00:00-07:00",
  recovery: {
    label: "Durability progressing · absorb the load",
    metrics: [
      { label: "Running this week", value: "50.37", unit: "mi · 44.37 last week", tone: "good" },
      { label: "Readiness after long run", value: "27", unit: "morning 55 · vendor estimate", tone: "warn" },
      { label: "Overnight HRV", value: "75", unit: "ms · 7-day 96 balanced", tone: "warn" },
      { label: "Sleep", value: "6:51", unit: "score 73 · RHR 51", tone: "warn" }
    ],
    note: "Week: 50.37 running miles versus ~43 planned, plus 52.5 min swimming, 46.9 min strength and 124.9 min soccer (~12:16 recorded total). Sep 20: 15.02 mi at 10:29/mi, HR 151, recorded RPE 4. First/last five miles ~10:30/10:29 at HR 152/153, stable cadence; ~9:56 paused, so not a continuous fitness test. Overnight HRV 125 → 111 → 95 → 82 → 79 → 75 since Tuesday; RHR rose from 43–45 to 49–52. These contextual recovery signals warrant consolidation, not a diagnosis. Strength exercise content, fueling, current soreness and weekend confounders await athlete feedback."
  },
  week: {
    label: "SEP 7 — SEP 27 · SEP 14–20 REVIEWED",
    targetMiles: 50.37,
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
        date: "2026-09-17", day: "Thu", miles: 6.25, type: "easy", title: "Strength + treadmill complete", detail: "46.9 min lifting + 6.25 mi · HR 163 · recorded RPE 2", completed: true,
        workout: {
          date: "2026-09-17", type: "easy", title: "Strength + 6.25 treadmill miles",
          details: [
            { label: "Strength", value: "46:51 before running; exercise content not available in reviewed data" },
            { label: "Run", value: "6.25 mi · 1:05:11 · saved pace 10:25/mi; belt setting unconfirmed" },
            { label: "Effort", value: "Recorded RPE 2; HR 163 avg / 190 max" },
            { label: "HR pattern", value: "Mile averages 175, 165, 162, 161, 157, 158: high early, settling later" },
            { label: "Load", value: "Run ~127 + strength ~31; cardiovascular load does not capture all lifting stress" }
          ],
          purpose: "Reported effort was easy, but cardiovascular cost was higher than Saturday. Do not call this progressive HR drift or a second hard workout from Garmin labels alone; preceding lifting, environment and sensor behavior need context."
        }
      },
      {
        date: "2026-09-18", day: "Fri", miles: 4.02, type: "quality", title: "Run + soccer complete", detail: "4.02 mi HR 159 + 2:04:53 soccer · extra running versus plan", completed: true,
        workout: {
          date: "2026-09-18", type: "quality", title: "4.02 miles + soccer",
          details: [
            { label: "Run", value: "4.02 mi · 42:00 · 10:26/mi · HR 159 avg / 173 max" },
            { label: "Soccer", value: "2:04:53 timer; 2:13:34 elapsed; ~5.70 mi movement excluded from running mileage" },
            { label: "Soccer HR", value: "103 avg / 157 max; low average does not quantify accelerations or tissue load" },
            { label: "Planned vs done", value: "Soccer branch prescribed no run; the additional 4.02 mi increased total load" },
            { label: "Other work", value: "No cycling or additional strength recorded Friday" }
          ],
          purpose: "Count both sessions when assessing the week. Soccer is not a dedicated VO2 session and not a zero-cost rest day."
        }
      },
      {
        date: "2026-09-19", day: "Sat", miles: 7.03, type: "easy", title: "Easy + swim complete", detail: "7.03 mi · HR 144 / max 152 + 725 m swim", completed: true,
        workout: {
          date: "2026-09-19", type: "easy", title: "7.03 easy miles + 725 m swim",
          details: [
            { label: "Run", value: "Saved 7.03 mi · 1:19:04 · HR 144 avg / 152 max" },
            { label: "Pace caveat", value: "Saved pace 11:15/mi; raw splits total ~7.48 mi. Use confirmed belt settings for pace comparisons." },
            { label: "Swim", value: "725 m in 19:38 timer; HR 144 avg / 168 max" },
            { label: "Combined load", value: "Run ~44 + swim ~38" }
          ],
          purpose: "Run HR stayed in a narrow easy range after soccer. Swim was a real additional exposure, not physiologically free because Garmin called it recovery."
        }
      },
      {
        date: "2026-09-20", day: "Sun", miles: 15.02, type: "long", title: "15.02-mile long run complete", detail: "10:29/mi · HR 151 · RPE 4 · ~9:56 paused", key: true, completed: true,
        workout: {
          date: "2026-09-20", type: "long", title: "15.02-mile long run complete",
          details: [
            { label: "Total", value: "15.02 mi · 2:37:28 timer / 2:47:24 elapsed; prescribed 13 mi" },
            { label: "Effort", value: "Recorded RPE 4/10 · HR 151 avg / 173 max" },
            { label: "Miles 1–5", value: "10:30/mi · HR 152 · cadence ~165.5" },
            { label: "Miles 6–10", value: "10:29/mi · HR 149 · cadence ~163.8" },
            { label: "Miles 11–15", value: "10:29/mi · HR 153 · cadence ~165.8" },
            { label: "Comparison", value: "Sep 13: 13.18 mi at 10:54 timer pace / HR 153, ~12:52 paused; conditions differ" },
            { label: "Data limits", value: "Elevation/power corrupted: do not use claimed 869 m ascent or GAP. Pause reasons and fueling unconfirmed." }
          ],
          purpose: "Encouraging durability execution: maintained pace and mechanics over a longer run without substantial HR escalation. This is not proof of a specific race time or an instruction to extend next Sunday's run again."
        }
      },
      {
        date: "2026-09-21", day: "Mon", miles: 0, type: "rest", title: "Recovery swim + upper", detail: "20–30 min gentle swim · upper if fresh · run-rest", weekMarker: "Next week · recovery-gated",
        workout: {
          date: "2026-09-21", type: "rest", title: "Absorb 50 miles · gentle swim + upper",
          details: [
            { label: "Swim", value: "20–30 min relaxed RPE 1–2; rest instead if exhausted or unwell" },
            { label: "Upper", value: "20–30 min only if fresh; RPE ≤6–7, no failure" },
            { label: "Running", value: "Rest" },
            { label: "Week budget", value: "Up to 45 mi without soccer / 39 with it; 90–100 min cross-training and one lower slot. Do not chase 55." },
            { label: "Recovery", value: "Eat full recovery meals, hydrate and prioritize sleep; no compensatory calorie restriction" },
            { label: "Tuesday gate", value: "Normal gait/legs, no illness, easy warm-up feels normal, and recovery trend not continuing to deteriorate" }
          ],
          purpose: "Consolidate a 50.37-mile week plus soccer/strength. Preserve the balanced development schedule without automatically raising workload after the longest run of this block."
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
            { label: "Lower later", value: "Use the low end of Tuesday lower prescription, ideally ≥6 hours later; no progression in load this week" },
            { label: "Decision", value: "Only with normal legs/warm-up and stabilizing recovery. If not ready, 6 easy instead; no quality make-up Wednesday." },
            { label: "Fallback strength", value: "A short familiar dose may remain if only quality is deferred and legs are normal. Pain/illness/persistent fatigue: reassess; reserve Sat Sep 26 after easy running only if recovered and no Friday hard work." }
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
          purpose: "Maintain easy aerobic frequency and reach 90–100 scheduled cross-training minutes this week without borrowing from Friday quality."
        }
      },
      {
        date: "2026-09-25", day: "Fri", miles: 6, type: "quality", title: "Aerobic power OR soccer", detail: "4 × 3 min / 3 min easy only if recovered and no soccer", key: true,
        workout: {
          date: "2026-09-25", type: "quality", title: "Second quality slot: 4 × 3 minutes",
          details: [
            { label: "Total", value: "About 6 mi with ≥2 mi warm-up and easy cooldown" },
            { label: "Work", value: "4 × 3 min at repeatable RPE 8, 3 min easy jog; no sprints, no final-rep time trial" },
            { label: "Gate", value: "Only if Tuesday stayed controlled and Thursday legs/easy effort are normal; no soccer that day" },
            { label: "If Tuesday deferred", value: "If recovered and no soccer, use 3 × 8 min controlled / 2 min jog instead, ~7 mi total; skip VO2 this week" },
            { label: "If soccer", value: "Soccer replaces this session; no run. Week becomes 39 mi, without make-up miles." },
            { label: "If fatigue", value: "No intervals: 4–6 easy or rest according to symptoms; reassess the combined workload" }
          ],
          purpose: "Introduce a small faster-running dose targeting aerobic power and mechanics. Soccer uses the same recovery slot, but does not replicate this adaptation. No fast-finish long run as a third quality session."
        }
      },
      {
        date: "2026-09-26", day: "Sat", miles: 5, type: "easy", title: "5 recovery miles", detail: "RPE 2 · lower fallback only if Tuesday deferred and Friday easy",
        workout: {
          date: "2026-09-26", type: "easy", title: "5 recovery miles",
          details: [
            { label: "Run", value: "5 mi very easy; shorten/rest if soccer left soreness or altered mechanics" },
            { label: "Lower fallback", value: "Only if Tuesday lower was deferred, now recovered and Friday had no hard work: reduced familiar dose. Otherwise no extra lifting." }
          ],
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
        timing: "Tue Sep 22, after running and preferably ≥6 hours later. Use low-end set counts after the 50-mile week; familiar loads only. If genuinely unrecovered, reassess for Sat Sep 26 provided Friday had no hard work, rather than leaving an undated deferral.",
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
    { label: "Sep 14", miles: 50.4, state: "complete" },
    { label: "Sep 21", miles: 45, state: "planned" },
    { label: "Race", miles: 27, state: "race" }
  ],
  rules: [
    { icon: "↘", title: "Easy means easy", text: "Use conversational effort. Pace can float with heat and fatigue." },
    { icon: "◇", title: "Fuel the work", text: "Do not create the calorie deficit around threshold or long-run sessions." },
    { icon: "⚑", title: "Two quality slots, not three", text: "Tuesday controlled threshold; Friday modest aerobic-power work if no soccer and recovered. Soccer uses Friday's recovery budget but is not a VO2 substitute. Keep the long run easy." },
    { icon: "⌁", title: "Protect weekly lower training", text: "Tuesday lower is scheduled, not a leftover. Scale its dose to recent lifting history. If genuinely unready, document why and set the replacement date." },
    { icon: "+", title: "Schedule aerobic support", text: "Next week: Mon 20–30-min swim, Wed 45-min bike, Thu 25-min swim = 90–100 min. Keep it easy; do not increase running and supplemental volume together." },
    { icon: "↗", title: "Build toward 65 mpw", text: "Establish 45–50, then hold and progress through 55 and 60 before 65. Pair it with 2–4 easy cross-training hours rather than forcing 75–80 running miles." }
  ]
};

// Use the timeline prescription as the single source for the next-session panel.
window.TRAINING_DATA.currentWorkout = window.TRAINING_DATA.week.days.find(
  (day) => day.date === "2026-09-21"
).workout;
