window.TRAINING_DATA = {
  updatedAt: "September 27, 2026 · illness-adjusted race week",
  revision: "20260927-illness",
  raceGoal: { time: "1:38", pace: "7:29/mi", status: "On hold pending recovery; participation not yet confirmed" },
  raceDate: "2026-10-04T07:00:00-07:00",
  blockStart: "2026-08-03T00:00:00-07:00",
  recovery: {
    label: "Sore throat · health before race",
    metrics: [
      { label: "Sep 21–27 running", value: "22.51", unit: "mi recorded · weekend illness", tone: "warn" },
      { label: "Sep 27 recovery", value: "—", unit: "not synced / unavailable", tone: "warn" },
      { label: "Latest HRV · Sep 25", value: "67", unit: "ms · not today's reading", tone: "warn" },
      { label: "Latest RHR · Sep 25", value: "53", unit: "bpm · current symptoms take priority", tone: "warn" }
    ],
    note: "Athlete reports a bad sore throat and illness-related missed weekend sessions. Recorded this week: 22.51 run miles, 81.6 min strength, 36.1 min swim and 106.8 min soccer. Tuesday run RPE 8/load ~308 and Friday soccer load ~226 were substantial work before the rest days. HRV Sep 22–25 fell 122 → 85 → 71 → 67; RHR 44 → 51 → 50 → 53. These are context, not a diagnosis. Sep 26–27 wellness/recovery is unavailable, so there is no current readiness claim. No catch-up work. Race-week progression is conditional on symptoms and response over 24 h; strength/cross-training do not substitute for illness rest."
  },
  week: {
    label: "THROUGH OCT 4 · RACE WEEK CONDITIONAL",
    targetMiles: 22.51,
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
        "date": "2026-09-21",
        "day": "Mon",
        "miles": 0,
        "type": "rest",
        "title": "Strength + swim recorded",
        "detail": "47 min strength + 36 min / 1,225 m swim",
        "completed": true,
        "weekMarker": "Sep 21–27 · illness-adjusted",
        "workout": {
          "date": "2026-09-21",
          "type": "rest",
          "title": "Strength + swim recorded",
          "details": [
            {
              "label": "Strength",
              "value": "47:20; exercises not verified"
            },
            {
              "label": "Swim",
              "value": "1,225 m in 36:06; HR 126"
            }
          ],
          "purpose": "Recorded work, not confirmation of the exact prescribed exercise list."
        }
      },
      {
        "date": "2026-09-22",
        "day": "Tue",
        "miles": 9.3,
        "type": "quality",
        "title": "Treadmill quality recorded",
        "detail": "9.30 mi · recorded RPE 8 · HR 169 / max 203",
        "completed": true,
        "key": true,
        "workout": {
          "date": "2026-09-22",
          "type": "quality",
          "title": "Treadmill quality recorded",
          "details": [
            {
              "label": "Run",
              "value": "9.30 saved miles in 1:19:41; HR 169 avg / 203 max; load ~308"
            },
            {
              "label": "Effort",
              "value": "Recorded RPE 8; belt speeds and work intervals unconfirmed"
            },
            {
              "label": "Data limits",
              "value": "Raw laps ~8.64 mi vs saved 9.30; no pace-based race prediction"
            },
            {
              "label": "Strength",
              "value": "No separate strength activity recorded Tuesday; not proof none occurred"
            }
          ],
          "purpose": "A substantial quality stimulus was already completed. Do not replace missed sessions with another hard effort while recovering from illness."
        }
      },
      {
        "date": "2026-09-23",
        "day": "Wed",
        "miles": 5,
        "type": "easy",
        "title": "Strength + easy run recorded",
        "detail": "34 min strength + 5.00 mi / HR 155",
        "completed": true,
        "workout": {
          "date": "2026-09-23",
          "type": "easy",
          "title": "Strength + easy run recorded",
          "details": [
            {
              "label": "Strength",
              "value": "34:17, HR 123; exercise content unconfirmed"
            },
            {
              "label": "Run",
              "value": "5.00 saved miles in 58:30, HR 155 / max 170"
            },
            {
              "label": "Bike",
              "value": "No cycling activity recorded"
            }
          ],
          "purpose": "Count the actual combined work; do not invent lower-lifting content."
        }
      },
      {
        "date": "2026-09-24",
        "day": "Thu",
        "miles": 8.21,
        "type": "easy",
        "title": "Treadmill run recorded",
        "detail": "8.21 mi · 1:24:20 · HR 150 / max 162",
        "completed": true,
        "workout": {
          "date": "2026-09-24",
          "type": "easy",
          "title": "Treadmill run recorded",
          "details": [
            {
              "label": "Run",
              "value": "8.21 saved miles in 1:24:20; load ~69"
            },
            {
              "label": "Other work",
              "value": "No separate strength or swim activity recorded; unrecorded work remains possible"
            }
          ],
          "purpose": "Useful aerobic running before the reported weekend illness."
        }
      },
      {
        "date": "2026-09-25",
        "day": "Fri",
        "miles": 0,
        "type": "quality",
        "title": "Soccer recorded",
        "detail": "1:46:47 · HR 149 / max 207 · load ~226",
        "completed": true,
        "workout": {
          "date": "2026-09-25",
          "type": "quality",
          "title": "Soccer recorded",
          "details": [
            {
              "label": "Soccer",
              "value": "1:46:47 timer; ~3.73 mi movement excluded from running mileage"
            },
            {
              "label": "HR / load",
              "value": "149 avg / 207 max; Garmin load ~226"
            },
            {
              "label": "Context",
              "value": "Symptom onset relative to soccer is unknown; do not assume you knowingly trained sick"
            }
          ],
          "purpose": "Soccer was a substantial additional stressor this week, not a rest day."
        }
      },
      {
        "date": "2026-09-26",
        "day": "Sat",
        "miles": 0,
        "type": "rest",
        "title": "Planned run cancelled · illness",
        "detail": "Bad sore throat reported; no activity synced",
        "cancelled": true,
        "workout": {
          "date": "2026-09-26",
          "type": "rest",
          "title": "Planned run cancelled · illness",
          "details": [
            {
              "label": "Plan",
              "value": "Recovery, not 5 make-up miles"
            },
            {
              "label": "Record",
              "value": "No activity recorded; illness-related missed sessions reported"
            }
          ],
          "purpose": "Protect recovery; do not transfer this run into race week."
        }
      },
      {
        "date": "2026-09-27",
        "day": "Sun",
        "miles": 0,
        "type": "rest",
        "title": "Long run cancelled · illness",
        "detail": "No 11-mile catch-up · current recovery data missing",
        "cancelled": true,
        "workout": {
          "date": "2026-09-27",
          "type": "rest",
          "title": "Long run cancelled · illness",
          "details": [
            {
              "label": "Today",
              "value": "Rest from training while sore throat remains bad"
            },
            {
              "label": "Missing data",
              "value": "Sep 26–27 sleep/HRV/readiness unavailable at this query; Friday values are not current"
            },
            {
              "label": "Medical check",
              "value": "Prompt assessment for severe/worsening throat, fever or difficulty drinking. Emergency care for breathing difficulty or inability to swallow."
            }
          ],
          "purpose": "Health determines return, not a watch score or weekly mileage target."
        }
      },
      {
        "date": "2026-09-28",
        "day": "Mon",
        "miles": 0,
        "type": "rest",
        "title": "Rest + symptom check",
        "detail": "No run, swim, bike or loaded Upper A",
        "weekMarker": "Race week · symptom-led",
        "workout": {
          "date": "2026-09-28",
          "type": "rest",
          "title": "Rest + symptom check",
          "details": [
            {
              "label": "Training",
              "value": "Rest; comfortable everyday movement only"
            },
            {
              "label": "Strength",
              "value": "Upper A appointment becomes a recovery check; no catch-up lifting"
            },
            {
              "label": "Return gate",
              "value": "Only once symptoms are clearly improving and mild, normal daily activity/eating/drinking feel comfortable, fever-free ≥24 h without fever reducers, and no chest symptoms, body aches or marked fatigue. This is not race clearance."
            },
            {
              "label": "Support",
              "value": "Normal meals/carbohydrate/protein, fluids and sleep; no intentional deficit"
            },
            {
              "label": "Medical",
              "value": "Severe/persistent/worsening throat warrants clinical assessment; discuss COVID/strep testing as appropriate"
            }
          ],
          "purpose": "Illness-specific exception to the fixed split. Long-term Upper/Lower/Upper remains the default after recovery."
        }
      },
      {
        "date": "2026-09-29",
        "day": "Tue",
        "miles": 0,
        "type": "easy",
        "title": "10–20-minute return test OR rest",
        "detail": "First test only if mild/improving and otherwise well",
        "distanceText": "10–20 min",
        "workout": {
          "date": "2026-09-29",
          "type": "easy",
          "title": "10–20-minute return test OR rest",
          "details": [
            {
              "label": "Before starting",
              "value": "Only once symptoms are clearly improving and mild, normal daily activity/eating/drinking feel comfortable, fever-free ≥24 h without fever reducers, and no chest symptoms, body aches or marked fatigue. This is not race clearance."
            },
            {
              "label": "Test",
              "value": "10–20 min very easy walk/jog, conversational RPE 1–2; no pace target"
            },
            {
              "label": "Strength",
              "value": "Lower appointment is a recovery check, not jumps, cleans or loading during return testing"
            },
            {
              "label": "Stop / monitor",
              "value": "Stop for chest discomfort, unusual breathlessness, palpitations, dizziness or disproportionate fatigue/effort; seek medical advice. Check during, after and the following 24 h."
            },
            {
              "label": "If not ready",
              "value": "Rest; move the first test later. Do not squeeze subsequent steps together."
            }
          ],
          "purpose": "Assess tolerance, not fitness. Do not combine the first return test with a gym session."
        }
      },
      {
        "date": "2026-09-30",
        "day": "Wed",
        "miles": 0,
        "type": "easy",
        "title": "25–35 easy minutes OR repeat test",
        "detail": "Only after 24 h without a setback from first test",
        "distanceText": "25–35 min",
        "workout": {
          "date": "2026-09-30",
          "type": "easy",
          "title": "25–35 easy minutes OR repeat test",
          "details": [
            {
              "label": "Run",
              "value": "25–35 min RPE 2 if first test and next-day response were normal"
            },
            {
              "label": "If delayed",
              "value": "If this is the first healthy day, only the 10–20 min test; otherwise rest"
            },
            {
              "label": "Strength / cross-training",
              "value": "No make-up sessions; no extra bike/swim volume"
            },
            {
              "label": "Monitoring",
              "value": "Stop for chest discomfort, unusual breathlessness, palpitations, dizziness or disproportionate fatigue/effort; seek medical advice. Check during, after and the following 24 h."
            }
          ],
          "purpose": "Progress easy duration only when the previous step was tolerated."
        }
      },
      {
        "date": "2026-10-01",
        "day": "Thu",
        "miles": 0,
        "type": "easy",
        "title": "25–35 easy · optional short strides",
        "detail": "Strides only if recovered and two easy outings tolerated",
        "distanceText": "25–35 min",
        "workout": {
          "date": "2026-10-01",
          "type": "easy",
          "title": "25–35 easy · optional short strides",
          "details": [
            {
              "label": "Run",
              "value": "25–35 min RPE 2"
            },
            {
              "label": "Strides",
              "value": "Optional 4 × 15 sec relaxed, full 60–90 sec easy recovery; only fully recovered with two normal easy outings and no delayed symptoms"
            },
            {
              "label": "Upper B",
              "value": "If fully recovered and graded return tolerated: 10–15 min familiar bench/pull/row, 1 light set each at RPE ≤5. Otherwise recovery check only."
            },
            {
              "label": "Excluded",
              "value": "No threshold, VO2, race-pace test, heavy legs, new lifts or plyometrics"
            }
          ],
          "purpose": "A small return to familiar movement, not a last-minute fitness workout."
        }
      },
      {
        "date": "2026-10-02",
        "day": "Fri",
        "miles": 0,
        "type": "rest",
        "title": "Rest · no soccer",
        "detail": "No make-up running, lifting or cross-training",
        "workout": {
          "date": "2026-10-02",
          "type": "rest",
          "title": "Rest · no soccer",
          "details": [
            {
              "label": "Training",
              "value": "Rest; no soccer"
            },
            {
              "label": "Race decision",
              "value": "Review symptoms, normal daily function and response to easy runs"
            },
            {
              "label": "If still ill",
              "value": "Contact a clinician if symptoms persist/worsen. Do not plan to race through fever, systemic or chest symptoms."
            }
          ],
          "purpose": "Preserve recovery and decide on participation based on health, not sunk training time."
        }
      },
      {
        "date": "2026-10-03",
        "day": "Sat",
        "miles": 0,
        "type": "easy",
        "title": "15–20-minute shakeout OR rest",
        "detail": "Only if recovered; race decision remains conditional",
        "distanceText": "15–20 min",
        "workout": {
          "date": "2026-10-03",
          "type": "easy",
          "title": "15–20-minute shakeout OR rest",
          "details": [
            {
              "label": "Run",
              "value": "15–20 min easy if feeling normal; rest is also acceptable"
            },
            {
              "label": "Race gate",
              "value": "Symptoms resolved or only minimal residual throat/nasal symptoms, normal energy/intake, no fever/systemic/chest symptoms and repeated easy exercise tolerated without delayed worsening"
            },
            {
              "label": "If first return only today",
              "value": "Do not use one successful short jog to clear a hard half marathon tomorrow"
            },
            {
              "label": "Pacing",
              "value": "1:38 is an old provisional target, not a commitment after illness. Decide from recovery, not a catch-up test."
            }
          ],
          "purpose": "No final fitness test. If return remains incomplete, skip the race rather than forcing the calendar."
        }
      },
      {
        "date": "2026-10-04",
        "day": "Sun",
        "miles": 0,
        "type": "quality",
        "title": "San Jose HM · conditional start",
        "detail": "13.1 mi only if recovered; DNS is an acceptable outcome",
        "key": true,
        "distanceText": "13.1 if well",
        "workout": {
          "date": "2026-10-04",
          "type": "quality",
          "title": "San Jose HM · conditional start",
          "details": [
            {
              "label": "Start only if",
              "value": "Recovered, graded easy return tolerated and no warning symptoms; seek clinician guidance if illness was more than mild or uncertainty remains"
            },
            {
              "label": "Do not start",
              "value": "Fever, body aches, marked fatigue, chest symptoms, abnormal exercise response or incomplete return to normal function"
            },
            {
              "label": "Race execution",
              "value": "Do not force the former 1:38 target. Stop for chest discomfort, unusual breathlessness, dizziness, palpitations or feeling unwell."
            },
            {
              "label": "If not ready",
              "value": "DNS; no substitute long run or hard workout"
            }
          ],
          "purpose": "Long-term health outranks this checkpoint. No current fitness estimate or race clearance is inferred from missing Garmin recovery data."
        }
      }
    ]
  },
  strength: {
    "activePhase": "illness",
    "intro": "Upper / Lower / Upper remains your long-term split. Active illness is a specific exception: recovery checks replace loading until return is appropriate. Do not catch up missed lifts or substitute gym/swim/bike work for rest. The dated illness plan overrides the healthy race-week preview.",
    "phases": [
      {
        "id": "illness",
        "label": "Current · illness / race week",
        "title": "Recover first · retain the long-term split",
        "summary": "No loaded training with a bad sore throat, fever, systemic or chest symptoms. Preserve the appointments as health checks; do not enforce attendance through illness. Missed strength does not move into Friday/Saturday.",
        "schedule": "Mon Sep 28 Upper A: recovery check/rest. Tue Sep 29 Lower: recovery check; first easy return test if eligible, without loaded legs. Thu Oct 1 Upper B: only brief light work if recovered and easy return tolerated. Reassess after Oct 4 before restoring the usual split.",
        "sessions": [
          { "id": "ill-upper-a", "day": "Mon Sep 28", "title": "Upper A · illness hold", "tone": "upper", "timing": "Rest from training; no missed-set compensation.", "exercises": [{ "name": "Symptom / recovery check", "dose": "No loaded sets", "note": "Check fever, throat severity, energy, eating/drinking and any chest symptoms. Comfortable daily movement is enough." }] },
          { "id": "ill-lower", "day": "Tue Sep 29", "title": "Lower · recovery check", "tone": "lower", "timing": "No jumps, cleans or loaded leg session during the first return test. This is an illness exception, not a permanent removal of lower work.", "exercises": [{ "name": "Return assessment", "dose": "No loaded sets", "note": "If eligible, use the calendar's 10–20 min walk/jog test only. Otherwise rest. Do not replace missed lower work late in race week." }] },
          { "id": "ill-upper-b", "day": "Thu Oct 1", "title": "Upper B · conditional light touch", "tone": "upper", "timing": "10–15 min only if recovered and graded easy return tolerated without delayed symptoms. Otherwise rest.", "exercises": [{ "name": "Familiar press, pull and supported row", "dose": "1 light set each · RPE ≤5", "note": "No explosive throws, novel exercises, grinders or progression. Avoid shared gym exposure while infectious; staying home takes priority." }] }
        ]
      },
      {
        "id": "now",
        "label": "Prior · Sep 21–27",
        "title": "Current plan · Upper / Lower / Upper",
        "summary": "The split starts this week. Introductory loads establish clean, front-squat and single-leg technique without jumping straight to full volume before San Jose. Prior clean experience and working weights remain unconfirmed; use light coached technique for any new lift. RPE and technique regulate load, not whether leg day exists.",
        "schedule": "Monday Upper A • Tuesday Lower • Thursday Upper B. All three are scheduled. Soccer never replaces lower lifting. Tuesday lower comes first, ideally ≥6 h before endurance; fuel between sessions. If the combined day is too demanding, make the run easy or reduce run volume. Friday soccer replaces Friday running intensity. If Tuesday threshold is moved to Friday, it replaces Friday intervals and soccer that week; do not stack them. No extra lower day is added.",
        "sessions": [
          {
            "id": "now-upper-a-v2",
            "day": "Mon Sep 21 · scheduled",
            "title": "Upper A · Power + strength",
            "tone": "upper",
            "timing": "30–40 min. Use the introduction dose below, all strength work RPE 6–7. New movements start with light technique practice; do not add weight to unfamiliar catches. The session remains on the calendar.",
            "exercises": [
              {
                "name": "Seated medicine-ball chest pass",
                "dose": "2 × 3",
                "note": "Throw fast into a suitable wall or to a partner; full reset. Light ball, no conditioning circuit."
              },
              {
                "name": "Bench press",
                "dose": "2 × 5–6 · RPE 6–7",
                "note": "About 2–3 reps in reserve; controlled lowering, fast intent upward."
              },
              {
                "name": "Weighted pull-up / pulldown",
                "dose": "2 × 5–6 · RPE 6–7",
                "note": "Choose load or assistance that preserves full controlled reps."
              },
              {
                "name": "Chest-supported row",
                "dose": "2 × 5–6 · RPE 6–7",
                "note": "No low-back fatigue from unsupported rowing."
              },
              {
                "name": "Seated dumbbell overhead press",
                "dose": "2 × 5–6 · RPE 6–7",
                "note": "Comfortable range; no leg drive."
              },
              {
                "name": "Pallof press",
                "dose": "1 × 8 / side",
                "note": "Anti-rotation control with normal breathing."
              }
            ]
          },
          {
            "id": "now-lower-v2",
            "day": "Tue Sep 22 · scheduled",
            "title": "Lower · Power + unilateral strength",
            "tone": "lower",
            "timing": "35–45 min. Lower first, endurance later. Use the introduction dose below, all strength work RPE 6–7. New movements start with light technique practice; do not add weight to unfamiliar catches. The session remains on the calendar.",
            "exercises": [
              {
                "name": "Countermovement jump",
                "dose": "2 × 3 · low amplitude",
                "note": "Reset each rep and land under control. End a set when height or landing quality drops; no depth jumps."
              },
              {
                "name": "Power clean",
                "dose": "3 × 2 · light technique",
                "note": "Use the floor or hang start you can execute consistently. Start around 60–75% of a current clean max only if known; fast, repeatable catches govern the load. If learning, coach-supervised light technique work fills this slot; no max test."
              },
              {
                "name": "Front squat",
                "dose": "2 × 3 · RPE 6",
                "note": "Main lower strength lift. Stable rack and full comfortable range; drive upward with fast intent."
              },
              {
                "name": "Single-leg squat to box",
                "dose": "1 × 5 / leg · RPE 6",
                "note": "Use a box height and light hand support that keep control. Progress load/range gradually; rear-foot-elevated split squat is a loadable substitute, not an additional exercise."
              },
              {
                "name": "Romanian deadlift",
                "dose": "1 × 5 · RPE 6",
                "note": "Hip-hinge strength; controlled normal tempo, no exaggerated slow lowering. Cleans do not replace this work."
              },
              {
                "name": "Hamstring curl",
                "dose": "1 × 8 · RPE 6",
                "note": "Knee-flexion work; use the familiar machine or slider version."
              },
              {
                "name": "Standing calf raise",
                "dose": "1 × 8",
                "note": "Straight knee, full comfortable range."
              },
              {
                "name": "Seated calf raise",
                "dose": "1 × 10",
                "note": "Bent knee, controlled movement, no bouncing."
              }
            ]
          },
          {
            "id": "now-upper-b-v2",
            "day": "Thu Sep 24 · scheduled",
            "title": "Upper B · Power + control",
            "tone": "upper",
            "timing": "30–40 min. Use the introduction dose below, all strength work RPE 6–7. New movements start with light technique practice; do not add weight to unfamiliar catches. The session remains on the calendar.",
            "exercises": [
              {
                "name": "Tall-kneeling rotational medicine-ball throw",
                "dose": "2 × 3 / side",
                "note": "Light ball, fast trunk/upper-body action with a reset; use a safe wall or partner."
              },
              {
                "name": "Seated dumbbell overhead press",
                "dose": "2 × 5–6 · RPE 6–7",
                "note": "No leg drive; maintain shoulder control."
              },
              {
                "name": "Incline dumbbell press",
                "dose": "2 × 5–6 · RPE 6–7",
                "note": "Brief controlled pause at the bottom; no grind."
              },
              {
                "name": "Chin-up / pulldown",
                "dose": "2 × 5–6 · RPE 6–7",
                "note": "Use load or assistance to keep 3 reps in reserve."
              },
              {
                "name": "Chest-supported row",
                "dose": "2 × 5–6 · RPE 6–7",
                "note": "Brief pause at the top; no heaving."
              },
              {
                "name": "Lateral raise",
                "dose": "1 × 10",
                "note": "Controlled shoulder accessory; stop before form deteriorates."
              },
              {
                "name": "Side plank",
                "dose": "1 × 20 sec / side",
                "note": "Maintain a straight body line and breathe normally."
              }
            ]
          }
        ]
      },
      {
        "id": "race",
        "label": "Healthy race-week template · superseded",
        "title": "Preview · same split, smaller dose",
        "summary": "Upper Sep 28, lower Sep 29, upper Oct 1. Keep the appointments and reduce sets/loading for Oct 4. No heavy progression or novel high-impact drills in race week.",
        "schedule": "Mon Upper A • Tue Lower • Thu Upper B. This is a planned taper within the same split. Oct 5/6/8 remain the next strength appointments: use race-dose upper work and a brief lower recovery/technique session on Oct 6, not a loaded workout through race-related pain. Review Oct 12 before building loads; recovery changes the content of the appointment.",
        "sessions": [
          {
            "id": "race-upper-a-v2",
            "day": "Mon Sep 28 · scheduled",
            "title": "Upper A · Power + strength",
            "tone": "upper",
            "timing": "20–30 min, planned taper dose. Keep technique familiar, RPE 5–6 on strength lifts; no load progression. New clean technique is practiced unloaded/light with coaching, not turned into heavy work.",
            "exercises": [
              {
                "name": "Seated medicine-ball chest pass",
                "dose": "2 × 2 · light",
                "note": "Throw fast into a suitable wall or to a partner; full reset. Light ball, no conditioning circuit."
              },
              {
                "name": "Bench press",
                "dose": "1–2 × 4 · RPE 5–6",
                "note": "About 2–3 reps in reserve; controlled lowering, fast intent upward."
              },
              {
                "name": "Weighted pull-up / pulldown",
                "dose": "1–2 × 4 · RPE 5–6",
                "note": "Choose load or assistance that preserves full controlled reps."
              },
              {
                "name": "Chest-supported row",
                "dose": "1–2 × 4 · RPE 5–6",
                "note": "No low-back fatigue from unsupported rowing."
              },
              {
                "name": "Seated dumbbell overhead press",
                "dose": "1–2 × 4 · RPE 5–6",
                "note": "Comfortable range; no leg drive."
              },
              {
                "name": "Pallof press",
                "dose": "1 × 6 / side",
                "note": "Anti-rotation control with normal breathing."
              }
            ]
          },
          {
            "id": "race-lower-v2",
            "day": "Tue Sep 29 · scheduled",
            "title": "Lower · Power + unilateral strength",
            "tone": "lower",
            "timing": "20–30 min, planned taper dose. Keep technique familiar, RPE 5–6 on strength lifts; no load progression. New clean technique is practiced unloaded/light with coaching, not turned into heavy work.",
            "exercises": [
              {
                "name": "Countermovement jump",
                "dose": "2 × 2 · easy amplitude",
                "note": "Reset each rep and land under control. End a set when height or landing quality drops; no depth jumps."
              },
              {
                "name": "Power clean",
                "dose": "2 × 2 · light technique",
                "note": "Use the floor or hang start you can execute consistently. Start around 60–75% of a current clean max only if known; fast, repeatable catches govern the load. If learning, coach-supervised light technique work fills this slot; no max test."
              },
              {
                "name": "Front squat",
                "dose": "2 × 3 · RPE 5–6",
                "note": "Main lower strength lift. Stable rack and full comfortable range; drive upward with fast intent."
              },
              {
                "name": "Single-leg squat to box",
                "dose": "1 × 4 / leg · easy",
                "note": "Use a box height and light hand support that keep control. Progress load/range gradually; rear-foot-elevated split squat is a loadable substitute, not an additional exercise."
              },
              {
                "name": "Romanian deadlift",
                "dose": "1 × 4 · easy",
                "note": "Hip-hinge strength; controlled normal tempo, no exaggerated slow lowering. Cleans do not replace this work."
              },
              {
                "name": "Hamstring curl",
                "dose": "1 × 6 · easy",
                "note": "Knee-flexion work; use the familiar machine or slider version."
              },
              {
                "name": "Standing calf raise",
                "dose": "1 × 6 · easy",
                "note": "Straight knee, full comfortable range."
              },
              {
                "name": "Seated calf raise",
                "dose": "1 × 8 · easy",
                "note": "Bent knee, controlled movement, no bouncing."
              }
            ]
          },
          {
            "id": "race-upper-b-v2",
            "day": "Thu Oct 1 · scheduled",
            "title": "Upper B · Power + control",
            "tone": "upper",
            "timing": "20–30 min, planned taper dose. Keep technique familiar, RPE 5–6 on strength lifts; no load progression. New clean technique is practiced unloaded/light with coaching, not turned into heavy work.",
            "exercises": [
              {
                "name": "Tall-kneeling rotational medicine-ball throw",
                "dose": "2 × 2 / side · light",
                "note": "Light ball, fast trunk/upper-body action with a reset; use a safe wall or partner."
              },
              {
                "name": "Seated dumbbell overhead press",
                "dose": "1–2 × 4 · RPE 5–6",
                "note": "No leg drive; maintain shoulder control."
              },
              {
                "name": "Incline dumbbell press",
                "dose": "1–2 × 4 · RPE 5–6",
                "note": "Brief controlled pause at the bottom; no grind."
              },
              {
                "name": "Chin-up / pulldown",
                "dose": "1–2 × 4 · RPE 5–6",
                "note": "Use load or assistance to keep 3 reps in reserve."
              },
              {
                "name": "Chest-supported row",
                "dose": "1–2 × 4 · RPE 5–6",
                "note": "Brief pause at the top; no heaving."
              },
              {
                "name": "Lateral raise",
                "dose": "1 × 8 · easy",
                "note": "Controlled shoulder accessory; stop before form deteriorates."
              },
              {
                "name": "Side plank",
                "dose": "1 × 20 sec / side",
                "note": "Maintain a straight body line and breathe normally."
              }
            ]
          }
        ]
      },
      {
        "id": "build",
        "label": "Build · 12 weeks",
        "title": "Preview · strength, power and control",
        "summary": "Three sessions weekly: two upper, one lower. Start the loading block after race recovery, provisionally Oct 12. This is the complete lifting schedule. The lower day includes both rapid-force and high-force work plus unilateral, posterior-chain and calf strength.",
        "schedule": "Monday Upper A • Tuesday Lower • Thursday Upper B. All three are scheduled. Soccer never replaces lower lifting. Tuesday lower comes first, ideally ≥6 h before endurance; fuel between sessions. If the combined day is too demanding, make the run easy or reduce run volume. Friday soccer replaces Friday running intensity. If Tuesday threshold is moved to Friday, it replaces Friday intervals and soccer that week; do not stack them. No extra lower day is added.",
        "sessions": [
          {
            "id": "upper-a-v2",
            "day": "Monday · fixed",
            "title": "Upper A · Power + strength",
            "tone": "upper",
            "timing": "45–55 min. Throws first, then the main presses/pulls. Rest 60–90 sec on throws, 2–3 min on main lifts and 60–90 sec on accessories. Keep the swim easy and separate it from lifting where practical.",
            "exercises": [
              {
                "name": "Seated medicine-ball chest pass",
                "dose": "3 × 3",
                "note": "Throw fast into a suitable wall or to a partner; full reset. Light ball, no conditioning circuit."
              },
              {
                "name": "Bench press",
                "dose": "3 × 4–6 · RPE 7–8",
                "note": "About 2–3 reps in reserve; controlled lowering, fast intent upward."
              },
              {
                "name": "Weighted pull-up / pulldown",
                "dose": "3 × 4–6 · RPE 7–8",
                "note": "Choose load or assistance that preserves full controlled reps."
              },
              {
                "name": "Chest-supported row",
                "dose": "2 × 8 · RPE 7",
                "note": "No low-back fatigue from unsupported rowing."
              },
              {
                "name": "Seated dumbbell overhead press",
                "dose": "2 × 6–8 · RPE 7",
                "note": "Comfortable range; no leg drive."
              },
              {
                "name": "Pallof press",
                "dose": "2 × 8 / side",
                "note": "Anti-rotation control with normal breathing."
              }
            ]
          },
          {
            "id": "lower-v2",
            "day": "Tuesday · fixed",
            "title": "Lower · Power + unilateral strength",
            "tone": "lower",
            "timing": "60–75 min. Train before endurance work, preferably in the morning. Warm up 8–10 min plus progressive clean/front-squat warm-up sets. Rest 90–120 sec on jumps, 2–3 min on cleans/squats and 90–120 sec on assistance. Complete exercises in this order.",
            "exercises": [
              {
                "name": "Countermovement jump",
                "dose": "3 × 3",
                "note": "Reset each rep and land under control. End a set when height or landing quality drops; no depth jumps."
              },
              {
                "name": "Power clean",
                "dose": "4 × 2",
                "note": "Use the floor or hang start you can execute consistently. Start around 60–75% of a current clean max only if known; fast, repeatable catches govern the load. If learning, coach-supervised light technique work fills this slot; no max test."
              },
              {
                "name": "Front squat",
                "dose": "3 × 3–5 · RPE 7–8",
                "note": "Main lower strength lift. Stable rack and full comfortable range; drive upward with fast intent."
              },
              {
                "name": "Single-leg squat to box",
                "dose": "2 × 5 / leg · RPE 7",
                "note": "Use a box height and light hand support that keep control. Progress load/range gradually; rear-foot-elevated split squat is a loadable substitute, not an additional exercise."
              },
              {
                "name": "Romanian deadlift",
                "dose": "2 × 5–6 · RPE 7",
                "note": "Hip-hinge strength; controlled normal tempo, no exaggerated slow lowering. Cleans do not replace this work."
              },
              {
                "name": "Hamstring curl",
                "dose": "2 × 8 · RPE 7",
                "note": "Knee-flexion work; use the familiar machine or slider version."
              },
              {
                "name": "Standing calf raise",
                "dose": "2 × 6–8 · RPE 7",
                "note": "Straight knee, full comfortable range."
              },
              {
                "name": "Seated calf raise",
                "dose": "2 × 10–12 · RPE 7",
                "note": "Bent knee, controlled movement, no bouncing."
              }
            ]
          },
          {
            "id": "upper-b-v2",
            "day": "Thursday · fixed",
            "title": "Upper B · Power + control",
            "tone": "upper",
            "timing": "45–55 min. Throws first; controlled presses and pulls follow. Rest as on Upper A. Keep the scheduled swim relaxed, with no hard paddle/pull sets layered onto lifting.",
            "exercises": [
              {
                "name": "Tall-kneeling rotational medicine-ball throw",
                "dose": "3 × 3 / side",
                "note": "Light ball, fast trunk/upper-body action with a reset; use a safe wall or partner."
              },
              {
                "name": "Seated dumbbell overhead press",
                "dose": "3 × 5 · RPE 7",
                "note": "No leg drive; maintain shoulder control."
              },
              {
                "name": "Incline dumbbell press",
                "dose": "2 × 6–8 · RPE 7",
                "note": "Brief controlled pause at the bottom; no grind."
              },
              {
                "name": "Chin-up / pulldown",
                "dose": "3 × 6 · RPE 7",
                "note": "Use load or assistance to keep 3 reps in reserve."
              },
              {
                "name": "Chest-supported row",
                "dose": "2 × 8–10 · RPE 7",
                "note": "Brief pause at the top; no heaving."
              },
              {
                "name": "Lateral raise",
                "dose": "2 × 10–15 · RPE 7",
                "note": "Controlled shoulder accessory; stop before form deteriorates."
              },
              {
                "name": "Side plank",
                "dose": "2 × 20–30 sec / side",
                "note": "Maintain a straight body line and breathe normally."
              }
            ]
          }
        ]
      },
      {
        "id": "maintenance",
        "label": "Peak marathon / 70.3",
        "title": "Preview · retain all three appointments",
        "summary": "During peak marathon or 70.3 training, use shorter versions of Upper A, Lower and Upper B. Keep the weekly frequency; trim set count and hold loads. The actual event calendar will determine endurance placement.",
        "schedule": "Mon Upper A • Tue Lower • Thu Upper B, with a typical Sat long ride/brick and Sun long run. Tuesday remains the lower anchor; do not fill Monday with hard leg work. Adjust endurance volume/intensity around the lifting slots. Planned taper or recovery weeks retain the split with technique/reduced-load work. Injury or illness needs a specific exercise modification or care plan, not a demand to train through it.",
        "sessions": [
          {
            "id": "maintenance-upper-a-v2",
            "day": "Monday · scheduled",
            "title": "Upper A · Power + strength",
            "tone": "upper",
            "timing": "25–35 min. Keep all three appointments during peak endurance training. Use established technique and RPE 6–7; reduce working sets as shown. Lower before endurance on Tuesday.",
            "exercises": [
              {
                "name": "Seated medicine-ball chest pass",
                "dose": "2 × 3",
                "note": "Throw fast into a suitable wall or to a partner; full reset. Light ball, no conditioning circuit."
              },
              {
                "name": "Bench press",
                "dose": "2 × 5–6 · RPE 7",
                "note": "About 2–3 reps in reserve; controlled lowering, fast intent upward."
              },
              {
                "name": "Weighted pull-up / pulldown",
                "dose": "2 × 5–6 · RPE 7",
                "note": "Choose load or assistance that preserves full controlled reps."
              },
              {
                "name": "Chest-supported row",
                "dose": "2 × 5–6 · RPE 7",
                "note": "No low-back fatigue from unsupported rowing."
              },
              {
                "name": "Seated dumbbell overhead press",
                "dose": "2 × 5–6 · RPE 7",
                "note": "Comfortable range; no leg drive."
              },
              {
                "name": "Pallof press",
                "dose": "1 × 8 / side",
                "note": "Anti-rotation control with normal breathing."
              }
            ]
          },
          {
            "id": "maintenance-lower-v2",
            "day": "Tuesday · scheduled",
            "title": "Lower · Power + unilateral strength",
            "tone": "lower",
            "timing": "35–45 min. Keep all three appointments during peak endurance training. Use established technique and RPE 6–7; reduce working sets as shown. Lower before endurance on Tuesday.",
            "exercises": [
              {
                "name": "Countermovement jump",
                "dose": "2 × 3",
                "note": "Reset each rep and land under control. End a set when height or landing quality drops; no depth jumps."
              },
              {
                "name": "Power clean",
                "dose": "3 × 2 · crisp",
                "note": "Use the floor or hang start you can execute consistently. Start around 60–75% of a current clean max only if known; fast, repeatable catches govern the load. If learning, coach-supervised light technique work fills this slot; no max test."
              },
              {
                "name": "Front squat",
                "dose": "2 × 3 · RPE 7",
                "note": "Main lower strength lift. Stable rack and full comfortable range; drive upward with fast intent."
              },
              {
                "name": "Single-leg squat to box",
                "dose": "1 × 5 / leg · RPE 7",
                "note": "Use a box height and light hand support that keep control. Progress load/range gradually; rear-foot-elevated split squat is a loadable substitute, not an additional exercise."
              },
              {
                "name": "Romanian deadlift",
                "dose": "1 × 5 · RPE 7",
                "note": "Hip-hinge strength; controlled normal tempo, no exaggerated slow lowering. Cleans do not replace this work."
              },
              {
                "name": "Hamstring curl",
                "dose": "1 × 8 · RPE 7",
                "note": "Knee-flexion work; use the familiar machine or slider version."
              },
              {
                "name": "Standing calf raise",
                "dose": "1 × 8",
                "note": "Straight knee, full comfortable range."
              },
              {
                "name": "Seated calf raise",
                "dose": "1 × 10",
                "note": "Bent knee, controlled movement, no bouncing."
              }
            ]
          },
          {
            "id": "maintenance-upper-b-v2",
            "day": "Thursday · scheduled",
            "title": "Upper B · Power + control",
            "tone": "upper",
            "timing": "25–35 min. Keep all three appointments during peak endurance training. Use established technique and RPE 6–7; reduce working sets as shown. Lower before endurance on Tuesday.",
            "exercises": [
              {
                "name": "Tall-kneeling rotational medicine-ball throw",
                "dose": "2 × 3 / side",
                "note": "Light ball, fast trunk/upper-body action with a reset; use a safe wall or partner."
              },
              {
                "name": "Seated dumbbell overhead press",
                "dose": "2 × 5–6 · RPE 7",
                "note": "No leg drive; maintain shoulder control."
              },
              {
                "name": "Incline dumbbell press",
                "dose": "2 × 5–6 · RPE 7",
                "note": "Brief controlled pause at the bottom; no grind."
              },
              {
                "name": "Chin-up / pulldown",
                "dose": "2 × 5–6 · RPE 7",
                "note": "Use load or assistance to keep 3 reps in reserve."
              },
              {
                "name": "Chest-supported row",
                "dose": "2 × 5–6 · RPE 7",
                "note": "Brief pause at the top; no heaving."
              },
              {
                "name": "Lateral raise",
                "dose": "1 × 12",
                "note": "Controlled shoulder accessory; stop before form deteriorates."
              },
              {
                "name": "Side plank",
                "dose": "1 × 25 sec / side",
                "note": "Maintain a straight body line and breathe normally."
              }
            ]
          }
        ]
      }
    ],
    "progression": [
      {
        "title": "Warm-up and execution",
        "text": "Use 5–8 min general movement on upper days and 8–10 min on lower day, then progressive warm-up sets for the first loaded exercises. Throws/jumps → power cleans → front squat → single-leg and posterior-chain work. Reset explosive reps fully. Strength RPE 6/7/8 ≈ 4/3/2 reps in reserve; Olympic-lift quality is judged by speed and catch consistency, not reps to failure."
      },
      {
        "title": "Weeks 1–2 · establish loads",
        "text": "In the post-race loading block: use 2 sets for upper main lifts and front squats, 1 set per accessory, jumps/throws 2 × 3 and cleans 3 × 2. RPE 6–7 for strength work. Build from recent demonstrated technique and strength, not old maximums. A new clean is a coached technique task; loaded catching follows competence. Single-leg squats use hand support and an appropriate box height from the outset."
      },
      {
        "title": "Weeks 3–4 · build and absorb",
        "text": "Week 3 uses the listed build dose. Week 4 retains Monday/Tuesday/Thursday, with half the working sets rounded up and RPE 6–7. Keep explosive work brief and crisp. This planned reduction manages fatigue without making lower training optional."
      },
      {
        "title": "Weeks 5–12 · progressive loading",
        "text": "Weeks 5–7 and 9–11 use normal sets; weeks 8 and 12 repeat the reduced-set week. Front squat 3 × 3 → 3 × 4 → 3 × 5 within RPE 7–8; then add about 5 lb and return to triples. Upper rep ranges progress the same way, using the smallest increment. Accessories reach the top of the range before weight rises. Do not add sets and load together; no AMRAPs or max tests."
      },
      {
        "title": "Progress power without turning it into conditioning",
        "text": "Cleans remain 4 × 2 in build weeks. Add the smallest available increment only after two exposures with consistently fast pulls and secure catches; otherwise repeat the load. Jumps stay at 3 × 3. Throws use a light ball you can accelerate fast. Reduced speed or poor landings end the set and trigger lighter/simpler work for that slot; the remaining lower session continues. Do not add fatigued repetitions to complete a number."
      },
      {
        "title": "Protect the lower appointment",
        "text": "Lower training is Tuesday, before the endurance session. Ordinary fatigue changes load/set count; it does not move the workout behind soccer or erase it. When combined training is too costly, shorten easy mileage or replace a hard run with easy running first. A logistical clash gets an explicit replacement slot in the same week, with competing endurance work moved. Pain, illness or unsafe technique calls for an appropriate movement substitution, technique/rehab work or clinical assessment."
      },
      {
        "title": "Track performance, not just attendance",
        "text": "Log clean load/catch quality, front-squat sets/reps/RPE, single-leg box height/support/load and upper lifts. Review every four weeks alongside jump quality, soreness and running/swimming/cycling response. These track strength and power; they do not measure muscle-fiber type. One lower session is the requested design constraint; much runner research uses 2–3 strength exposures, so we do not claim this exact frequency maximizes lower-body adaptation."
      }
    ],
    "guardrails": [
      "Default split: Monday upper, Tuesday lower, Thursday upper; active illness suspends loading",
      "Soccer and endurance volume do not cancel the lower session",
      "Power first; load follows speed, catch quality and control",
      "Planned deloads reduce sets; the weekly split stays in place"
    ],
    "evidence": "This is an Upper / Lower / Upper program chosen to meet your fixed training preference. Candito informs simple progression and the distinction between heavy, control and power work. NSCA weightlifting guidance supports cleans and their derivatives for force and power. Front squats and single-leg squats provide bilateral and unilateral strength practice; neither is claimed uniquely necessary for health or superior for every runner. The precise split, exercise selection and progression are coaching choices, not a trial-tested package.",
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
      },
      {
        "title": "NSCA 2023 · Weightlifting for Sports Performance",
        "url": "https://dxpprod.nsca.com/globalassets/about/position-statements/weighlifting-for-sports-performance.pdf"
      },
      {
        "title": "Morris et al. 2022 · weightlifting, resistance training and plyometrics",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35025093/"
      }
    ],
    "evidenceMap": [
      {
        "title": "Power cleans · NSCA and weightlifting research",
        "text": "The NSCA 2023 Weightlifting for Sports Performance position statement supports appropriately taught catching and pulling derivatives. A 2022 meta-analysis supports weightlifting for strength/power development, with jumping advantages over traditional resistance training in some comparisons; superiority for sprint speed is not established across comparators. Application: low-rep cleans while fresh, coached progression and full recovery, alongside jumping and strength work."
      },
      {
        "title": "Heavy strength · runner evidence",
        "text": "Støren et al. (2008): a small 8-week trial in well-trained distance runners used half-squats, 4 × 4RM, three times weekly, and improved running economy and force production. Llanos-Lagos et al. (2024) synthesized 31 studies and supports high-load or combined methods, with effects varying by speed and study quality. Application: progressively heavier squat/hinge work. Our once-weekly lower, subfailure dose is an adaptation; the trial does not validate these exact sets."
      },
      {
        "title": "Explosive work · Olympic-sport research",
        "text": "Paavolainen et al. (1999), from Finland’s Research Institute for Olympic Sports: 18 well-trained endurance athletes over 9 weeks; the explosive-training group improved 5-km performance, economy and power. Training was partly replaced, not simply added. Application: a small jump dose and existing strides, while managing total workload. This does not establish that 9 jumps per week is an optimal or equivalent dose."
      },
      {
        "title": "Strength alongside cycling · elite evidence",
        "text": "Rønnestad et al. (2015): 16 young elite cyclists studied over 25 weeks; adding heavy strength improved several power/performance measures, with no change in VO2max or cycling economy. Application: keep lower strength through the 70.3 build, reduce its volume as endurance demands rise. This is cycling evidence, not a direct trial of this triathlon program."
      },
      {
        "title": "Olympic-system practice · individualize and monitor",
        "text": "Norway’s Olympiatoppen integrates strength, jumping and speed with the sport’s overall plan and uses testing to guide and evaluate training. Its intensity framework distinguishes neuromuscular from aerobic work. Application: track strength at a given effort, jump quality, soreness and endurance performance together. These are documented system principles, not a claim that every Olympian follows one lifting program."
      },
      {
        "title": "The requested split · evidence and preference",
        "text": "ACSM supports progressive resistance training, heavier strength work and fast contractions for power. Candito provides a useful progression framework. Two upper days and one lower day are your fixed constraint; studies with 2–3 lower exposures cannot prove this once-weekly lower dose equivalent. We will evaluate actual strength/power progress. Several-hour spacing helps manage concurrent work, but six hours is not a universal cutoff. Lower now comes first because it is a protected training priority."
      }
    ]
  },
  volume: [
    { label: "Aug 24", miles: 39.5, state: "complete" },
    { label: "Aug 31", miles: 38.6, state: "complete" },
    { label: "Sep 7", miles: 44.4, state: "complete" },
    { label: "Sep 14", miles: 50.4, state: "complete" },
    { label: "Sep 21", miles: 22.5, state: "complete" }
  ],
  rules: [
    { icon: "↘", title: "Easy means easy", text: "Use conversational effort. Pace can float with heat and fatigue." },
    { icon: "◇", title: "Fuel the work", text: "Do not create the calorie deficit around threshold or long-run sessions." },
    { icon: "⚑", title: "No catch-up intensity", text: "No threshold, VO2, long run or Friday soccer this week. Optional relaxed strides only after normal graded return. Do not race with fever, systemic/chest symptoms or abnormal exercise responses." },
    { icon: "⌁", title: "Illness exception, not abandonment", text: "The Upper/Lower/Upper split stays the long-term default. Current illness replaces loading with recovery checks. No late-week make-up lifts." },
    { icon: "+", title: "Return step by step", text: "First eligible outing: 10–20 min easy. Monitor during, after and for 24 h before progressing. No extra bike/swim volume to replace missed running; avoid exposing others while infectious." },
    { icon: "↗", title: "Build toward 65 mpw", text: "65 mpw remains a possible long-term running objective, not a requirement during 70.3 training. Tokyo and a 2027 70.3 are athlete-confirmed; event details are pending. Set sustainable run volume alongside swim/bike demands and three lifting appointments." }
  ]
};

// Use the timeline prescription as the single source for the next-session panel.
window.TRAINING_DATA.currentWorkout = window.TRAINING_DATA.week.days.find(
  (day) => day.date === "2026-09-28"
).workout;
