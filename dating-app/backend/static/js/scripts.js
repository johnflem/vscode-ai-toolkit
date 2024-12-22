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
            fetch('/login', {
                method: 'POST',
                body: formData
            }).then(response => response.json())
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
            fetch('/register', {
                method: 'POST',
                body: formData
            }).then(response => response.json())
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
            fetch('/preferences', {
                method: 'POST',
                body: formData
            }).then(response => response.json())
              .then(data => {
                  if (data.success) {
                      alert('Preferences updated successfully!');
                  } else {
                      alert(data.message);
                  }
              });
        });
    }

    if (matchesContainer) {
        fetch('/matches')
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
        fetch('/conversations')
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
        fetch('/history')
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