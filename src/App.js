import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Toeat from './components/Toeat';
import Noteat from './components/Noteat';
 
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Im-hungry' component={Home} />
          <Route path='/Dine-in' component={Services} />
          <Route path='/Delivery' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/toeat' component={Toeat} />
          <Route path='/noteat' component={Noteat} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
