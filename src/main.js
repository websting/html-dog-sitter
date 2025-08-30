import './style.css'

// JavaScript to toggle the menu
    
      // Toggle the mobile menu
      const hamburgerIcon = document.getElementById('hamburger-icon');
      const mobileMenu = document.getElementById('mobile-menu');
      // Select all links inside the side-nav
      const menuLinks = document.querySelectorAll("#mobile-menu a"); 

      hamburgerIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      // Close the side nav when a link is clicked
      menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add('hidden'); // Close the menu when a link is clicked
        });
        
      });