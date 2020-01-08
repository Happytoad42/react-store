import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Cartpage, Homepage } from '../pages';

import './App.css';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Homepage</Link>
          </li>
          <li>
            <Link to='/cart'>Cart Page</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/cart'>
          <Cartpage />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
