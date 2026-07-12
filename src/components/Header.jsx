import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon, Search, Tv, User } from 'lucide-react';
import './components.css';

export default function Header({ onSearch, setCurrentPage }) {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header-left" onClick={() => setCurrentPage({ name: 'Home' })} style={{ cursor: 'pointer' }}>
        <Tv className="logo-icon" size={28} />
        <span className="logo-text">Vibe<span className="logo-accent">Stream</span></span>
      </div>
      
      <div className="header-center">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Поиск видео..." 
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="search-btn">
            <Search size={18} />
          </button>
        </div>
      </div>

      <div className="header-right">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Сменить тему">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="auth-btn">
          <User size={16} />
          <span>Войти</span>
        </button>
      </div>
    </header>
  );
}
