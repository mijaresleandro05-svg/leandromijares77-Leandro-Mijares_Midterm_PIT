// FEATURE 1: Toggle "Read More" button - Make it globally available
function toggleDetails() {
    const details = document.getElementById('details');
    if (details) {
        details.classList.toggle('hidden');
    }
}

// Wait for DOM to be ready before accessing form elements
document.addEventListener('DOMContentLoaded', function() {
    
    // FEATURE 0: Welcome message with visitor name
    let visitorName = localStorage.getItem('visitorName');
    
    if (!visitorName) {
        visitorName = prompt('Welcome! What is your name?');
        if (visitorName && visitorName.trim() !== '') {
            localStorage.setItem('visitorName', visitorName);
        } else {
            visitorName = 'Friend';
        }
    }
    
    const greeting = document.getElementById('greeting');
    if (greeting) {
        greeting.textContent = `Welcome, ${visitorName}! Here's my resume.`;
        greeting.style.fontSize = '1.1rem';
        greeting.style.color = '#3498db';
        greeting.style.fontWeight = 'bold';
        greeting.style.marginBottom = '15px';
    }

    // FEATURE 2: Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
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
    }

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
});

// FEATURE 4: Add new skill functionality - Make it globally available
function addSkill() {
    const skillName = document.getElementById('skillName').value;
    const skillLevel = document.getElementById('skillLevel').value;
    
    if (skillName.trim() === '') {
        alert('Please enter a skill name');
        return;
    }
    
    if (skillLevel === '' || skillLevel < 1 || skillLevel > 100) {
        alert('Please enter a level between 1 and 100');
        return;
    }
    
    // Create new skill element
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';
    skillDiv.innerHTML = `
        <h4>${skillName}</h4>
        <div class="bar"><div class="progress" style="width: ${skillLevel}%"></div></div>
    `;
    
    // Add animation to new skill bars
    skillDiv.querySelector('.progress').parentElement.addEventListener('mouseenter', function() {
        const width = this.querySelector('.progress').style.width;
        this.querySelector('.progress').style.width = '0%';
        setTimeout(() => {
            this.querySelector('.progress').style.width = width;
        }, 10);
    });
    
    // Add to skills list
    document.getElementById('skillsList').appendChild(skillDiv);
    
    // Clear inputs
    document.getElementById('skillName').value = '';
    document.getElementById('skillLevel').value = '';
    
    // Show success
    alert(`Added "${skillName}" skill at ${skillLevel}%!`);
}

console.log('All JavaScript features loaded successfully!');
});

console.log('JavaScript features loaded');
