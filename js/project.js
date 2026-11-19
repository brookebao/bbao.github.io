/* Native, optional image enlargement. All figures still link to their originals without JS. */
(() => {
 const viewer = document.querySelector('[data-image-viewer]');
 if (!viewer || typeof viewer.showModal !== 'function') return;
 const image = viewer.querySelector('img');
 const caption = viewer.querySelector('[data-viewer-caption]');
 let trigger;
 document.querySelectorAll('[data-enlarge]').forEach(link => {
  link.addEventListener('click', event => {
   if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
   event.preventDefault();
   trigger = link;
   image.src = link.href;
   image.alt = link.querySelector('img').alt;
   caption.textContent = link.closest('figure').querySelector('figcaption')?.textContent || image.alt;
   viewer.showModal();
   document.body.classList.add('viewer-open');
  });
 });
 viewer.addEventListener('click', event => { if (event.target === viewer) {
  const rect = viewer.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) viewer.close();
 }});
 viewer.addEventListener('close', () => {
  document.body.classList.remove('viewer-open');
  image.removeAttribute('src');
  trigger?.focus();
 });
})();
