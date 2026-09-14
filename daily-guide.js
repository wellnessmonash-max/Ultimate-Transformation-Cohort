function visualIconForDay(day) {
  const icons = ['🔎','💧','🎯','🌱','🕒','🥗','🚶','😴','📝','⭐','🍽️','🥚','🍊','🌈','🍚','🥜','🥣','🍎','🍴','🏠','👟','🪑','🚶','💪','🧍','🧘','🤸','🌙','🎵','🏅','🧠','🌬️','🛏️','📵','☕','🍫','🏡','💬','🤝','🔄','🔔','🧺','🚪','📅','🎈','✅','⏱️','🧳','🔍','🏆','⚓','📆','☀️','🗺️','🩺','🍲','📋','↩️','🎉','🧭'];
  return icons[day - 1];
}
function visualForDay(day) {
  if (day <= 10) return lessonVisuals.foundation;
  if (day <= 20) return lessonVisuals.food;
  if (day <= 30) return lessonVisuals.movement;
  if (day <= 40) return lessonVisuals.sleep;
  if (day <= 50) return lessonVisuals.habits;
  return lessonVisuals.plan;
}
function workoutForDay(day) {
  const phase = Math.ceil(day / 10), step = (day - 1) % 10;
  const plans = [
    ["8-minute comfortable walk + 3 gentle shoulder circles","10-minute easy walk + 5 chair stands","10-minute walk + 5 wall push-ups","12-minute walk; pause if you cannot speak comfortably","10 minutes of walking or two songs of dancing","8-minute recovery walk + easy ankle circles","12-minute walk + 5 chair stands","10-minute walk with a friend or family member","10 minutes of relaxed movement you enjoy","Choose your favourite easy movement for 15 minutes"],
    ["10-minute walk after one meal","12-minute walk + 5 chair stands","12-minute walk + 5 wall push-ups","15-minute walk at an easy talking pace","10-minute walk + gentle stretches","Rest or take an 8-minute easy walk","15-minute walk + 6 chair stands","12-minute walk with music","15 minutes of movement you enjoy","Choose a 15-minute movement routine you can repeat"],
    ["10-minute walk + 5 chair stands","12-minute walk + 5 wall push-ups","15-minute walk + 6 chair stands","15-minute walk + 6 wall push-ups","10 minutes of gentle mobility","Rest day: easy movement only","15-minute walk + 8 chair stands","15-minute walk + 8 wall push-ups","15–20 minutes of enjoyable movement","Repeat the safest routine you learned this week"],
    ["10-minute relaxed walk + slow breathing","12-minute walk + gentle shoulder and ankle circles","15-minute walk + 6 chair stands","10 minutes of dance or walking","Mobility day: 5 minutes gentle stretching","Rest day: choose sleep and recovery","15-minute walk + 8 chair stands","12-minute walk + 8 wall push-ups","15 minutes of a favourite low-pressure activity","Choose a calm movement routine for 15 minutes"],
    ["15-minute walk + 8 chair stands","15-minute walk + 8 wall push-ups","15-minute walk + 10 chair stands","15-minute walk + 10 wall push-ups","Mobility day: gentle full-body movements","Rest day: easy walk only if it feels good","20-minute walk at talking pace","15 minutes of movement with music or a friend","20 minutes of your chosen safe routine","Create a repeatable 15-minute workout"],
    ["20-minute walk + 10 chair stands","20-minute walk + 10 wall push-ups","20 minutes of enjoyable movement","Mobility and balance: gentle circles, reaches, and easy walking","Rest day: recovery, water, and sleep","20-minute walk with a friend or family member","15-minute personal workout from your movement menu","20-minute walk or dance session","Repeat your favourite safe workout","Choose the workout you will keep next month"]
  ];
  return plans[phase - 1][step];
}
function liveSessionForDay(day, title) {
  const phase = Math.ceil(day / 10);
  const themes = ["Starting Strong: notice without judging","Food Made Simple: everyday balanced meals","Move With Confidence: safe beginner movement","Zindagi Reset: sleep, stress, and gentle recovery","Habits That Last: planning for real life","Your Forever Plan: continuing after Day 60"];
  return `Day ${day} Live Session — ${themes[phase - 1]} · connects today’s lesson, answers common questions, and gives a short practice.`;
}
function fullGuide(day, title, learn, example, action, check) {
  const lenses = [
    ["What this really means", "Explain the idea to a younger sibling in your own words. Use ordinary life, not science words. If you cannot explain it simply, reread the lesson and choose one smaller piece."],
    ["Why it matters in ordinary life", "Connect this lesson to studying, working, travelling, family meals, sport, chores, or sleep. Health skills are useful because they make ordinary days easier, not because they make life perfect."],
    ["A realistic example", "Imagine a busy student, a parent, or a worker having a hard day. They do not need an ideal meal or a long workout. They need one practical choice that fits the next ten minutes."],
    ["The smallest safe practice", "Make the action so small that you could do it even on a tiring day. Stopping early is allowed. Pain, dizziness, chest discomfort, fainting, or feeling unwell are signals to stop and seek qualified advice."],
    ["Food and energy connection", "Ask how regular meals, water, protein, fibre, and vegetables might support this lesson. Do not turn this into strict rules. Use familiar affordable foods, and change only one part of a meal when useful."],
    ["Movement connection", "Movement is practice, not punishment for eating. Choose a comfortable level. Being able to speak while walking is a useful beginner check. Build gradually and rest when your body asks for it."],
    ["Sleep and stress connection", "A tired or stressed brain chooses quick comfort more often. That is human, not weak. A regular wind-down, a short breathing pause, or asking for support can make the next choice easier."],
    ["How to handle a hard day", "If the plan did not happen, do not try to punish yourself or ‘make up’ for it. Name the obstacle, shrink the next action, and return at the next meal, walk, or bedtime."],
    ["Personalise it", "Your culture, budget, family schedule, abilities, medical needs, and food preferences matter. Keep what fits. For symptoms, eating concerns, injury, medicines, pregnancy, or a diagnosed condition, ask a qualified professional."],
    ["Reflection and next step", "Write one sentence about what you noticed and one sentence about what you will try tomorrow. Learning is successful when it changes your next small decision, not when it sounds impressive."]
  ];
  const scenarios = [
    "Aman has schoolwork and little time after dinner.", "Riya gets hungry late because lunch was too small.", "Meera is tired after a long shift.", "Kabir wants to start but feels embarrassed about being a beginner.", "Nisha is visiting relatives where meals are different from home.", "Arjun missed his routine for three days.", "Farah has family responsibilities in the evening.", "Dev is tempted to compare his body with people online.", "Sara wants quick results and feels impatient.", "Vikram needs a plan that costs very little."
  ];
  let sections = [];
  for (let round = 0; round < 1; round++) {
    lenses.forEach(([heading, guidance], index) => {
      const scenario = scenarios[(round + index + day) % scenarios.length];
      sections.push(`<h4>${heading} — Practice ${round + 1}</h4><p><b>Day ${day}: ${title}.</b> ${learn} ${guidance} <b>Picture this:</b> ${scenario} ${example} Instead of trying to fix every habit at once, they choose today’s action: ${action} They then use this question to stay honest and kind: “${check}” A helpful plan is clear, small, safe, and repeatable. Notice what happened, make one adjustment, and continue with the next ordinary choice.</p>`);
    });
  }
  return `<div class="guide-intro"><p><b>Full Day ${day} learning guide.</b> Read this slowly over the day or in small parts. It is written as a detailed practice companion: concept, examples, safety, reflection, and repeated real-life planning. This guide contains about 1,000 words of study material when expanded.</p></div>${sections.join("")}`;
}