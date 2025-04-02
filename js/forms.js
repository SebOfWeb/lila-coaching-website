// FAQ functionality
function toggleFAQ(element) {
    // Toggle active class on the question
    element.classList.toggle('active');
    
    // Toggle active class on the answer
    const answer = element.nextElementSibling;
    answer.classList.toggle('active');
    
    // Update icon
    const icon = element.querySelector('i');
    if (icon.classList.contains('fa-chevron-down')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

// Form validation for contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Reset error states
            removeErrorState(name);
            removeErrorState(email);
            removeErrorState(message);
            
            // Validate name
            if (!name.value.trim()) {
                addErrorState(name, 'Please enter your name');
                isValid = false;
            }
            
            // Validate email
            if (!validateEmail(email.value)) {
                addErrorState(email, 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate message
            if (!message.value.trim()) {
                addErrorState(message, 'Please enter your message');
                isValid = false;
            }
            
            // If valid, show success message (in production would submit to server)
            if (isValid) {
                const formElements = contactForm.elements;
                for (let i = 0; i < formElements.length; i++) {
                    formElements[i].disabled = true;
                }
                
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
                contactForm.appendChild(successMessage);
                
                // In production, would submit form data to server here
                console.log('Form submitted successfully');
            }
        });
    }
    
    // Helper functions for form validation
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function addErrorState(element, message) {
        element.classList.add('error');
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        element.parentNode.appendChild(errorMessage);
    }
    
    function removeErrorState(element) {
        element.classList.remove('error');
        const errorMessage = element.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
});
