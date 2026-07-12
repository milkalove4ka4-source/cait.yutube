import React from 'react';
import './components.css';

export default function VideoCard({ video, onClick }) {
  return (
    <div className="video-card" onClick={onClick}>
      <div className="thumbnail-container">
        <img src={video.preview} alt={video.title} className="thumbnail" />
        <span className="duration">{video.duration}</span>
      </div>
      <div className="video-info">
        <div className="author-avatar">
          {video.author.charAt(0)}
        </div>
        <div className="video-text">
          <h3 className="video-title">{video.title}</h3>
          <p className="video-author">{video.author}</p>
          <p className="video-stats">{video.views}</p>
        </div>
      </div>
    </div>
  );
}
