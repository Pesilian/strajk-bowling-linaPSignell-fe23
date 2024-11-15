import React, { useState } from 'react';
import '../styles/Menu.css';

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <svg
        width="52"
        height="46"
        viewBox="0 0 52 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleMenu}
        className="menubutton"
      >
        <rect
          width="52"
          height="46"
          rx="4"
          fill="#EC315A"
          fill-opacity="0.12"
        />
        <rect x="12" y="12" width="28" height="2" rx="1" fill="#EC315A" />
        <rect x="12" y="22" width="22" height="2" rx="1" fill="#EC315A" />
        <rect x="12" y="32" width="15" height="2" rx="1" fill="#EC315A" />
      </svg>

      {isMenuOpen && (
        <nav className="nav">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '0.5rem 0' }}>
              <a href="/men">Boka</a>
            </li>
            <li style={{ margin: '0.5rem 0' }}>
              <a href="/confirmation">Bekräftelse</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Menu;
