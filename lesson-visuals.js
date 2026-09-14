const visualSvg = (label, symbol) => 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect width="1200" height="600" fill="#e8f0e4"/><circle cx="980" cy="120" r="190" fill="#dff064" opacity=".75"/><circle cx="220" cy="500" r="260" fill="#f5d0b5" opacity=".8"/><text x="90" y="250" font-family="Arial,sans-serif" font-size="92" fill="#17251e">${symbol}</text><text x="90" y="350" font-family="Arial,sans-serif" font-size="54" font-weight="700" fill="#2b7653">${label}</text><text x="90" y="405" font-family="Arial,sans-serif" font-size="28" fill="#617068">UTP 60 · small steps, real life</text></svg>`);
const lessonVisuals = {
  foundation: visualSvg('Start Strong','🌱'),
  food: visualSvg('Build Your Plate','🥗'),
  movement: visualSvg('Move With Confidence','🚶'),
  sleep: visualSvg('Zindagi Reset','🌙'),
  habits: visualSvg('Habits That Last','🔄'),
  plan: visualSvg('Your Forever Plan','🧭')
};