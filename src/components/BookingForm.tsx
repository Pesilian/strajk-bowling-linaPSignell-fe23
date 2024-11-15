import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingForm: React.FC = () => {
  const [when, setWhen] = useState('');
  const [lanes, setLanes] = useState(1);
  const [people, setPeople] = useState(1);
  const [shoes, setShoes] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const apiKey = '738c6b9d-24cf-47c3-b688-f4f4c5747662';
    const data = { when, lanes, people, shoes };

    try {
      const response = await axios.post(
        'https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com',
        data,
        {
          headers: {
            'x-api-key': apiKey,
            'Content-Type': 'text/plain',
          },
        }
      );

      navigate('/confirmation', { state: { booking: response.data } });
    } catch (error) {
      console.error('Error making booking:', error);
    }
  };

  const addPlayer = () => {
    setPeople(prevPeople => prevPeople + 1);
    setShoes(prevShoes => [...prevShoes, 0]); // Lägg till en ny skostorlek
  };

  return (
    <div>
      <h1>Boka Bowling</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label>
          Datum och tid:
          <input
            type="datetime-local"
            value={when}
            onChange={e => setWhen(e.target.value)}
          />
        </label>
        <label>
          Antal banor:
          <input
            type="number"
            min="1"
            value={lanes}
            onChange={e => setLanes(Number(e.target.value))}
          />
        </label>
        <label>
          Antal personer:
          <input
            type="number"
            min="1"
            value={people}
            onChange={e => setPeople(Number(e.target.value))}
            readOnly // Gör detta fält skrivskyddat eftersom det hanteras av knappen
          />
        </label>
        {Array.from({ length: people }).map((_, idx) => (
          <label key={idx}>
            Skostorlek för person {idx + 1}:
            <input
              type="number"
              min="30"
              max="50"
              value={shoes[idx] || ''}
              onChange={e => {
                const newShoes = [...shoes];
                newShoes[idx] = Number(e.target.value);
                setShoes(newShoes);
              }}
            />
          </label>
        ))}
        <button type="button" onClick={addPlayer}>
          Lägg till spelare
        </button>
        <button type="submit">Boka</button>
      </form>
    </div>
  );
};

export default BookingForm;
