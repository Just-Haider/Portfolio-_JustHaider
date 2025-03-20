
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



document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');

    const observer4 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              
                entry.target.classList.add('visible');


                const progressBar = entry.target.querySelector('.skill-progress');
                const progressValue = progressBar.getAttribute('data-progress');
                progressBar.style.width = progressValue + '%';

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillCards.forEach(card => {
        observer4.observe(card);
    });
});




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




document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card1, .project-card2, .project-card3');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 }); 

    projectCards.forEach(card => {
        observer.observe(card);
    });
});


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

const skillsSection = document.querySelector('.skills');
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer2.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer2.observe(skillsSection);



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



window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollTop / scrollHeight;

    const hue = 180 + (270 - 180) * scrollPercent;

    document.documentElement.style.setProperty('--scroll-thumb-color', `hsl(${hue}, 100%, 50%)`);
});



const contactForm = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message"); 

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userName = contactForm.elements["user_name"].value;
    const userEmail = contactForm.elements["user_email"].value;
    const userMessage = contactForm.elements["message"].value;


    if (!validateEmail(userEmail)) {
        showMessage("Please enter a valid email address", "error");
        return;
    }


    contactForm.elements["message"].value =
        "Name: " + userName + "\nEmail: " + userEmail + "\nMessage: " + userMessage;


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


function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = type === "success" ? "message success" : "message error";
    messageBox.style.opacity = "1";

    // Hide the message after 3 seconds
    setTimeout(() => {
        messageBox.style.opacity = "0";
    }, 3000);
}

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
        "value": ["#a8dadc", "#457b9d", "#1d3557"] 
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


class ReviewSystem {
    constructor() {
        this.reviews = [];
        this.container = document.getElementById('reviews-container');
        this.userId = this.getOrCreateUserId(); 
        this.setupReviewForm();
    }

    getOrCreateUserId() {
        let userId = localStorage.getItem('userId');
        if (!userId) {
            userId = 'user-' + Math.random().toString(36).substr(2, 9); 
            localStorage.setItem('userId', userId);
        }
        return userId;
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
                date: new Date(),
                userId: this.userId
            });

            form.reset();
        });

        reviewSection.querySelector('.container').insertBefore(form, this.container);
    }

    addReview(review) {
        this.reviews.push(review);
        this.saveReviews();
        this.displayReviews();
    }

    createReviewElement(review, index) {
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

        
        if (review.userId === this.userId) {
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerText = '🗑 Delete';
            deleteBtn.addEventListener('click', () => this.deleteReview(index));
            reviewElement.appendChild(deleteBtn);
        }

        return reviewElement;
    }

    displayReviews() {
        this.container.innerHTML = '';
        this.reviews.forEach((review, index) => {
            this.container.appendChild(this.createReviewElement(review, index));
        });
    }

    deleteReview(index) {
        this.reviews.splice(index, 1); 
        this.saveReviews();
        this.displayReviews(); 
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


const reviewSystem = new ReviewSystem();
reviewSystem.loadReviews();
