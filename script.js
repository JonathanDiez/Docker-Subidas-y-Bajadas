// Expandir / Contraer todos los <details>
document.getElementById('expand-all').addEventListener('click', () => {
  document.querySelectorAll('details').forEach(d => d.open = true);
});
document.getElementById('collapse-all').addEventListener('click', () => {
  document.querySelectorAll('details').forEach(d => d.open = false);
});

// Mejora mínima de accesibilidad: permitir abrir/cerrar con Enter en summary
document.querySelectorAll('summary').forEach(s => {
  s.tabIndex = 0;
  s.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const parent = s.parentElement;
      parent.open = !parent.open;
    }
  });
});
