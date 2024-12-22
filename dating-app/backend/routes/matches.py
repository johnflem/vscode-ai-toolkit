from flask import Blueprint, request, jsonify
from ..models import Matches, User
from ..extensions import db

bp = Blueprint('matches', __name__)

@bp.route('/matches', methods=['GET'])
def get_matches():
    # Logic to get matches
    pass

@bp.route('/matches', methods=['POST'])
def add_match():
    data = request.get_json()
    new_match = Matches(user_id=data['user_id'], matched_user_id=data['matched_user_id'])
    db.session.add(new_match)
    db.session.commit()
    return jsonify(new_match.serialize()), 201

@bp.route('/matches/<int:match_id>', methods=['DELETE'])
def delete_match(match_id):
    match = Matches.query.get_or_404(match_id)
    db.session.delete(match)
    db.session.commit()
    return jsonify({'message': 'Match deleted'}), 200