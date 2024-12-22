function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Load the default page (e.g., login) on initial load
document.addEventListener('DOMContentLoaded', () => {
    loadPage('login.html');
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const preferencesForm = document.getElementById('preferences-form');
    const matchesContainer = document.getElementById('matches-container');
    const conversationsContainer = document.getElementById('conversations-container');
    const historyContainer = document.getElementById('history-container');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(loginForm);
            fetch('/api/login', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/preferences';
                } else {
                    alert(data.message);
                }
            });
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(registerForm);
            fetch('/api/register', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/login';
                } else {
                    alert(data.message);
                }
            });
        });
    }

    if (preferencesForm) {
        preferencesForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(preferencesForm);
            fetch('/api/preferences', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Preferences saved successfully!');
                } else {
                    alert(data.message);
                }
            });
        });
    }

    if (matchesContainer) {
        fetch('/api/matches')
        .then(response => response.json())
        .then(data => {
            data.matches.forEach(match => {
                const matchElement = document.createElement('div');
                matchElement.textContent = match.username;
                matchesContainer.appendChild(matchElement);
            });
        });
    }

    if (conversationsContainer) {
        fetch('/api/conversations')
        .then(response => response.json())
        .then(data => {
            data.conversations.forEach(conversation => {
                const conversationElement = document.createElement('div');
                conversationElement.textContent = conversation.message;
                conversationsContainer.appendChild(conversationElement);
            });
        });
    }

    if (historyContainer) {
        fetch('/api/history')
        .then(response => response.json())
        .then(data => {
            data.history.forEach(item => {
                const historyElement = document.createElement('div');
                historyElement.textContent = item.activity;
                historyContainer.appendChild(historyElement);
            });
        });
    }
});