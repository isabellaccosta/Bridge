// ===============================
// INTERATIVIDADE GERAL + HAMBURGER
// ===============================
document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       1. Hover suave nos cards
    ========================= */
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'all 0.3s ease';
            card.style.boxShadow = '0px 10px 20px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    /* =========================
       2. Simulação de navegação
    ========================= */
    const buttons = document.querySelectorAll('button');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Navegando para a seção...');
            // Aqui você pode colocar scroll suave futuramente
        });
    });

    /* =========================
       3. Paralaxe leve no grid
    ========================= */
    const grid = document.querySelector('.grid-background');

    if (grid) {
        window.addEventListener('scroll', () => {
            const offset = window.pageYOffset;
            grid.style.backgroundPositionY = offset * 0.2 + 'px';
        });
    }

    /* =========================
       4. MENU HAMBURGER
    ========================= */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navItems = navLinks ? navLinks.querySelectorAll('a') : [];

    if (hamburger && navLinks) {

        // Abrir / fechar menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

});
