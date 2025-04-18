// script.js — versão TURBO x500

// Efeitos visuais, sons e loucuras ao extremo

document.addEventListener("DOMContentLoaded", () => {
  const botaoZoeira = document.getElementById("botaoZoeira");
  const modoSecreto = document.getElementById("modoSecreto");
  const gato = document.getElementById("gato");

  const emojis = ["🦄", "🔥", "🎉", "👻", "🐸", "🍕", "🤖", "💩", "🧠", "🌈"];

  function spawnEmoji() {
    const emoji = document.createElement("div");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.top = `${Math.random() * 100}%`;
    emoji.style.fontSize = `${Math.random() * 30 + 20}px`;
    emoji.style.zIndex = 9999;
    emoji.style.animation = "float 5s linear infinite";
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
  }

  setInterval(spawnEmoji, 300);

  // Botão zoeiro
  botaoZoeira.addEventListener("click", () => {
    alert("Eu disse pra NÃO clicar! Agora você liberou o GATO FANTASMA 😼");
    gato.style.bottom = "20px";
    gato.style.right = "20px";
    const audio = new Audio("https://www.myinstants.com/media/sounds/vish.mp3");
    audio.play();
    document.body.style.transform = "rotate(1deg)";
    setTimeout(() => document.body.style.transform = "rotate(0deg)", 200);
  });

  // Modo secreto
  modoSecreto.addEventListener("click", () => {
    document.body.style.background = "black";
    document.body.style.color = "lime";
    document.getElementById("titulo").innerText = "🌌 BEM-VINDO AO MODO HACKER 3000 🌌";
    document.body.insertAdjacentHTML("beforeend", `<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' style='position:fixed;width:1px;height:1px;left:-9999px'></iframe>`);
    console.log("🔥 VOCÊ DESBLOQUEOU O MODO SECRETO 🔥");
    alert("Modo Hacker ativado. Pressione ↑ ↑ ↓ ↓ ← → ← → B A!");
  });

  // Konami Code 🕹️
  let input = [];
  const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

  window.addEventListener("keydown", (e) => {
    input.push(e.key);
    if (input.slice(-10).join("") === konami.join("")) {
      alert("🌈 VOCÊ DESBLOQUEOU UM UNIVERSO PARALELO 🌈");
      window.open("https://pointerpointer.com", "_blank");
      document.body.style.transition = "all 0.5s ease";
      document.body.style.background = "radial-gradient(circle, #ff00ff, #00ffff, #ffff00)";
    }
  });

  // Clique em qualquer lugar = surpresa
  document.body.addEventListener("click", () => {
    const audio = new Audio("https://www.myinstants.com/media/sounds/mlg-airhorn.mp3");
    audio.play();
  });

  // Movimento maluco do mouse
  document.addEventListener("mousemove", (e) => {
    document.title = `👀 x: ${e.clientX} | y: ${e.clientY}`;
  });

  // Mensagem escondida no console 🕵️
  console.log("👀 Opa, curioso(a)? Você achou o console secreto do site! 🎉");
  console.log("🚀 Dica: tente clicar 42 vezes...");

  // Easter egg do clique 42x
  let cliqueCount = 0;
  document.body.addEventListener("click", () => {
    cliqueCount++;
    if (cliqueCount === 42) {
      alert("🌌 A resposta para a vida, o universo e tudo mais foi revelada!");
      window.open("https://theuselessweb.com", "_blank");
    }
  });
});
