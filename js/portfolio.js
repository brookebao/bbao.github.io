/* Optional accessible archive filtering. All projects remain available without JavaScript. */
(() => {
 const filters = document.querySelector('[data-portfolio-filters]');
 if (!filters) return;
 const buttons = [...filters.querySelectorAll('button[data-filter]')];
 const projects = [...document.querySelectorAll('[data-project-category]')];
 const count = document.querySelector('[data-project-count]');
 filters.hidden = false;
 buttons.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  buttons.forEach(control => control.setAttribute('aria-pressed', String(control === button)));
  let visible = 0;
  projects.forEach(project => {
   project.hidden = selected !== 'all' && !project.dataset.projectCategory.split(' ').includes(selected);
   if (!project.hidden) visible++;
  });
  count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
 }));
})();
