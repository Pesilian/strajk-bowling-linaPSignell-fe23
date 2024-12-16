import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import LoadingPage from './components/Loading';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import MenuPage from './components/Menu';
import './App.css';

const App: React.FC = () => {
  const location = useLocation();

  const isMenuPage = location.pathname === '/menu';

  return (
    <div className={`container ${isMenuPage ? 'menu-open' : ''}`}>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
