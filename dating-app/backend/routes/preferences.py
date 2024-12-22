from flask import Blueprint, request, jsonify
from ..models import User
from ..extensions import db

bp = Blueprint('preferences', __name__)

@bp.route('/preferences', methods=['GET', 'POST'])
def preferences():
    # Preferences logic here
    pass