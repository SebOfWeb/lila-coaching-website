// Animation script for Lila Coaching website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    initScrollAnimations();
    
    // Add parallax effect to hero section
    initParallaxEffect();
    
    // Add scroll-triggered animations to sections
    addScrollTriggeredAnimations();
    
    // Initialize about section animations
    initAboutSectionAnimations();
});

// Function to initialize about section animations
function initAboutSectionAnimations() {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        const aboutText = aboutSection.querySelector('.about-text');
        const aboutImage = aboutSection.querySelector('.about-image');
        
        if (aboutText) {
            aboutText.classList.add('animate-on-scroll');
            aboutText.style.opacity = '1';
            aboutText.style.transform = 'none';
        }
        
        if (aboutImage) {
            aboutImage.classList.add('animate-on-scroll');
            aboutImage.style.opacity = '1';
            aboutImage.style.transform = 'none';
        }
    }
}

// Function to initialize scroll animations
function initScrollAnimations() {
    // Get all elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If it's a staggered animation container, handle children
                if (entry.target.classList.contains('stagger-container')) {
                    const children = entry.target.querySelectorAll('.stagger-item');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, 100 * index);
                    });
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
        // Make sure elements are visible by default
        element.style.opacity = '1';
        element.style.transform = 'none';
    });
}

// Function to initialize parallax effect
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            // Move the background at a slower rate than the scroll
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }
}

// Function to add scroll-triggered animations to sections
function addScrollTriggeredAnimations() {
    // Add animation classes to elements
    addAnimationClasses();
    
    // Handle section transitions
    handleSectionTransitions();
}

// Function to add animation classes to elements
function addAnimationClasses() {
    // About section animations - basic version
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.classList.add('animate-on-scroll');
    }
    
    // Programs section animations
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.classList.add('animate-on-scroll', 'from-bottom');
    });
    
    // Testimonials section animations
    const testimonialSection = document.querySelector('.testimonials-section');
    if (testimonialSection) {
        testimonialSection.classList.add('stagger-container');
        
        const testimonialCards = testimonialSection.querySelectorAll('.testimonial-card');
        testimonialCards.forEach(card => {
            card.classList.add('stagger-item');
        });
    }
    
    // Blog section animations
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.classList.add('animate-on-scroll', 'zoom-in');
    });
    
    // FAQ section animations
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.classList.add('animate-on-scroll', 'from-right');
    });
    
    // Contact section animations
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    
    if (contactInfo) contactInfo.classList.add('animate-on-scroll', 'from-left');
    if (contactForm) contactForm.classList.add('animate-on-scroll', 'from-right');
    
    // Consultation section animations
    const consultationContent = document.querySelector('.consultation-content');
    if (consultationContent) {
        consultationContent.classList.add('animate-on-scroll', 'zoom-in');
    }
}

// Function to handle section transitions
function handleSectionTransitions() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.classList.add('page-transition');
    });
    
    // Add scroll event listener to handle transitions
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
                section.classList.add('fade-in');
            }
        });
    });
}

// Trigger initial animations
window.addEventListener('load', () => {
    // Add animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.classList.add('fade-in');
        }, 300);
    }
    
    // Trigger scroll event to initialize animations for visible elements
    window.dispatchEvent(new Event('scroll'));
});
