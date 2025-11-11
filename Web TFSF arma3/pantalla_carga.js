// script_presentacion.js
document.addEventListener('DOMContentLoaded', () => {
  const entrarBtn = document.getElementById('entrarBtn');
  const loadingScreen = document.getElementById('loadingScreen');

  entrarBtn.addEventListener('click', () => {
    entrarBtn.disabled = true;
    entrarBtn.classList.add('clicked');

    // Mostrar pantalla de carga
    loadingScreen.style.display = 'flex';
    loadingScreen.style.opacity = '1';

    // Mantener visible hasta el final (3.5s)
    setTimeout(() => {
      loadingScreen.style.transition = 'opacity 0.8s ease';
      loadingScreen.style.opacity = '0';
    }, 3500);

    // Redirigir un poco antes (3.4s)
    setTimeout(() => {
      window.location.href = 'inicio_TFSF.html';
    }, 3400);
  });
});
