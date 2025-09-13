// script.js
document.addEventListener('DOMContentLoaded', () => {
  const loginLink = document.getElementById('login-link');
  const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
  
  loginLink.addEventListener('click', () => {
    loginModal.show();
  });
});