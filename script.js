document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Fade-in Effect on Scroll ---
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.3, // Item appears when 30% visible
        rootMargin: "0px 0px -50px 0px" // Start loading a bit before it enters the viewport
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // --- Add touch support for the 3D cards on mobile ---
    const cards = document.querySelectorAll('.room-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // This is a simple toggle. You might want more complex logic
            // depending on desired user experience (e.g., only on mobile).
            card.querySelector('.card-inner').style.transform = 
                card.querySelector('.card-inner').style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
        });
    });

});