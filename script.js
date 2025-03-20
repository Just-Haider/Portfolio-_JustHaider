// Loader 

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1500);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animation on scroll
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeIn 1s ease-out forwards`;
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill').forEach((el) => {
    observer3.observe(el);
});

// Dynamic cursor text effect
const cursor = document.querySelector('.cursor');
const texts = ["Web Developer", "UI-Designer", "Tech Enthusiast", "Minecraft Developer"];
let currentText = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[currentText].length) {
        cursor.previousSibling.textContent += texts[currentText].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        cursor.previousSibling.textContent = texts[currentText].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        currentText = (currentText + 1) % texts.length;
        setTimeout(type, 500);
    }
}

type();




// Animate skill bars
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');

    // Create an Intersection Observer to detect when each skill card enters the viewport.
    const observer4 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the fly-down animation.
                entry.target.classList.add('visible');

                // Animate the progress bar inside this skill card.
                const progressBar = entry.target.querySelector('.skill-progress');
                const progressValue = progressBar.getAttribute('data-progress');
                progressBar.style.width = progressValue + '%';

                // Unobserve the card so the animation only happens once.
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe each skill card.
    skillCards.forEach(card => {
        observer4.observe(card);
    });
});




// Services Section

document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    serviceCards.forEach(card => {
        observer.observe(card);
    });
});


// Project Cards 


document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card1, .project-card2, .project-card3');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // animate only once
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    projectCards.forEach(card => {
        observer.observe(card);
    });
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Intersection Observer for skill bars animation
const skillsSection = document.querySelector('.skills');
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer2.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer2.observe(skillsSection);


// Discord username copy

document.getElementById("discord-username").addEventListener("click", function () {
    const username = this.textContent.trim();
    navigator.clipboard.writeText('_justhaider')
        .then(() => {
            const feedback = document.getElementById("copy-feedback");
            feedback.style.display = "block";
            setTimeout(() => {
                feedback.style.display = "none";
            }, 2000);
        })
        .catch(err => {
            console.error("Could not copy text: ", err);
        });
});



// Custon Scroll Bar
window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollTop / scrollHeight;

    const hue = 180 + (270 - 180) * scrollPercent;

    document.documentElement.style.setProperty('--scroll-thumb-color', `hsl(${hue}, 100%, 50%)`);
});



// Email Setup

const contactForm = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message"); // Message box element

contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Retrieve field values
    const userName = contactForm.elements["user_name"].value;
    const userEmail = contactForm.elements["user_email"].value;
    const userMessage = contactForm.elements["message"].value;

    // Validate email using a regular expression
    if (!validateEmail(userEmail)) {
        showMessage("Please enter a valid email address", "error");
        return;
    }

    // Combine name, email, and original message into one string
    contactForm.elements["message"].value =
        "Name: " + userName + "\nEmail: " + userEmail + "\nMessage: " + userMessage;

    // Send form using EmailJS
    emailjs.sendForm("service_h5qp5lo", "template_2ccn0td", this)
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            showMessage("Message sent successfully!", "success");
            contactForm.reset();
        })
        .catch((error) => {
            console.error("FAILED...", error);
            showMessage("Oops! Something went wrong. Please try again.", "error");
        });
});

// Function to show the message
function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = type === "success" ? "message success" : "message error";
    messageBox.style.opacity = "1";

    // Hide the message after 3 seconds
    setTimeout(() => {
        messageBox.style.opacity = "0";
    }, 3000);
}

// Email validation function using regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#a8dadc", "#457b9d", "#1d3557"]  // Pastel night sky colors
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.6,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 140,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 120,
          "size": 8,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 150,
          "duration": 0.4
        }
      }
    },
    "retina_detect": true
  });







// Review System
class ReviewSystem {
    constructor() {
        this.reviews = [];
        this.container = document.getElementById('reviews-container');
        this.setupReviewForm();
    }

    setupReviewForm() {
        const reviewSection = document.getElementById('reviews');
        const form = document.createElement('form');
        form.className = 'review-form glow-purple';
        form.innerHTML = `
            <h3>Share Your Experience</h3>
            <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your name" required>
            </div>
            <div class="form-group">
                <label for="rating">Rating</label>
                <div class="rating-input">
                    <input type="number" id="rating" min="1" max="5" placeholder="5" required>
                    <span class="rating-hint">★ (1-5 stars)</span>
                </div>
            </div>
            <div class="form-group">
                <label for="review">Your Review</label>
                <textarea id="review" placeholder="Tell us about your experience..." required></textarea>
            </div>
            <button type="submit" class="btn send-msg">Submit Review</button>
        `;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('#name').value;
            const rating = parseInt(form.querySelector('#rating').value);
            const text = form.querySelector('#review').value;

            if (rating < 1 || rating > 5) {
                alert('Please enter a rating between 1 and 5');
                return;
            }

            this.addReview({
                author: name,
                rating: rating,
                text: text,
                date: new Date()
            });

            // Reset form
            form.reset();
        });

        reviewSection.querySelector('.container').insertBefore(form, this.container);
    }

    addReview(review) {
        this.reviews.push(review);
        this.saveReviews();
        this.displayReviews();
    }

    createReviewElement(review) {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-card glow-purple';
        reviewElement.innerHTML = `
            <div class="stars">
                ${Array(5).fill('').map((_, i) => 
                    `<span class="${i < review.rating ? 'filled' : ''}">${i < review.rating ? '★' : '☆'}</span>`
                ).join('')}
            </div>
            <p class="review-text">"${review.text}"</p>
            <p class="review-author">${review.author}</p>
            <span class="review-date">${new Date(review.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</span>
        `;
        return reviewElement;
    }

    displayReviews() {
        this.container.innerHTML = '';
        this.reviews.forEach(review => {
            this.container.appendChild(this.createReviewElement(review));
        });
    }

    saveReviews() {
        localStorage.setItem('reviews', JSON.stringify(this.reviews));
    }

    loadReviews() {
        const saved = localStorage.getItem('reviews');
        if (saved) {
            this.reviews = JSON.parse(saved);
            this.displayReviews();
        }
    }
}

// Initialize Review System
const reviewSystem = new ReviewSystem();
reviewSystem.loadReviews();