import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Confirmation.css';

const Confirmation: React.FC = () => {
  const location = useLocation();
  const bookingData = location.state?.booking;

  if (!bookingData) {
    return (
      <div className="confirmation-page">
        <p>Ingen bokningsdata tillgänglig.</p>
      </div>
    );
  }

  return (
    <div className="confirmation-page">
      <h1>Bokningsbekräftelse</h1>
      <p>Bokningsnummer: {bookingData.id}</p>
      <p>Datum och tid: {new Date(bookingData.when).toLocaleString()}</p>
      <p>Antal banor: {bookingData.lanes}</p>
      <p>Antal personer: {bookingData.people}</p>
      <p>Skostorlekar: {bookingData.shoes.join(', ')}</p>
      <p>Totalt pris: {bookingData.price} kr</p>
    </div>
  );
};

export default Confirmation;
