// Toggle Background Color
let isDark = false;
function toggleBackgroundColor() {
  if (isDark) {
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = 'lightblue';
  }
  isDark = !isDark;
}

// Slider Real-Time Feedback
function updateTextSize() {
  const fontSize = document.getElementById('font-size-slider').value;
  document.getElementById('font-size-value').textContent = `${fontSize}px`;
  document.body.style.fontSize = `${fontSize}px`;
}

// Modal
function showModal() {
  document.getElementById('modal').style.display = 'flex';
}

function hideModal() {
  document.getElementById('modal').style.display = 'none';
}

// Form Validation
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let isValid = true;

  // Validate Name
  const name = document.getElementById('name').value;
  if (name.length < 3) {
    document.getElementById('nameError').textContent = 'Name must be at least 3 characters.';
    isValid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Validate Email
  const email = document.getElementById('email').value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Validate Password
  const password = document.getElementById('password').value;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById('passwordError').textContent = 'Password must be at least 8 characters, with 1 uppercase letter and 1 number.';
    isValid = false;
  } else {
    document.getElementById('passwordError').textContent = '';
  }

  if (isValid) {
    alert('Form submitted successfully!');
  }
});

// Bonus: Dropdown with Custom Message
function showCustomMessage() {
  const selectedOption = document.getElementById('dropdown').value;
  const customMessage = document.getElementById('customMessage');
  if (selectedOption) {
    customMessage.textContent = `You selected: ${selectedOption}`;
  } else {
    customMessage.textContent = '';
  }
}
