/**
 * Main JavaScript for Developer Portfolio
 * Author: Your Name
 * Description: Handles animations, form submission, and other interactive elements
 */

// Set current year in footer
document.getElementById('currentYear').innerText = new Date().getFullYear();

// Initialize animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
        
        // Animate elements when they come into view
        animateOnScroll();
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initialize animations on page load
    animateOnScroll();
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message (in a real app, this would happen after successful API response)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add animation to progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

// Function to animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85;
        
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

// Add animation classes to elements as they come into view
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to section titles and dividers
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const title = section.querySelector('.section-title');
        const divider = section.querySelector('.section-divider');
        
        if (title) title.classList.add('animate-on-scroll');
        if (divider) divider.classList.add('animate-on-scroll');
    });
    
    // Add animation to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add animation to certification cards
    const certCards = document.querySelectorAll('.certification-card');
    certCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add animation to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Initialize animations
    animateOnScroll();
});

// Toggle mobile navigation menu when clicked
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');
    
    // Close the mobile menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) { // Bootstrap lg breakpoint
                // Using Bootstrap's collapse API to hide the menu
                const bsCollapse = new bootstrap.Collapse(navbarNav, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
});
