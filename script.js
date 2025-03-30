document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitButton');
  const form = document.getElementById('registrationForm');

  submitButton.addEventListener('click', function() {
    if(validateForm()) {
      alert('Form submitted successfully!');
      form.reset(); 
    }
  });

  function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const occupation = document.getElementById('occupation').value;

    const numericRegex = /\d/;
    const alphabeticRegex = /[a-zA-Z]/;

    if(firstName.trim() === '' || lastName.trim() === '' || phone.trim() === '' || email.trim() === '' || address.trim() === '' || occupation.trim() === '') {
      alert('Please fill in all required fields.');
      return false;
    }

    if(numericRegex.test(firstName)) {
      alert('First name cannot contain numbers.');
      return false;
    }

    if(numericRegex.test(lastName)) {
      alert('Last name cannot contain numbers.');
      return false;
    }

    if(alphabeticRegex.test(phone)) {
      alert('Phone number cannot contain letters.');
      return false;
    }

    if(!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true; 
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});