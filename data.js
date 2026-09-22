window.TRAINING_DATA = {
  updatedAt: "September 21, 2026 · strength & power plan",
  revision: "20260921-strength",
  raceGoal: { time: "1:38", pace: "7:29/mi", status: "Provisional; confirm with recovered effort" },
  raceDate: "2026-10-04T07:00:00-07:00",
  blockStart: "2026-08-03T00:00:00-07:00",
  recovery: {
    label: "Recovery rebounding · build strength gradually",
    metrics: [
      { label: "Running this week", value: "50.37", unit: "mi · 44.37 last week", tone: "good" },
      { label: "Sep 21 readiness", value: "75", unit: "morning 70 · vendor estimate", tone: "good" },
      { label: "Sep 21 overnight HRV", value: "101", unit: "ms · 7-day 94 balanced", tone: "good" },
      { label: "Sep 21 sleep", value: "9:30", unit: "score 93 · RHR 47", tone: "good" }
    ],
    note: "Week: 50.37 running miles versus ~43 planned, plus 52.5 min swimming, 46.9 min strength and 124.9 min soccer (~12:16 recorded total). Sep 20: 15.02 mi at 10:29/mi, HR 151, recorded RPE 4. First/last five miles ~10:30/10:29 at HR 152/153, stable cadence; ~9:56 paused, so not a continuous fitness test. Overnight HRV 125 → 111 → 95 → 82 → 79 → 75 since Tuesday; RHR rose from 43–45 to 49–52. These contextual recovery signals warrant consolidation, not a diagnosis. Sep 21 recovery rebounded: sleep 9:30, score 93, HRV 101 / weekly 94 balanced, RHR 47 and readiness 70 morning / 75 later. One better night supports recovery but does not confirm local muscle readiness. Strength on Sep 7, 8, 12 and 17 is recorded; squat/deadlift content and current limitations remain unconfirmed."
  },
  week: {
    label: "SEP 7 — SEP 27 · SEP 21–27 PLANNED",
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
        date: "2026-09-14", day: "Mon", miles: 0, type: "rest", title: "Recovery swim complete", detail: "1,000 m · 32:54 total · HR 115 · load 36", weekMarker: "Sep 14–20 · reviewed", completed: true,
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
        date: "2026-09-21", day: "Mon", miles: 0, type: "rest", title: "Recovery swim + upper", detail: "20–30 min gentle swim · upper if fresh · run-rest", weekMarker: "Current week · recovery-gated",
        workout: {
          date: "2026-09-21", type: "rest", title: "Absorb 50 miles · gentle swim + upper",
          details: [
            { label: "Swim", value: "20–30 min relaxed RPE 1–2; rest instead if exhausted or unwell" },
            { label: "Upper", value: "Bench 2 × 5, pull-up/pulldown 2 × 5–6, supported row 2 × 8; RPE 6–7, 20–30 min if fresh" },
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
            { label: "Lower later", value: "Squat 2 × 3 RPE 6; familiar split squat 1 × 5/leg; curl 1–2 × 8; seated calf 2 × 10; standing calf 1 × 8. Ideally ≥6 h later; no jumps/load increase" },
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
            { label: "Upper B", value: "Optional: strict DB press 2 × 6, supported row 2 × 8, Pallof 2 × 8/side; RPE 6, 20–25 min" }
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
    "activePhase": "now",
    "intro": "Build strength, muscle and rapid force production alongside endurance. Inspired by Candito’s simple progression and strength/control/power themes; adapted to two full-body sessions after race recovery. The dated plan below takes priority today.",
    "phases": [
      {
        "id": "now",
        "label": "Now · Sep 21–27",
        "title": "Current prescription · familiar work",
        "summary": "One lower anchor plus brief upper work after the 50.37-mile week. Recent squat/deadlift content and injury limitations remain unconfirmed: use only familiar exercises. New jumps, new hinges and load progression begin after San Jose recovery.",
        "schedule": "Mon upper if fresh • Tue lower • Thu optional upper. Tuesday: normal gait/legs and warm-up required. If only run quality is deferred but legs are normal, familiar lower work may remain. If pain, illness or persistent fatigue prevents lifting, reserve Sat Sep 26 only if recovered and Friday had no hard work; otherwise reassess on Sep 28. No catch-up volume.",
        "sessions": [
          {
            "id": "upper-20260921",
            "day": "Mon Sep 21 · if fresh",
            "title": "Upper maintenance",
            "timing": "20–30 min after the gentle swim or separated by several hours. Rest 2 min between sets; all work RPE 6–7.",
            "tone": "upper",
            "exercises": [
              {
                "name": "Bench press",
                "dose": "2 × 5",
                "note": "Familiar weight; 3–4 reps in reserve."
              },
              {
                "name": "Pull-up or pulldown",
                "dose": "2 × 5–6",
                "note": "Choose the familiar version; leave 3 reps."
              },
              {
                "name": "Chest-supported row",
                "dose": "2 × 8",
                "note": "Controlled movement; no failure."
              }
            ]
          },
          {
            "id": "lower-20260922",
            "day": "Tue Sep 22 · weekly anchor",
            "title": "Familiar lower strength",
            "timing": "25–35 min, ideally ≥6 h after the controlled run. Warm up 5–8 min and use 2–4 progressively heavier squat warm-up sets. Working sets below; rest 2–3 min on squat, 60–90 sec on accessories.",
            "tone": "lower",
            "exercises": [
              {
                "name": "Back squat",
                "dose": "2 × 3 · RPE 6",
                "note": "Familiar variation/load only; about 4 reps in reserve. No load increase this week."
              },
              {
                "name": "Split squat",
                "dose": "1 × 5 / leg",
                "note": "Only if recently practiced; comfortable range, no slow lowering emphasis."
              },
              {
                "name": "Hamstring curl",
                "dose": "1–2 × 8 · RPE 6",
                "note": "Use 1 set if returning; only a familiar exercise."
              },
              {
                "name": "Seated bent-knee calf raise",
                "dose": "2 × 10",
                "note": "Comfortable familiar load; leave 3–4 reps."
              },
              {
                "name": "Standing calf raise",
                "dose": "1 × 8",
                "note": "Straight knee; controlled, no failure."
              }
            ]
          },
          {
            "id": "upper-20260924",
            "day": "Thu Sep 24 · optional",
            "title": "Short upper + trunk",
            "timing": "20–25 min only if fresh after the easy run/swim. This does not replace Tuesday lower strength.",
            "tone": "upper",
            "exercises": [
              {
                "name": "Strict dumbbell press",
                "dose": "2 × 6 · RPE 6",
                "note": "Familiar movement; no leg drive."
              },
              {
                "name": "Chest-supported row",
                "dose": "2 × 8 · RPE 6",
                "note": "Keep shoulders comfortable for swimming."
              },
              {
                "name": "Pallof press",
                "dose": "2 × 8 / side",
                "note": "Steady trunk; breathe normally."
              }
            ]
          }
        ]
      },
      {
        "id": "race",
        "label": "Race week · Sep 28–Oct 4",
        "title": "Preview · one light strength touch",
        "summary": "Keep familiarity while reducing fatigue. This is the lifting overlay for race week, not a new running prescription. No jumps, new exercises, heavy hinges or load increases. Skip the touch if you are sore or not recovered.",
        "schedule": "Tue Sep 29: brief full body only if last week’s lower dose was well tolerated. Wed–Sat: no lower lifting. Sun Oct 4: San Jose. Oct 5–11: recover; light upper work when comfortable, no forced lower training. Reassess Oct 12; earliest proposed A/B dates are Oct 13 and 16 if walking, stairs and easy running feel normal.",
        "sessions": [
          {
            "id": "race-20260929",
            "label": "full body",
            "day": "Tue Sep 29 · if tolerated last week",
            "title": "Race-week strength touch",
            "timing": "15–20 min after easy running, separated if possible. Only if Sep 22 caused no meaningful soreness. Familiar lifts only; all work RPE 5–6. No further lower lifting before Oct 4.",
            "tone": "lower",
            "exercises": [
              {
                "name": "Back squat",
                "dose": "1–2 × 3",
                "note": "Choose 1 set if any uncertainty; no increase in load."
              },
              {
                "name": "Bench press",
                "dose": "1–2 × 4",
                "note": "Stop well before fatigue."
              },
              {
                "name": "Pull-up or pulldown",
                "dose": "1–2 × 4",
                "note": "Easy familiar version."
              },
              {
                "name": "Standing calf raise",
                "dose": "1 × 8",
                "note": "Only if familiar and completely comfortable."
              }
            ]
          }
        ]
      },
      {
        "id": "build",
        "label": "Build · 12 weeks",
        "title": "Preview · two full-body sessions",
        "summary": "Start after post-HM recovery, provisionally the week of Oct 12. These sessions replace the old upper/lower split; they are not additional workouts. Weeks 1–2 reintroduce the work, then gradually build strength and power with low fatigue.",
        "schedule": "Default: Tue A after threshold; Fri B after controlled faster running, with Sunday long run easy. Keep ≥48 h between lifts and aim for ≥48 h before the long run. Soccer week: A Tuesday, B becomes upper + trunk only Thursday (incline press 2 × 6, supported row 2 × 8, Pallof 2 × 8/side); omit B jumps/lower work and Friday running quality. Resume two full-body sessions the next no-soccer week. If soccer is weekly, redesign the week rather than stacking another hard lower day.",
        "sessions": [
          {
            "id": "build-a",
            "label": "full body",
            "day": "Tuesday · after threshold",
            "title": "A · Strength + power",
            "timing": "50–60 min, preferably ≥6 h after running and refueled. Power first after warming up; omit jumps if the run left you flat. Rest 90–120 sec for jumps, 2–3 min for compound lifts and 60–90 sec for accessories.",
            "tone": "lower",
            "exercises": [
              {
                "name": "Countermovement jump",
                "dose": "3 × 3",
                "note": "Bodyweight, individual reps with a reset; land quietly. Start at 2 × 3 in weeks 1–2; stop when height or landing quality declines."
              },
              {
                "name": "Back squat",
                "dose": "3 × 3 · RPE 7–8",
                "note": "Controlled descent; drive up with fast intent. Leave 2–3 reps, never grind."
              },
              {
                "name": "Bench press",
                "dose": "3 × 4–6 · RPE 7–8",
                "note": "Build all sets from 4 toward 6 before increasing weight."
              },
              {
                "name": "Pull-up or pulldown",
                "dose": "3 × 4–6 · RPE 7–8",
                "note": "Use assistance/bodyweight/added weight to retain 2–3 reps."
              },
              {
                "name": "Split squat",
                "dose": "2 × 5 / leg · RPE 7",
                "note": "Start with 1 set per leg; controlled range, no exaggerated slow eccentrics."
              },
              {
                "name": "Standing calf raise",
                "dose": "2 × 6–8 · RPE 7",
                "note": "Full comfortable range, no bouncing."
              },
              {
                "name": "Pallof press",
                "dose": "2 × 8 / side",
                "note": "Controlled anti-rotation; stop before trunk position changes."
              }
            ]
          },
          {
            "id": "build-b",
            "label": "full body",
            "day": "Friday · no-soccer week",
            "title": "B · Hinge + control",
            "timing": "45–60 min, preferably ≥6 h after the run; aim for ≥48 h before Sunday’s long run. If Friday intensity leaves legs dull, remove jumps and use the maintenance dose. Do not put this after a long ride/brick.",
            "tone": "lower",
            "exercises": [
              {
                "name": "Countermovement jump",
                "dose": "3 × 3",
                "note": "Same low-volume power practice as A; 2 × 3 in weeks 1–2. Full reset between reps, no depth jumps."
              },
              {
                "name": "Conventional or trap-bar deadlift",
                "dose": "2 × 3 · RPE 7",
                "note": "Choose one familiar variation for the block; reset each rep. No max attempts."
              },
              {
                "name": "Paused squat",
                "dose": "2 × 3 · RPE 6",
                "note": "Light technique work with a comfortable 1-second pause. Introduce after the HM; omit in weeks 1–2 if unfamiliar."
              },
              {
                "name": "Incline dumbbell press",
                "dose": "2 × 6–8 · RPE 7",
                "note": "If overhead strength is a priority, use familiar strict press instead for the whole block."
              },
              {
                "name": "Chest-supported row",
                "dose": "3 × 6–8 · RPE 7",
                "note": "Use support to limit additional low-back fatigue."
              },
              {
                "name": "Hamstring curl",
                "dose": "2 × 8 · RPE 7",
                "note": "Start at 1 set if returning; no failure or new Nordics."
              },
              {
                "name": "Seated bent-knee calf raise",
                "dose": "2 × 10–12 · RPE 7",
                "note": "Direct bent-knee plantar-flexor work; no bouncing."
              }
            ]
          }
        ]
      },
      {
        "id": "maintenance",
        "label": "Peak marathon / 70.3",
        "title": "Preview · retain strength, trim sets",
        "summary": "Use when long rides, bricks or marathon-specific running dominate. Two shorter strength exposures remain the default; one full-body session is the fallback during an unusually demanding week. Maintain established strength rather than chase lifting records.",
        "schedule": "For a Sat long ride/brick + Sun long run: place A Monday only if recovered from the previous weekend and B Wednesday; keep Tuesday quality and Wednesday legs compatible. If Monday is not recovered, use one Tuesday session: A without jumps plus 1 × 3 familiar deadlift at RPE 6–7, replacing B that week. Final placement depends on the actual Tokyo/70.3 calendar. Reduce sets again before an A race; the last familiar lower touch is usually 5–7 days before, adjusted to your soreness response.",
        "sessions": [
          {
            "id": "maint-a",
            "label": "full body",
            "day": "Early week · anchor",
            "title": "A · Maintain strength",
            "timing": "25–35 min after a quality day, ideally ≥6 h apart. Use established loads at RPE 7; no progression during a new endurance-load peak.",
            "tone": "lower",
            "exercises": [
              {
                "name": "Countermovement jump",
                "dose": "2 × 2",
                "note": "Only if fresh and already accustomed; otherwise omit."
              },
              {
                "name": "Back squat",
                "dose": "2 × 3 · RPE 7",
                "note": "Keep the strength stimulus; no grinders."
              },
              {
                "name": "Bench press",
                "dose": "2 × 4 · RPE 7",
                "note": "Leave 3 reps."
              },
              {
                "name": "Pull-up or pulldown",
                "dose": "2 × 4–6 · RPE 7",
                "note": "Comfortable shoulders for swimming."
              },
              {
                "name": "Standing calf raise",
                "dose": "1 × 8",
                "note": "Familiar load, leave 3 reps."
              }
            ]
          },
          {
            "id": "maint-b",
            "label": "full body",
            "day": "Midweek · away from long sessions",
            "title": "B · Brief second exposure",
            "timing": "20–30 min, ≥48 h after A and preferably ≥48 h before the longest ride/brick or run. Upper-body exercises can alternate as in the build plan.",
            "tone": "lower",
            "exercises": [
              {
                "name": "Conventional or trap-bar deadlift",
                "dose": "1–2 × 3 · RPE 7",
                "note": "Use the established variation; 1 set during the heaviest endurance weeks."
              },
              {
                "name": "Incline dumbbell press",
                "dose": "1–2 × 6 · RPE 7",
                "note": "No failure."
              },
              {
                "name": "Chest-supported row",
                "dose": "2 × 6 · RPE 7",
                "note": "No low-back grinding."
              },
              {
                "name": "Hamstring curl",
                "dose": "1 × 8",
                "note": "Familiar, controlled."
              },
              {
                "name": "Seated bent-knee calf raise",
                "dose": "1 × 10",
                "note": "Leave 3 reps."
              }
            ]
          }
        ]
      }
    ],
    "progression": [
      {
        "title": "Warm up and choose the load",
        "text": "5–8 minutes easy movement, then 2–4 progressively heavier warm-up sets for the first lower lift and 1–2 for upper lifts. Listed sets are working sets. RPE 6 ≈ 4 reps left; 7 ≈ 3; 8 ≈ 2. Start from today’s ability, not an old one-rep max. Lower under control and lift with fast intent while keeping technique. After re-entry, squat/hinge working loads will often be around 80–85% of a current estimated maximum, but the RPE/technique cap governs; do not test a maximum to set them."
      },
      {
        "title": "Weeks 1–2 · re-entry",
        "text": "After HM recovery: use 2 working sets for each main lift and 1 set for each accessory at RPE 6–7. Jump only 2 × 3 per session if pain-free and landings are controlled; omit paused squats if unfamiliar. Hold running mileage and other training roughly steady while introducing this combination."
      },
      {
        "title": "Weeks 3–4 · build, then absorb",
        "text": "Week 3: use the listed build sets if week 2 caused no disruptive soreness or loss of run quality. Week 4: halve working sets, rounding up; RPE 6–7; halve or omit jumps. No failure tests or AMRAPs."
      },
      {
        "title": "Weeks 5–12 · repeat and progress",
        "text": "Weeks 5–7 and 9–11: use normal A/B sets; weeks 8 and 12: repeat the lighter week. On fixed triples, add the smallest increment (about 2.5–5 lb upper / 5 lb lower) only after two successful exposures within the RPE cap and normal next-day movement. On rep ranges, first reach the top on every set, then add weight and return to the bottom. Do not increase weight and set count together. Holding weight is a valid progression decision."
      },
      {
        "title": "Power stays crisp",
        "text": "After a warm-up, perform jumps before lifting. Reset between reps; rest 90–120 seconds between sets. Stop with loss of height, noisy/unstable landings or discomfort. Progress from 2 × 3 to 3 × 3; do not keep adding contacts or weight. This complements existing relaxed strides; no additional all-out sprint day is prescribed."
      },
      {
        "title": "Adjust to the whole training week",
        "text": "If soreness affects gait or persists beyond 48 hours, or two key runs worsen after lifting: halve lower accessories, remove B paused squats/jumps and hold loads. If the RPE cap is exceeded, reduce the load 5–10%. Sharp/localized pain or altered gait: stop the offending exercise and assess. Reassess the next scheduled session rather than abandoning strength indefinitely."
      },
      {
        "title": "Measure what matters",
        "text": "Record working weight, reps, last-set RPE and next-day soreness. Review every four weeks: same weight feels easier or more weight at the same RPE, crisp jumps and preserved run quality. These are performance markers, not measurements of muscle-fiber type. Fuel the combined training; do not add a deliberate aggressive deficit during workload increases."
      }
    ],
    "guardrails": [
      "Two full-body days after race recovery; one familiar lower day now",
      "No failed reps, AMRAPs or one-rep-max tests",
      "Separate running and lifting by about 6 h where practical; skip power when fatigued",
      "New power work begins after San Jose, not during the taper"
    ],
    "evidence": "Endurance training does not simply convert all muscle to slow twitch. Heavy lifting and brief explosive work train high-force and rapid-force abilities that endurance alone may underdevelop. Concurrent training can improve strength and muscle size, although explosive-strength gains can be blunted, particularly within the same session. Strength training can improve running economy; this exact program is a coaching adaptation, not a guaranteed result or a muscle-fiber preservation test.",
    "sources": [
      {
        "title": "Candito Linear Programming · author’s PDF (mirror)",
        "url": "https://liftpedia.wordpress.com/wp-content/uploads/2016/11/candito-linear-program-2.pdf"
      },
      {
        "title": "Concurrent strength/endurance meta-analysis",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34757594/"
      },
      {
        "title": "Strength training and running economy",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38165636/"
      },
      {
        "title": "Støren et al. 2008 · heavy strength in distance runners",
        "url": "https://pubmed.ncbi.nlm.nih.gov/18460997/"
      },
      {
        "title": "Paavolainen et al. 1999 · explosive training in well-trained runners",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10233114/"
      },
      {
        "title": "Rønnestad et al. 2015 · strength in elite cyclists",
        "url": "https://pubmed.ncbi.nlm.nih.gov/24862305/"
      },
      {
        "title": "ACSM 2026 · resistance-training position stand",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41843416/"
      },
      {
        "title": "Olympiatoppen · strength, jumping and speed department",
        "url": "https://olympiatoppen.no/fagomrader/styrke/"
      },
      {
        "title": "Olympiatoppen · athlete testing and monitoring",
        "url": "https://olympiatoppen.no/fagomrader/styrke/testing/"
      },
      {
        "title": "Olympiatoppen · 2024 intensity framework (English)",
        "url": "https://olt-skala.nif.no/olt_2024_en.pdf"
      }
    ],
    "evidenceMap": [
      {
        "title": "Heavy strength · runner evidence",
        "text": "Støren et al. (2008): a small 8-week trial in well-trained distance runners used half-squats, 4 × 4RM, three times weekly, and improved running economy and force production. Llanos-Lagos et al. (2024) synthesized 31 studies and supports high-load or combined methods, with effects varying by speed and study quality. Application: progressively heavier squat/hinge work. Our lower-volume, subfailure dose is an adaptation; the trial does not validate these exact sets."
      },
      {
        "title": "Explosive work · Olympic-sport research",
        "text": "Paavolainen et al. (1999), from Finland’s Research Institute for Olympic Sports: 18 well-trained endurance athletes over 9 weeks; the explosive-training group improved 5-km performance, economy and power. Training was partly replaced, not simply added. Application: a small jump dose and existing strides, while managing total workload. This does not establish that 18 jumps per week is an optimal or equivalent dose."
      },
      {
        "title": "Strength alongside cycling · elite evidence",
        "text": "Rønnestad et al. (2015): 16 young elite cyclists studied over 25 weeks; adding heavy strength improved several power/performance measures, with no change in VO2max or cycling economy. Application: keep lower strength through the 70.3 build, reduce its volume as endurance demands rise. This is cycling evidence, not a direct trial of this triathlon program."
      },
      {
        "title": "Frequency, effort and progression · established guidance",
        "text": "ACSM’s 2026 position stand supports progressive resistance training, heavier loads for strength and intentional fast contractions for power; routine failure is unnecessary. Candito supplies the simple progression and heavy/control/power structure. Our RPE caps, two-session split and every-fourth-week reduction are coaching choices to manage concurrent training; no evidence establishes this exact 12-week calendar as uniquely best."
      },
      {
        "title": "Session spacing · concurrent-training evidence",
        "text": "Schumann et al. (2022): 43 studies found no overall impairment of maximal strength or muscle hypertrophy, but a small reduction in explosive-strength gains, especially when endurance and strength shared a session. Application: separate by several hours when practical. Six hours is a scheduling target, not a proven universal threshold; stop power work when quality falls."
      },
      {
        "title": "Olympic-system practice · individualize and monitor",
        "text": "Norway’s Olympiatoppen integrates strength, jumping and speed with the sport’s overall plan and uses testing to guide and evaluate training. Its intensity framework distinguishes neuromuscular from aerobic work. Application: track strength at a given effort, jump quality, soreness and endurance performance together. These are documented system principles, not a claim that every Olympian follows one lifting program."
      }
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
    { icon: "⌁", title: "Protect weekly lower training", text: "Tuesday familiar lower is scheduled now. After HM recovery, two full-body sessions replace the old split. Scale sets to running, soccer and the future triathlon schedule." },
    { icon: "+", title: "Schedule aerobic support", text: "Next week: Mon 20–30-min swim, Wed 45-min bike, Thu 25-min swim = 90–100 min. Keep it easy; do not increase running and supplemental volume together." },
    { icon: "↗", title: "Build toward 65 mpw", text: "65 mpw remains a possible long-term running objective, not a requirement during 70.3 training. Tokyo and a 2027 70.3 are athlete-confirmed; event details are pending. Set sustainable run volume alongside swim/bike demands and two strength exposures." }
  ]
};

// Use the timeline prescription as the single source for the next-session panel.
window.TRAINING_DATA.currentWorkout = window.TRAINING_DATA.week.days.find(
  (day) => day.date === "2026-09-21"
).workout;
