/* ================= MENU (APP DRAWER) ================= */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');
const body = document.body;

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  body.classList.toggle('menu-open');
});

/* Fecha o menu ao clicar em um link */
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

/* ================= SCROLL FADE ================= */
const faders = document.querySelectorAll('.fade');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  faders.forEach(el => observer.observe(el));
}

/* ================= TOUCH FE demonstrate APP FEEL ================= */
let startY = 0;

document.addEventListener('touchstart', e => {
  startY = e.touches[0].clientY;
});

document.addEventListener('touchend', e => {
  const endY = e.changedTouches[0].clientY;
  const diff = startY - endY;

  /* swipe up -> fecha menu (comportamento app) */
  if (diff > 80 && nav.classList.contains('active')) {
    nav.classList.remove('active');
    body.classList.remove('menu-open');
  }
});

/* ================= PREVENT BACKGROUND SCROLL WHEN MENU OPEN ================= */
const style = document.createElement('style');
style.innerHTML = `
  body.menu-open {
    overflow: hidden;
    touch-action: none;
  }
`;
document.head.appendChild(style);

/* ================= PAGE TRANSITION (APP FEEL) ================= */
document.querySelectorAll('a[href]').forEach(link => {
  const url = link.getAttribute('href');

  if (url && !url.startsWith('#') && !url.startsWith('http')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = url;
      }, 200);
    });
  }
});

/* ================= SAFE INIT ================= */
console.log('Bridge app JS loaded');
/* MANIFESTO – DESKTOP + MOBILE */
const manifestoBox = document.querySelector('.manifesto-box');

if(manifestoBox){
  manifestoBox.addEventListener('click', ()=>{
    manifestoBox.classList.toggle('active');
  });
}

console.log('Bridge OK');

/* SCRIPT CHATBOX */
    function toggleChat() {
        const chatForm = document.getElementById("chatForm");
        const openBtn = document.querySelector(".open-button"); // Seleciona o botão da imagem

        if (chatForm.style.display === "block") {
            // Se o chat está aberto, vamos fechar
            chatForm.style.display = "none";
            openBtn.classList.remove("hiddenLupi"); // Mostra a imagem novamente
        } else {
            // Se o chat está fechado, vamos abrir
            chatForm.style.display = "block";
            openBtn.classList.add("hiddenLupi"); // Esconde a imagem
        }
    }

    function sendPredefined(topic) {
        const history = document.getElementById("chatHistory");
        
        // Adiciona a mensagem do usuário
        history.innerHTML += `<div class="message user-msg">${topic}</div>`;
        
        // Resposta automática baseada no tópico
        let botResponse = "";
        switch(topic) {
            case 'Contato': botResponse = "Entre em contato com o e-mail RedeLupas@gmail.com"; break;
            case 'Redes sociais': botResponse = "Entre no nosso <a href='https://instagram.com/redelupa' target='_blank' style='color: blue; text-decoration: underline;'>Instagram</a> e no <a href='https://tiktok.com/@rede.lupa' target='_blank' style='color: blue; text-decoration: underline;'>TikTok</a>! para ver nossos vídeos e ficar por dentro do projeto!"; break;
            case 'Quem somos nós?': botResponse = "Nós somos uma equipe de estudantes que quer criar um futuro melhor por meio da transformação. Veja mais sobre cada membro clicando em <a href='sobre.html' target='_blank' style='color: blue; text-decoration: underline;'>Equipe</a>"; break;

        }
        
        // Adiciona resposta do bot
        setTimeout(() => {
            history.innerHTML += `<div class="message bot-msg">${botResponse}</div>`;
            history.scrollTop = history.scrollHeight; // Scroll automático para baixo
        }, 500);
    }
