import React, { useState } from 'react';
import './Calculate.css';

const Calculate = () => {
  // e.preventDefault();
  const [rate, setRate] = useState('');
  const [days, setDays] = useState('');
  const [adults, setAdults] = useState('');
  const [minor, setMinor] = useState('');

  const CalculateBudget = () => {
    let personValue = rate * days * adults;

    let total = +personValue;
    return total;
  };

  return (
    <>
      <div className="heading">
        <h2>
          <h1>Tour cost </h1>
        </h2>
      </div>
      <div className="container">
        <div className="display">
          <div className="inner-dis">
            <p>Room Rent : {rate}</p>
          </div>

          <div className="inner-dis">
            <p>Total Days : {days}</p>
          </div>
          <div className="inner-dis">
            <p>Number of Adults : {adults}</p>
          </div>
          <div className="inner-dis">
            <p>Number of Minor: {minor}</p>
          </div>
          <div className="inner-dis">
            <h2>
              Total cost: {CalculateBudget()}
              <span style={{ color: '#00005f' }}> Rs</span>
            </h2>
          </div>
        </div>
        <form className="form">
          <label>Room Rent</label>
          <input
            type="number"
            value={rate}
            onChange={(event) => setRate(event.target.value)}
          />

          <label>Days</label>
          <input
            type="number"
            value={days}
            onChange={(event) => setDays(event.target.value)}
          />
          <label>Adults</label>
          <input
            type="number"
            value={adults}
            onChange={(event) => setAdults(event.target.value)}
          />
          <label>Minor</label>
          <input
            type="number"
            value={minor}
            onChange={(event) => setMinor(event.target.value)}
          />

          <h2>Total: {CalculateBudget()} Rs</h2>
        </form>
      </div>
      <div className="info"></div>
    </>
  );
};
export default Calculate;
