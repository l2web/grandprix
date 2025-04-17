// Script para funcionalidade do site da Auto Escola Grand Prix
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
    
    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                answer.classList.add('active');
            } else {
                answer.classList.remove('active');
            }
        });
    });
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de entrada para cards
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.card');
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const triggerBottom = window.innerHeight * 0.8;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
        
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            
            if (itemTop < triggerBottom) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }
        });
    };
    
    // Aplicar estilos iniciais para animação
    const cards = document.querySelectorAll('.card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        if (index % 2 === 0) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Executar animação no carregamento e no scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Verificar se há uma imagem de logo
    const logoImg = document.querySelector('.logo img');
    if (logoImg && logoImg.getAttribute('src') === 'images/logo.png') {
        // Criar logo temporário se a imagem não existir
        logoImg.onerror = function() {
            this.onerror = null;
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1MCIgZmlsbD0iI2ZmY2MwMCIvPjxwYXRoIGQ9Ik0yNSA2NUg3NVY3NUgyNVY2NVoiIGZpbGw9IiNhMzAwMDAiLz48cGF0aCBkPSJNNTAgMjBDMzYuMTkgMjAgMjUgMzEuMTkgMjUgNDVDMjUgNTguODEgMzYuMTkgNzAgNTAgNzBDNjMuODEgNzAgNzUgNTguODEgNzUgNDVDNzUgMzEuMTkgNjMuODEgMjAgNTAgMjBaTTUwIDYwQzQxLjcxNiA2MCAzNSA1My4yODQgMzUgNDVDMzUgMzYuNzE2IDQxLjcxNiAzMCA1MCAzMEM1OC4yODQgMzAgNjUgMzYuNzE2IDY1IDQ1QzY1IDUzLjI4NCA1OC4yODQgNjAgNTAgNjBaIiBmaWxsPSIjYTMwMDAwIi8+PC9zdmc+';
            this.style.borderRadius = '50%';
        };
    }
});
