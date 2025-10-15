document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    feedback.textContent = '';
    feedback.style.color = '';

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    // Basic validation
    if (!name || !email || !message) {
      feedback.textContent = 'Please fill out all required fields.';
      feedback.style.color = 'red';
      return;
    }

    // Email simple pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.style.color = 'red';
      return;
    }

    // Simulate form submission (replace with real endpoint or service)
    setTimeout(function () {
      feedback.textContent = 'Thanks! Your message was sent successfully.';
      feedback.style.color = 'green';
      form.reset();
    }, 600);
  });
});
