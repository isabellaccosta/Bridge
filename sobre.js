// Animação de Scroll Suave
const observerOptions = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.case-card, .metric-box').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

// Adiciona classe de visibilidade via JS
document.addEventListener('scroll', () => {
    document.querySelectorAll('.visible').forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});

// Efeito de Parallax nas fotos Polaroid
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    
    document.querySelector('.p1').style.transform = `rotate(15deg) translate(${x}px, ${y}px)`;
    document.querySelector('.p2').style.transform = `rotate(-10deg) translate(${-x}px, ${-y}px)`;
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

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

