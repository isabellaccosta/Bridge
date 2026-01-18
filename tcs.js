document.addEventListener('DOMContentLoaded', () => {
    const diamond = document.querySelector('.logo-diamond');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Efeito de movimento suave no logo ao mexer o mouse
    window.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 30;
        let y = (window.innerHeight / 2 - e.pageY) / 30;
        diamond.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });

    // Revelação das imagens da galeria ao dar scroll
    const revealOnScroll = () => {
        galleryItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < window.innerHeight - 50) {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }
        });
    };

    // Estilização inicial para animação
    galleryItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all 0.8s ease-out";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger inicial
});