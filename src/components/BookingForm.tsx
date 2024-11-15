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

  const handleMenuClick = () => {
    navigate('/menu');
  };

  return (
    <div className="bookingform">
      <svg
        className="booking-menu-btn"
        width="52"
        height="46"
        viewBox="0 0 52 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleMenuClick}
      >
        <rect width="52" height="46" rx="4" fill="#EC315A" fillOpacity="0.12" />
        <rect x="12" y="12" width="28" height="2" rx="1" fill="#EC315A" />
        <rect x="12" y="22" width="22" height="2" rx="1" fill="#EC315A" />
        <rect x="12" y="32" width="15" height="2" rx="1" fill="#EC315A" />
      </svg>

      <svg
        className="logo"
        width="76"
        height="110"
        viewBox="0 0 136 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 128.154C0 84.3365 58.5556 50.4135 45.3333 0C76.5 0 136 45.2308 136 128.154C136 146.148 128.836 163.405 116.083 176.128C103.331 188.852 86.0347 196 68 196C49.9653 196 32.6692 188.852 19.9167 176.128C7.16426 163.405 0 146.148 0 128.154Z"
          fill="#F2C94C"
        />
        <path
          d="M113 109.692C113 136.605 94.5 147 76 147C57.5 147 39 136.605 39 109.692C39 82.7795 62.125 69.5865 57.5 50C81.7812 50 113 82.7795 113 109.692Z"
          fill="#F2994A"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M68 196C97.8234 196 122 171.823 122 142C122 112.177 97.8234 88 68 88C38.1766 88 14 112.177 14 142C14 171.823 38.1766 196 68 196ZM57 107C54.2386 107 52 105.209 52 103C52 100.791 54.2386 99 57 99C59.7614 99 62 100.791 62 103C62 105.209 59.7614 107 57 107ZM72 107C72 109.209 74.2386 111 77 111C79.7614 111 82 109.209 82 107C82 104.791 79.7614 103 77 103C74.2386 103 72 104.791 72 107ZM59 142C54.0294 142 50 138.194 50 133.5C50 128.806 54.0294 125 59 125C63.9706 125 68 128.806 68 133.5C68 138.194 63.9706 142 59 142Z"
          fill="#EC315A"
        />
      </svg>

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
            <div className="form-group shoes">
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
