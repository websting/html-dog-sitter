import './style.css'
import '@tailwindplus/elements';
    
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

      // Dropdown functionality
      const dropdownBtn = document.getElementById("dropdownBtn");
      const dropdownMenu = document.getElementById("dropdownMenu");
      const dropdown = document.getElementById("dropdown");
      const items = document.querySelectorAll(".dropdown-item");

      // Function to open dropdown
      function openDropdown() {
        dropdownMenu.classList.remove("opacity-0", "scale-95", "pointer-events-none");
        dropdownMenu.classList.add("opacity-100", "scale-100");
      }

      // Function to close dropdown
      function closeDropdown() {
        dropdownMenu.classList.add("opacity-0", "scale-95", "pointer-events-none");
        dropdownMenu.classList.remove("opacity-100", "scale-100");
      }

      // Toggle dropdown
      dropdownBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (dropdownMenu.classList.contains("opacity-0")) {
          openDropdown();
        } else {
          closeDropdown();
        }
      });

      // Close when clicking outside
      document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
          closeDropdown();
        }
      });

      // Close when clicking any dropdown item
      items.forEach(item => {
        item.addEventListener("click", () => {
          closeDropdown();
        });
      });
