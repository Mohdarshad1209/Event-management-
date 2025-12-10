// Login Form Handling
    const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Email validation regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        // Mock success login
        alert(`Welcome back! Logged in as ${email}`);
        window.location.href = 'index.html';
    });
}
    // Booking Form Handling
   const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const email = document.getElementById('email').value.trim();  // <-- email added
        const eventType = document.getElementById('eventType').value.trim();
        const date = document.getElementById('date').value.trim();

        // Proper email validation regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate all fields
        if (!firstName || !email || !eventType || !date) {
            alert('Please fill in all required fields.');
            return;
        }

        // Validate email format
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address (e.g. name@example.com).');
            return;
        }

        // Validate name (letters only)
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(firstName)) {
            alert('Please enter a valid first name.');
            return;
        }

        // Validate date (can't be past)
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert('Please choose a date in the future.');
            return;
        }

        // Success
        alert(`Thank you, ${firstName}! We have received your request for a ${eventType} on ${date}. We will email you at ${email}.`);
        bookingForm.reset();
    });
}

