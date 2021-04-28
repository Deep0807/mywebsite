import React from 'react';

import './Home.css';
const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <div className="home-img">
          <img src={require('./img/NAINITAL.jpg').default} alt=" ima " />
        </div>

        <div className="home-container">
          <p>
            Nainital is located in the Kumaon foothills of the outer Himalayas
            at a distance of 285 km (177 mi) from the state capital Dehradun and
            345 km (214 mi) from New Delhi, the capital of India. Situated at an
            altitude of 1,938 metres (6,358 ft) above sea level, the city is set
            in a valley containing an eye-shaped lake, approximately two miles
            in circumference, and surrounded by mountains, of which the highest
            are Naina Peak (2,615 m (8,579 ft)) on the north, Deopatha (2,438 m
            (7,999 ft)) on the west, and Ayarpatha (2,278 m (7,474 ft)) on the
            south. From the tops of the higher peaks, "magnificent views can be
            obtained of the vast plain to the south, or of the mass of tangled
            ridges lying north, bound by the great snowy range which forms the
            central axis of the Himalayas."[5] The hill station attracts
            tourists round the year.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
