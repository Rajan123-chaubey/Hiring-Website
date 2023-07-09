// login/registerForm

var registerTab = document.getElementById('registerTab');
var loginTab = document.getElementById('loginTab');
var registerForm = document.getElementById('registerForm');
var loginForm = document.getElementById('loginForm');
var errorMessage = document.getElementById('error-message');

registerTab.addEventListener('click', function() {
  registerTab.classList.add('active');
  loginTab.classList.remove('active');
  registerForm.style.display = 'block';
  loginForm.style.display = 'none';
});

loginTab.addEventListener('click', function() {
  loginTab.classList.add('active');
  registerTab.classList.remove('active');
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
});

document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Perform registration
  // Here you can add your logic to store the user's registration details

  alert('Registration successful!');

  // Reset the form
  document.getElementById('register-form').reset();
});

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  // Perform login
  // Here you can add your logic to authenticate the user's credentials

  if (email === 'user@example.com' && password === 'password') {
    // Successful login
    alert('Login successful!');
  } else {
    // Invalid credentials
    errorMessage.textContent = 'Invalid email or password';
  }

  // Reset the form
  document.getElementById('login-form').reset();
});

  