from flask import Blueprint, request, jsonify
from ..models import db, Conversations, User
from flask_login import login_required, current_user

bp = Blueprint('conversations', __name__)

@bp.route('/conversations', methods=['GET', 'POST'])
def conversations():
    # Conversations logic here
    pass

@bp.route('/conversations', methods=['GET'])
@login_required
def get_conversations():
    conversations = Conversation.query.filter_by(user_id=current_user.id).all()
    return jsonify([{'id': conv.id, 'message': conv.message, 'timestamp': conv.timestamp} for conv in conversations])

@bp.route('/conversations', methods=['POST'])
@login_required
def send_message():
    data = request.json
    new_message = Conversation(user_id=current_user.id, message=data['message'])
    db.session.add(new_message)
    db.session.commit()
    return jsonify({'id': new_message.id, 'message': new_message.message, 'timestamp': new_message.timestamp}), 201

@bp.route('/conversations/<int:conversation_id>', methods=['DELETE'])
@login_required
def delete_conversation(conversation_id):
    conversation = Conversation.query.get_or_404(conversation_id)
    if conversation.user_id != current_user.id:
        return jsonify({'error': 'Unauthorized'}), 403
    db.session.delete(conversation)
    db.session.commit()
    return jsonify({'message': 'Conversation deleted'}), 204