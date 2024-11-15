import React from 'react';
import '../styles/Menu.css';

const MenuPage: React.FC = () => {
  return (
    <div className="menu-page">
      <nav className="nav">
        <ul>
          <li>
            <a href="/booking">Booking</a>
          </li>
          <li>
            <a href="/confirmation">Confirmation</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuPage;
