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
import Menu from './components/Menu';
import './App.css';

const App: React.FC = () => (
  <Router>
    <div className="container">
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route
          path="/booking"
          element={
            <>
              <Menu />
              <BookingForm />
            </>
          }
        />
        <Route
          path="/confirmation"
          element={
            <>
              <Menu />
              <Confirmation />
            </>
          }
        />
      </Routes>
    </div>
  </Router>
);

export default App;
