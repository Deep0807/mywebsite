import React from 'react';
import './Photo.css';
const Photo = () => {
  return (
    <>
      <div className="row">
        <div className="box column6">
          <img src={require('./img/back.jpg').default} alt="Mountains" />
        </div>
        <div className="box column4">
          <img src={require('./img/4th.jpg').default} alt=" ima " />
          <img src={require('./img/5th.jpg').default} alt=" ima " />
          <img src={require('./img/6th.jpg').default} alt=" ima " />
          <img src={require('./img/NAINITAL.jpg').default} alt=" ima " />
        </div>

        <div className="box column8">
          <img src={require('./img/timthumb.jpg').default} alt=" ima " />
          <img src={require('./img/download.jpg').default} alt=" ima " />
          <img src={require('./img/3.jpg').default} alt=" ima " />
        </div>
      </div>
    </>
  );
};

export default Photo;
