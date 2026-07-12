import React, { useState } from 'react';
import './components.css';

export default function CommentSection() {
  const [comments, setComments] = useState([
    { id: 1, author: 'Иван Петров', text: 'Отличный контент, все разложено по полочкам!' },
    { id: 2, author: 'Elena_R', text: 'Дизайн плеера выглядит очень стильно.' }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    setComments([
      ...comments,
      { id: Date.now(), author: 'Вы (Гость)', text: newComment }
    ]);
    setNewComment('');
  };

  return (
    <div className="comments-container">
      <h3 className="comments-count">Комментарии ({comments.length})</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <input 
          type="text" 
          placeholder="Оставьте комментарий..." 
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Отправить</button>
      </form>
      <div className="comments-list">
        {comments.map(c => (
          <div key={c.id} className="comment-item">
            <div className="comment-avatar">{c.author.charAt(0)}</div>
            <div className="comment-body">
              <h4 className="comment-author">{c.author}</h4>
              <p className="comment-text">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
