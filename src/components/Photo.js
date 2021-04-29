import React from 'react';
import './Photo.css';
const Photo = () => {
  return (
    <>
      <div className="ro">
        <div className="box colmn8">
          <img src={require('./img/3.jpg').default} alt=" ima " />
        </div>

        <div className="box colmn6">
          <img src={require('./img/back.jpg').default} alt="Mountains" />
        </div>
        <div className="box colmn4">
          <img src={require('./img/4th.jpg').default} alt=" ima " />
          <img src={require('./img/5th.jpg').default} alt=" ima " />
          <img src={require('./img/6th.jpg').default} alt=" ima " />
          <img src={require('./img/timthumb.jpg').default} alt=" ima " />
        </div>
      </div>
    </>
  );
};

export default Photo;
