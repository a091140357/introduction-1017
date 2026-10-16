document.addEventListener('DOMContentLoaded', () => {
            
            const yearSpan = document.getElementById('current-year');
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }

            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const navLinksContainer = document.getElementById('nav-links');
            const navLinks = document.querySelectorAll('.nav-link');

            if (mobileMenuBtn && navLinksContainer) {
                mobileMenuBtn.addEventListener('click', () => {
                    navLinksContainer.classList.toggle('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (navLinksContainer.classList.contains('active')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });

                navLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        navLinksContainer.classList.remove('active');
                        const icon = mobileMenuBtn.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    });
                });
            }
        });