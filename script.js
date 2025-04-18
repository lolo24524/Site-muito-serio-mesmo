document.addEventListener("DOMContentLoaded", () => {
  const botaoZoeira = document.getElementById("botaoZoeira");
  const modoSecreto = document.getElementById("modoSecreto");
  const gato = document.getElementById("gato");

  botaoZoeira.addEventListener("click", () => {
    alert("Eu disse pra NÃO clicar! Agora você liberou o GATO FANTASMA 😼");
    gato.style.bottom = "20px";
    gato.style.right = "20px";
    const audio = new Audio("https://www.myinstants.com/media/sounds/vish.mp3");
    audio.play();
  });

  modoSecreto.addEventListener("click", () => {
    document.body.style.background = "black";
    document.body.style.color = "lime";
    document.getElementById("titulo").innerText = "🌌 BEM-VINDO AO MODO HACKER 3000 🌌";
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
    }
  });

  // Mensagem escondida no console 🕵️
  console.log("👀 Opa, curioso(a)? Você achou o console secreto do site! 🎉");
});
