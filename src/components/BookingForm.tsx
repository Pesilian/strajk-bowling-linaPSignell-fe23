import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeBooking } from '../services/api';
import '../styles/BookingForm.css';

const BookingForm: React.FC = () => {
  const [whenDate, setWhenDate] = useState('');
  const [whenTime, setWhenTime] = useState('');
  const [lanes, setLanes] = useState(1);
  const [people, setPeople] = useState(1);
  const [shoes, setShoes] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { when: `${whenDate}T${whenTime}`, lanes, people, shoes };

    try {
      const response = await makeBooking(data);
      navigate('/confirmation', { state: { booking: response } });
    } catch (error) {
      console.error('Error making booking:', error);
    }
  };

  const addPlayer = () => {
    setPeople(prevPeople => prevPeople + 1);
    setShoes(prevShoes => [...prevShoes, 0]);
  };

  const removePlayer = (index: number) => {
    setPeople(prevPeople => prevPeople - 1);
    setShoes(prevShoes => prevShoes.filter((_, i) => i !== index));
  };

  return (
    <div className="bookingform">
      <h1 className="bookingheader">Booking</h1>
      <h2 className="subheader-when">When, what & Who</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={whenDate}
            onChange={e => setWhenDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            value={whenTime}
            onChange={e => setWhenTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Number of bowlers</label>
          <input
            type="number"
            min="1"
            value={people}
            onChange={e => setPeople(Number(e.target.value))}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Number of lanes</label>
          <input
            type="number"
            min="1"
            value={lanes}
            onChange={e => setLanes(Number(e.target.value))}
          />
        </div>
        <h2 className="subheader-shoes">Shoes</h2>
        {Array.from({ length: people }).map((_, idx) => (
          <div className="shoes-cont" key={idx}>
            <div className="form-group">
              <label>Shoe size for person {idx + 1}:</label>
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
            </div>
            <button
              className="remove-btn"
              type="button"
              onClick={() => removePlayer(idx)}
            >
              -
            </button>
          </div>
        ))}
        <div className="buttons-cont">
          <button className="addplayer-btn" type="button" onClick={addPlayer}>
            +
          </button>
          <button className="submit-btn" type="submit">
            Striiiiiike!
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
