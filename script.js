document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       THEME MANAGEMENT (DARK / LIGHT MODE)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage for theme preference, default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    }
    
    // Toggle theme click listener
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('portfolio-theme', 'dark');
        }
    });

    /* ==========================================================================
       MOBILE MENU DRAWER
       ========================================================================== */
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    function toggleMobileMenu() {
        mobileNav.classList.toggle('open');
        const isOpen = mobileNav.classList.contains('open');
        mobileMenuToggle.innerHTML = isOpen 
            ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>`;
    }

    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Close drawer when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('open')) {
                toggleMobileMenu();
            }
        });
    });

    // Close drawer when resizing screen above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
            toggleMobileMenu();
        }
    });


    /* ==========================================================================
       CONTACT FORM SUBMIT (SECURE MOCK SIMULATION)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('name').value.trim();
            const emailInput = document.getElementById('email').value.trim();
            const messageInput = document.getElementById('message').value.trim();
            
            // Basic UI loading status
            formStatus.textContent = "Sending message securely...";
            formStatus.className = "form-status-message"; // Reset classes
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            
            // Mock network latency for feedback quality
            setTimeout(() => {
                // Clear form inputs
                contactForm.reset();
                submitBtn.disabled = false;
                
                // Show success feedback - completely secure, client-side only
                formStatus.textContent = `Thanks, ${nameInput}! Your message was simulated successfully and details are kept secure.`;
                formStatus.classList.add('success');
                
                // Reset status text after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = "";
                    formStatus.className = "form-status-message";
                }, 5000);
                
            }, 1200);
        });
    }
});
