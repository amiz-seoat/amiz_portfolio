document.getElementById('toggler').addEventListener('click', function() {
  var navLinks = document.getElementById('nav-links');
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
});

const buttonBox = document.querySelector('.button__box');
const buttonText = buttonBox.querySelector('span');

buttonBox.addEventListener('mousemove', (e) => {
const position = buttonBox.getBoundingClientRect();
const x = e.clientX - position.left - position.width / 2;
const y = e.clientY - position.top - position.height / 2;

buttonText.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`; 
});

buttonBox.addEventListener('mouseout', () => {
buttonText.style.transform = `translate(0px, 0px)`;
});

buttonBox.addEventListener('click', () => {
window.location.href = "mailto:yohanzack9@email.com";
});

// IntersectionObserver for scroll animations
document.addEventListener('DOMContentLoaded', () => {
const elements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Optional: Stop observing once the element is visible
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(element => {
  observer.observe(element);
});

// Typing animation
const typeText = (element, text, delay = 100) => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, delay);
};

const typingNameElement = document.getElementById('typing-name');
const typingTitleElement = document.getElementById('typing-title');
const nameText = "Abduselam Mohammednur";
const titleText = "A Software Engineering Student";

typeText(typingNameElement, nameText);
setTimeout(() => {
  typeText(typingTitleElement, titleText);
}, nameText.length * 100 + 500); 
});
