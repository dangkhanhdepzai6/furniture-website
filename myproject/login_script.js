const auth = firebase.auth();

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (!email || !password) {
        alert('Please enter both email and password');
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Logged in user:', user);
            window.location.href = 'index.html'; 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Login failed: ${errorMessage}`);
        });
});

document.querySelector('.social-btn.google').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            alert(`Google login failed: ${error.message}`);
        });
});

document.querySelector('.social-btn.facebook').addEventListener('click', () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            alert(`Facebook login failed: ${error.message}`);
        });
});
