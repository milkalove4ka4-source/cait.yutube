import React from 'react';
import CommentSection from '../components/CommentSection';
import VideoCard from '../components/VideoCard';
import './pages.css';

export default function VideoPage({ video, allVideos, onSelectVideo }) {
  // Фильтруем рекомендации, исключая текущее видео
  const recommendations = allVideos.filter(v => v.id !== video.id);

  return (
    <div className="video-page-layout">
      <div className="video-watch-area">
        <div className="player-wrapper">
          <video 
            src={video.videoUrl} 
            controls 
            autoPlay 
            className="main-player"
          />
        </div>
        <h1 className="watch-title">{video.title}</h1>
        <div className="watch-meta">
          <span className="watch-author">{video.author}</span>
          <span className="watch-views">{video.views}</span>
        </div>
        <div className="watch-description">
          <p>{video.description}</p>
        </div>
        <CommentSection />
      </div>
      
      <div className="video-sidebar-recommendations">
        <h2 className="rec-heading">Рекомендуемые видео</h2>
        <div className="rec-list">
          {recommendations.map(v => (
            <VideoCard key={v.id} video={v} onClick={() => onSelectVideo(v)} />
          ))}
        </div>
      </div>
    </div>
  );
}
