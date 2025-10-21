// Obtener elementos
const btn = document.getElementById('abrirChat');
const globo = document.querySelector('.globo');
const chat = document.querySelector('.chat-section');

// Función para alternar globo ↔ chat
btn.addEventListener('click', () => {
  globo.classList.toggle('oculto');      // oculta/mostrar globo
  chat.classList.toggle('visible');      // muestra/oculta chat
});
