// FEATURE 1: Toggle "Read More" button
function toggleDetails() {
    const details = document.getElementById('details');
    details.classList.toggle('hidden');
}

// FEATURE 2: Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '') {
        alert('Please enter your name');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email');
        return;
    }

    if (message.trim().length < 5) {
        alert('Message must be at least 5 characters');
        return;
    }

    // Show success message
    document.getElementById('formMsg').classList.remove('hidden');
    this.reset();

    setTimeout(() => {
        document.getElementById('formMsg').classList.add('hidden');
    }, 3000);
});

// FEATURE 3: Animate skill bars on hover
document.querySelectorAll('.progress').forEach(bar => {
    bar.parentElement.addEventListener('mouseenter', function() {
        const width = this.querySelector('.progress').style.width;
        this.querySelector('.progress').style.width = '0%';
        setTimeout(() => {
            this.querySelector('.progress').style.width = width;
        }, 10);
    });
});

console.log('JavaScript features loaded');
