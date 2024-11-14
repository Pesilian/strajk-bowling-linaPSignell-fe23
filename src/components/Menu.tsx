import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      >
        {isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
      </button>

      {isMenuOpen && (
        <nav
          style={{
            position: 'absolute',
            top: '3rem',
            left: 0,
            background: '#f0f0f0',
            padding: '1rem',
            width: '100%',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '0.5rem 0' }}>
              <a href="/">Boka</a>
            </li>
            <li style={{ margin: '0.5rem 0' }}>
              <a href="/confirmation">Bekräftelse</a>
            </li>
            <li style={{ margin: '0.5rem 0' }}>
              <a href="/about">Om oss</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Menu;
