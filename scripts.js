document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');

    // Form Validation
    const signupForm = document.getElementById('signupForm');
    const formMessage = document.getElementById('formMessage');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        formMessage.textContent = '';

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            formMessage.textContent = 'Please fill out all fields.';
            return;
        }

        if (password !== confirmPassword) {
            formMessage.textContent = 'Passwords do not match.';
            return;
        }

        formMessage.textContent = 'Signup successful!';
        formMessage.style.color = 'green';
    });

    // Interactive Navigation Highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Product Image Zoom on Hover
    const productImages = document.querySelectorAll('.product img');

    productImages.forEach((img) => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.2)';
            img.style.transition = 'transform 0.5s ease';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});
