const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list ul');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
});
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    navList.classList.remove('show'); 
  });
});
const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
const contactForm = document.querySelector('.contact-form');
const emailInput = document.querySelector('#email');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  if (!validateEmail(emailValue)) {
    alert('Please enter a valid email address.');
  } else {
    alert('Form submitted successfully!');
    contactForm.reset(); 
  }
});

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
