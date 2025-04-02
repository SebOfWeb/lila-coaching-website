// Comparison slider functionality for transformations section
document.addEventListener('DOMContentLoaded', function() {
    // Initialize comparison slider
    initComparisonSliders();
    
    // Add scroll animation for testimonials
    initTestimonialAnimations();
});

// Function to initialize the comparison sliders
function initComparisonSliders() {
    const sliders = document.querySelectorAll('.comparison-slider');
    
    sliders.forEach(slider => {
        const sliderHandle = slider.querySelector('.slider-handle');
        const beforeImage = slider.querySelector('.before-image');
        
        // Set initial position
        updateSliderPosition(slider, sliderHandle, beforeImage, 50);
        
        // Mouse events
        sliderHandle.addEventListener('mousedown', function(e) {
            e.preventDefault();
            document.addEventListener('mousemove', moveSlider);
            document.addEventListener('mouseup', stopMoving);
        });
        
        // Touch events for mobile
        sliderHandle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            document.addEventListener('touchmove', moveSliderTouch);
            document.addEventListener('touchend', stopMoving);
        });
        
        // Click on slider to move handle
        slider.addEventListener('click', function(e) {
            if (e.target !== sliderHandle) {
                const sliderRect = slider.getBoundingClientRect();
                const position = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
                updateSliderPosition(slider, sliderHandle, beforeImage, position);
            }
        });
        
        function moveSlider(e) {
            const sliderRect = slider.getBoundingClientRect();
            let position = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
            position = Math.max(0, Math.min(position, 100));
            updateSliderPosition(slider, sliderHandle, beforeImage, position);
        }
        
        function moveSliderTouch(e) {
            const sliderRect = slider.getBoundingClientRect();
            const touch = e.touches[0];
            let position = ((touch.clientX - sliderRect.left) / sliderRect.width) * 100;
            position = Math.max(0, Math.min(position, 100));
            updateSliderPosition(slider, sliderHandle, beforeImage, position);
        }
        
        function stopMoving() {
            document.removeEventListener('mousemove', moveSlider);
            document.removeEventListener('touchmove', moveSliderTouch);
            document.removeEventListener('mouseup', stopMoving);
            document.removeEventListener('touchend', stopMoving);
        }
    });
}

// Function to update the slider position
function updateSliderPosition(slider, handle, beforeImage, position) {
    handle.style.left = `${position}%`;
    beforeImage.style.clipPath = `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`;
}

// Function to initialize testimonial animations
function initTestimonialAnimations() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    // Add animation classes when scrolled into view
    window.addEventListener('scroll', function() {
        testimonialCards.forEach((card, index) => {
            if (isElementInViewport(card)) {
                // Add staggered animation delay
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, index * 200);
            }
        });
    });
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
}
