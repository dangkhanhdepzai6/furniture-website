const authModal = document.getElementById('auth-modal');
const closeAuthModal = document.querySelector('.close-auth-modal');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginTab = document.querySelector('[data-tab="login"]');
const signupTab = document.querySelector('[data-tab="signup"]');
const toggleToSignup = document.getElementById('toggle-to-signup');
const toggleToLogin = document.getElementById('toggle-to-login');
const loginBtn = document.createElement('button'); 
const forms = document.querySelectorAll('.auth-form');

loginBtn.textContent = 'Login';
loginBtn.className = 'login-btn';
document.querySelector('.navbar .container').appendChild(loginBtn);

loginBtn.addEventListener('click', () => {
  authModal.style.display = 'block';
  showForm('login');
});

closeAuthModal.addEventListener('click', () => {
  authModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === authModal) {
    authModal.style.display = 'none';
  }
});

function showForm(formType) {
  forms.forEach(form => form.classList.remove('active'));
  document.getElementById(`${formType}-form`).classList.add('active');
  
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.tab === formType) {
      tab.classList.add('active');
    }
  });

  if (formType === 'login') {
    document.querySelectorAll('.auth-toggle').forEach(el => {
      el.style.display = 'none';
    });
    document.querySelector('#toggle-to-signup').parentElement.style.display = 'block';
  } else {
    document.querySelectorAll('.auth-toggle').forEach(el => {
      el.style.display = 'none';
    });
    document.querySelector('#toggle-to-login').parentElement.style.display = 'block';
  }
}

loginTab.addEventListener('click', () => showForm('login'));
signupTab.addEventListener('click', () => showForm('signup'));

toggleToSignup.addEventListener('click', () => showForm('signup'));
toggleToLogin.addEventListener('click', () => showForm('login'));

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  console.log('Login with:', email, password);
  
  authModal.style.display = 'none';
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;
  
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  
  console.log('Signup with:', name, email, password);
  
  authModal.style.display = 'none';
});
