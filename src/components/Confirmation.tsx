import React from 'react';
import { useLocation } from 'react-router-dom';

interface ConfirmationProps {
  booking?: {
    when: string;
    lanes: number;
    people: number;
    shoes: number[];
    price: number;
    id: string;
    active: boolean;
  };
}

const Confirmation: React.FC<ConfirmationProps> = ({ booking }) => {
  const location = useLocation();
  const bookingData = booking || location.state?.booking;

  if (!bookingData) {
    return <p>Ingen bokningsdata tillgänglig.</p>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Bokningsbekräftelse</h1>
      <p>
        <strong>Bokningsnummer:</strong> {bookingData.id}
      </p>
      <p>
        <strong>Datum och tid:</strong>{' '}
        {new Date(bookingData.when).toLocaleString()}
      </p>
      <p>
        <strong>Antal banor:</strong> {bookingData.lanes}
      </p>
      <p>
        <strong>Antal personer:</strong> {bookingData.people}
      </p>
      <p>
        <strong>Skostorlekar:</strong> {bookingData.shoes.join(', ')}
      </p>
      <p>
        <strong>Totalt pris:</strong> {bookingData.price} kr
      </p>
      <p>
        <strong>Status:</strong> {bookingData.active ? 'Aktiv' : 'Avslutad'}
      </p>
    </div>
  );
};

export default Confirmation;
