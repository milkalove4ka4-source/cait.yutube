import React from 'react';
import VideoCard from '../components/VideoCard';
import './pages.css';

export default function Home({ videos, onSelectVideo }) {
  return (
    <div className="home-grid">
      {videos.map((video) => (
        <VideoCard 
          key={video.id} 
          video={video} 
          onClick={() => onSelectVideo(video)}
        />
      ))}
      {videos.length === 0 && (
        <div className="no-results">Видео не найдены</div>
      )}
    </div>
  );
}
