from flask import Blueprint, request, jsonify
from ..models import History, User
from ..extensions import db

bp = Blueprint('history', __name__)

@bp.route('/history', methods=['GET'])
def history():
    # History logic here
    pass

@bp.route('/history/<int:user_id>', methods=['GET'])
def get_history(user_id):
    user_history = History.query.filter_by(user_id=user_id).all()
    return jsonify([h.serialize() for h in user_history]), 200

@bp.route('/history', methods=['POST'])
def add_history():
    data = request.get_json()
    new_history = History(user_id=data['user_id'], action=data['action'], timestamp=data['timestamp'])
    db.session.add(new_history)
    db.session.commit()
    return jsonify(new_history.serialize()), 201

@bp.route('/history/<int:history_id>', methods=['DELETE'])
def delete_history(history_id):
    history_entry = History.query.get_or_404(history_id)
    db.session.delete(history_entry)
    db.session.commit()
    return jsonify({'message': 'History entry deleted'}), 200