// Animated app.js with micro-interactions, scroll animations, and particle effects
const btn = document.querySelector('.btn');

// Animation on button hover
btn.addEventListener('mouseenter', () => {
    btn.classList.add('animate');
});

btn.addEventListener('mouseleave', () => {
    btn.classList.remove('animate');
});

// Scroll animations
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

// Particle effects (pseudo code)
// Initialize particle.js or a similar library here

// Drag and Drop functionality
const dragItems = document.querySelectorAll('.draggable');

// Implement drag functionality
// Given that full functionality requires structure, only the setup is included

// Animated counters
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// Modern UI feedback mechanisms (pseudo code)
// Implement UI feedback such as loading spinners and success messages here
