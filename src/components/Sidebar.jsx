import React from 'react';
import { Home, Compass, History, Heart } from 'lucide-react';
import './components.css';

export default function Sidebar({ currentCategory, setCurrentCategory, setCurrentPage }) {
  const menuItems = [
    { id: 'Главная', label: 'Главная', icon: Home },
    { id: 'Подписки', label: 'Подписки', icon: Compass },
    { id: 'История', label: 'История', icon: History },
    { id: 'Избранное', label: 'Избранное', icon: Heart },
  ];

  const handleNav = (id) => {
    setCurrentPage({ name: 'Home' });
    setCurrentCategory(id);
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`sidebar-item ${currentCategory === item.id ? 'active' : ''}`}
              onClick={() => handleNav(item.id)}
            >
              <Icon size={20} />
              <span className="sidebar-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
