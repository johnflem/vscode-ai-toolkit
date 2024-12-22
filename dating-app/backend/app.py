from flask import Flask, send_from_directory
from .config import Config
from .extensions import db

app = Flask(__name__, static_folder='../frontend', template_folder='../frontend')
app.config.from_object(Config)
db.init_app(app)

from .routes import auth, preferences, matches, conversations, history

app.register_blueprint(auth.bp)
app.register_blueprint(preferences.bp)
app.register_blueprint(matches.bp)
app.register_blueprint(conversations.bp)
app.register_blueprint(history.bp)

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    if path.startswith(('css/', 'js/', 'images/')):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)