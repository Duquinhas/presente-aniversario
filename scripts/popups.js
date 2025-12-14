let popupAtual = null;

const textos={
t1:'Amo o jeito que você é autêntica e se diverte com as situações básicas do dia dia e deixar bem claro que vc fica linda com tudo que você usa.',
t2:'Amo quando vc me manda esse sorriso de orelha a orelha onde o mundo para e parece que nada mais impoorta só ver você feliz.',
t3:'Não poderia deixar faltar uma foto sua de filtro de palhaço, sua marca registrada, pra deixar claro que eu amo seu senso de humor e o quanto você e uma pessoa leve.',
t4:'Esse dia que a gente saiu combinandinho e todo mundo elogiava a gente kkkkk, em que nós nos divertimos sem fazer nada demais , só a nossa companhia já era mais que o suficiente.',
t5:'Essa aqui é só pra mostrar que eu amo tirar foto abraçadinho com você porque eu te amo.',
t6:'Aqui é só pra deixar claro mesmo que você não acredite, que eu já te amava desde pequeninin, só era muito cabaço pra ter qualquer interação básico me sorry.',
carta:'Começar dizendo o primeiro de tudo Feliz aniversário amor , mais um aniversário seu que eu tenho o privilégio de comemorar ao seu lado,agora, preciso dizer em quanto nesses últimos anos você tem sido maravilhosa na minha vida, você é a pessoa que me motiva que me anima que me fortalece a querer sempre mais e sempre o melhor pra nós dois,você me ensiou o que é verdadeiramente o amor e é o sentimento mais bonito que eu já pude sentir, mesmo você passando pelos seus problemas, sempre foi a melhor pessoa do mundo comigo e se preocupou com minha felicidade e bem-estar, que eu possa sempre durante todos os anos que a gente vai ficar juntos , te proporcionar pelo menos metade do que você me faz sentir, somente por existir no mesmo mundo que eu , você é minha alma gemêa e eu vou te amar pra todo sempre. '
};


/* ================= POPUP ================= */
function openPopup(key) {
  popupAtual = key; // guarda qual popup abriu
  document.getElementById("popup-text").innerText = textos[key];
  document.getElementById("popup").style.display = "flex";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";

  // se o popup fechado for o da carta
  if (popupAtual === "carta") {
    document.body.classList.add("fade");
setTimeout(showBigHeart, 300);
  }

  popupAtual = null;
}

/* ================= CARTA ================= */
function openLetter() {
  document.querySelector(".letter").classList.add("open");
  openPopup("carta");
}
function closeLetter(event) {
  event.stopPropagation();
  document.querySelector(".letter").classList.remove("open");
}

/* ================= MÚSICA ================= */
let playing = false;

function toggleMusic() {
  const music = document.getElementById("music");
  const btn = document.getElementById("musicBtn");

  if (!playing) {
    music.play();
    btn.innerText = "⏸ Pausar música";
    playing = true;
  } else {
    music.pause();
    btn.innerText = "🎵 Tocar nossa música";
    playing = false;
  }
  
}

/* ================= CORAÇÕES ================= */
const heartsContainer = document.getElementById("hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.fontSize = 14 + Math.random() * 22 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 500);

function showBigHeart() {
  const bigHeart = document.getElementById("bigHeart");
  bigHeart.classList.remove("hidden");

  // Após 5 segundos, escondemos o coração e iniciamos a explosão
  setTimeout(() => {
    bigHeart.classList.add("hidden");
    explodeHearts();
  }, 5000);  // 5 segundos
}
function explodeHearts() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerText = "❤️";
    heart.style.left = `${50 + Math.random() * 40}vw`;  // Aleatoriza a posição horizontal
    heart.style.top = `${50 + Math.random() * 40}vh`;   // Aleatoriza a posição vertical
    heart.style.position = "absolute";

    // Explosão aleatória de corações
    const angle = Math.random() * 2 * Math.PI;
    const distance = 150 + Math.random() * 200;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    heart.style.transform = `translate(${x}px, ${y}px)`;
    heart.style.transition = "transform 1.5s ease, opacity 1.5s";
    heart.style.opacity = 1;

    document.body.appendChild(heart);

    // Animar o desaparecimento
    setTimeout(() => {
      heart.style.opacity = 0;
    }, 1000);

    setTimeout(() => heart.remove(), 2000);
  }
}