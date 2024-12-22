# Dating App

This is a dating application built using Flask for the backend and Bootstrap for the frontend. The app allows users to register, log in, set preferences, view matches, and engage in conversations.

## Features

- User Authentication: Register and log in to the application.
- Preferences: Set and update user preferences for matching.
- Matches: View potential matches based on preferences.
- Conversations: Send and receive messages with matches.
- History: View interaction history including matches and conversations.

## Technologies Used

- **Backend**: Python, Flask, SQLite
- **Frontend**: HTML, CSS (Bootstrap), JavaScript

## Project Structure

```
dating-app
├── backend
│   ├── app.py
│   ├── models.py
│   ├── routes
│   │   ├── auth.py
│   │   ├── preferences.py
│   │   ├── matches.py
│   │   ├── conversations.py
│   │   └── history.py
│   ├── static
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── js
│   │   │   └── scripts.js
│   │   └── images
│   ├── templates
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── preferences.html
│   │   ├── matches.html
│   │   ├── conversations.html
│   │   └── history.html
│   ├── instance
│   │   └── app.db
│   ├── config.py
│   └── requirements.txt
├── frontend
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── preferences.html
│   ├── matches.html
│   ├── conversations.html
│   ├── history.html
│   ├── css
│   │   └── styles.css
│   └── js
│       └── scripts.js
└── README.md
```

## Setup Instructions

### Prerequisites

- Python 3.8 or higher
- Flask
- SQLite

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/dating-app.git
    cd dating-app
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```bash
    pip install -r backend/requirements.txt
    ```

4. Initialize the SQLite database:
    ```bash
    flask db init
    flask db migrate -m "Initial migration."
    flask db upgrade
    ```

### Running the Application

1. Start the Flask application:
    ```bash
    python -m backend.app
    ```

2. Open your web browser and navigate to `http://localhost:5000`.

### Running in Codespaces

1. Open the repository in GitHub Codespaces.
2. Ensure the virtual environment is activated:
    ```bash
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
3. Install the required packages:
    ```bash
    pip install -r backend/requirements.txt
    ```
4. Start the Flask application:
    ```bash
    python -m backend.app
    ```
5. Open the forwarded port to access the application.

## Usage

- Navigate to `http://localhost:5000` to access the application.
- Use the navigation links to access different sections of the app (Login, Register, Preferences, Matches, Conversations, History).

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.