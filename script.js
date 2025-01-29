document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials for demonstration purposes
    const credentials = {
        'ahmed': { password: 'ahmed123', name: 'Ahmed Ali' },
        'sami': { password: 'sami123', name: 'Sami Ibrahim' }
    };

    // Check if the entered username and password match the dummy credentials
    if (credentials[username] && credentials[username].password === password) {
        // Store the username and name in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('name', credentials[username].name);

        // Redirect to the welcome page
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password!');
    }
});