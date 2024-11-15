import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage: React.FC = () => {
  const navigate = useNavigate();

  const handlePageClick = () => {
    navigate('/booking');
  };

  return (
    <div
      onClick={handlePageClick}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        cursor: 'pointer',
        textAlign: 'center',
      }}
    >
      <h1>Header</h1>
    </div>
  );
};

export default LoadingPage;
