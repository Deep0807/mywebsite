import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Calculate from './components/Calculate';
import Travel from './components/Travel';
import Photo from './components/Photo';
import Form from './components/Form';

import { FooterContainer } from './containers/footer';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact Home component={Home} />
          <Route path="/calculate" Calculate component={Calculate} />
          <Route path="/contact" Contact component={Contact} />
          <Route path="/travel" Travel component={Travel} />
          <Route path="/photo" Photo component={Photo} />
          <Route path="/form" form component={Form} />
        </Switch>
        <FooterContainer />
      </Router>
    </>
  );
};
export default App;
