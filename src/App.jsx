import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import './App.css';

export default function App() {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('Главная');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState({ name: 'Home', data: null });

  // Загрузка фиктивных данных без бэкенда
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}mockData.json`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setFilteredVideos(data);
      })
      .catch((err) => console.error("Ошибка загрузки данных:", err));
  }, []);

  // Логика фильтрации по боковому меню и поиску
  useEffect(() => {
    let result = videos;
    if (currentCategory !== 'Главная') {
      result = result.filter(v => v.category === currentCategory);
    }
    if (searchQuery) {
      result = result.filter(v => 
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredVideos(result);
  }, [currentCategory, searchQuery, videos]);

  return (
    <div className="app-container">
      <Header onSearch={setSearchQuery} setCurrentPage={setCurrentPage} />
      <div className="main-layout">
        <Sidebar 
          currentCategory={currentCategory} 
          setCurrentCategory={setCurrentCategory} 
          setCurrentPage={setCurrentPage}
        />
        <main className="content-area">
          {currentPage.name === 'Home' ? (
            <Home 
              videos={filteredVideos} 
              onSelectVideo={(video) => setCurrentPage({ name: 'Watch', data: video })} 
            />
          ) : (
            <VideoPage 
              video={currentPage.data} 
              allVideos={videos} 
              onSelectVideo={(video) => setCurrentPage({ name: 'Watch', data: video })}
            />
          )}
        </main>
      </div>
    </div>
  );
}
