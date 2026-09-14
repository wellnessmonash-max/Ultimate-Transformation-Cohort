const moduleButtons = document.querySelectorAll('[data-module-filter]');
const courseModuleNames = ['Start Strong', 'Build Your Plate', 'Move With Confidence', 'Zindagi Reset', 'Habits That Last', 'Your Forever Plan'];
function setModuleFilter(module) {
  document.querySelectorAll('.day-card').forEach(card => {
    card.hidden = module !== 'all' && Number(card.dataset.module) !== Number(module);
  });
  moduleButtons.forEach(button => button.classList.toggle('active', button.dataset.moduleFilter === String(module)));
  const title = module === 'all' ? 'All 60 daily lessons' : 'Module ' + module + ': ' + courseModuleNames[Number(module) - 1];
  document.querySelector('#lesson-filter-title').textContent = title;
}
moduleButtons.forEach(button => button.addEventListener('click', () => {
  setModuleFilter(button.dataset.moduleFilter);
  document.querySelector('#daily').scrollIntoView({ behavior: 'smooth', block: 'start' });
}));
setModuleFilter('all');