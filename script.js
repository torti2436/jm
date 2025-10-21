// =====================
// 🟡 GLOBO ↔ CHAT
// =====================

// Obtener elementos
const btn = document.getElementById('abrirChat');
const globo = document.querySelector('.globo');
const chat = document.querySelector('.chat-section');

// Función para alternar globo ↔ chat
btn.addEventListener('click', () => {
  globo.classList.toggle('oculto');      // oculta/mostrar globo
  chat.classList.toggle('visible');      // muestra/oculta chat
});


// =====================
// 🌽 SISTEMA DE CRECIMIENTO DE TORTI
// =====================

// Frases según etapa
const frases = [
  "Todavía soy solo harina y agua... 🌾",
  "¡Estoy mezclando los ingredientes!",
  "Comienzo a tomar forma 👶",
  "Estoy creciendo un poquito 🪴",
  "¡Qué rica masa me estoy volviendo! 🥚",
  "Siento el calorcito del sol ☀️",
  "Ya casi soy una tortilla 🌽",
  "¡Empiezo a dorarme! 🔥",
  "Más dorada... qué bien huelo 😋",
  "Ya casi lista... ✨",
  "¡Estoy perfecta! 🥇",
  "¡Torti completa y feliz! 💛",
  "Gracias por cuidarme todos estos días 💫"
];

// Cargar o iniciar etapa
let etapa = parseInt(localStorage.getItem("tortiEtapa")) || 1;
const maxEtapas = 5;

// Elementos del DOM
const tortiImg = document.getElementById("torti-img");
const tortiTexto = document.getElementById("torti-texto");
const botones = document.querySelectorAll(".acciones button");

// Actualiza la imagen y el texto
function actualizarTorti() {
  tortiImg.src = `assets/etapa${etapa}.gif`;
  tortiTexto.textContent = frases[etapa - 1];
  localStorage.setItem("tortiEtapa", etapa);

  // Pequeña animación de "crecimiento"
  tortiImg.classList.add("creciendo");
  setTimeout(() => tortiImg.classList.remove("creciendo"), 500);
}

// Cada botón hace avanzar una etapa
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    if (etapa < maxEtapas) {
      etapa++;
      actualizarTorti();
    } else {
      tortiTexto.textContent = "¡Ya soy la Torti más dorada y feliz! 🌞";
    }
  });
});

// Cargar estado inicial
actualizarTorti();
