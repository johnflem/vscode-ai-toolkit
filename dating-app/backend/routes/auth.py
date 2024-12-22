from flask import Blueprint, request, jsonify
from ..models import User
from ..extensions import db

bp = Blueprint('auth', __name__)

@bp.route('/login', methods=['POST'])
def login():
    # Login logic here
    pass

@bp.route('/register', methods=['POST'])
def register():
    # Registration logic here
    pass