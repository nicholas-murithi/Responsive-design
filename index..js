function toggleMenu() {
  document.querySelector('.nav-left').classList.toggle('show');
  document.querySelector('.nav-right').classList.toggle('show');
}
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.toggle-icon');

  question.addEventListener('click', () => {
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
    icon.textContent = isVisible ? '+' : '−';
  });
});

function sendMessage(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent successfully.`);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

function findSupport() {
  alert("Redirecting to contact section...");
  document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
}
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.testimonial-nav button:first-child');
const nextBtn = document.querySelector('.testimonial-nav button:last-child');

let currentIndex = 0;

function showTestimonial(index) {
testimonials.forEach((testimonial, i) => {
  testimonial.style.display = i === index ? 'block' : 'none';
});
}

prevBtn.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % testimonials.length;
showTestimonial(currentIndex);
});


showTestimonial(currentIndex);