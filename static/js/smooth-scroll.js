/**
 * Smooth Scroll JavaScript
 * Author: Your Name
 * Description: Provides smooth scrolling functionality for anchor links
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor links with href starting with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each anchor link
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default behavior
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            
            // Return if href is just "#" (no specific target)
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            // If target element exists, scroll to it smoothly
            if (targetElement) {
                // Get the height of the navbar
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                
                // Calculate the position of the target accounting for the navbar height
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                // Smooth scroll to the target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active navigation item while scrolling
    window.addEventListener('scroll', highlightNavItem);
    
    function highlightNavItem() {
        const scrollPosition = window.scrollY;
        
        // Get all sections
        const sections = document.querySelectorAll('section');
        
        // Loop through each section to find the current one
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for navbar
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            // If the current scroll position is within this section
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to the corresponding nav link
                const correspondingNavLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
        
        // Special case for the hero section when scrolled to the top
        if (scrollPosition < 100) {
            document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Highlight the first nav item if it links to the hero or about section
            const firstNavLink = document.querySelector('.navbar-nav .nav-link');
            if (firstNavLink) {
                firstNavLink.classList.add('active');
            }
        }
    }
    
    // Initialize highlight on page load
    highlightNavItem();
});
