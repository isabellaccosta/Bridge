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