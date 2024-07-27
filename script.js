
    document.addEventListener('DOMContentLoaded', function() {
        var navbar = document.getElementById('navbar');
        
        function updateNavbar() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                navbar.classList.remove('transparent');
            } else {
                navbar.classList.remove('scrolled');
                navbar.classList.add('transparent');
            }
        }

        // Initial check
        updateNavbar();
        
        // Update on scroll
        window.addEventListener('scroll', updateNavbar);
    });

