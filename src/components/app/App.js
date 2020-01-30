import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Cartpage, Homepage } from '../pages';

import './App.css';
import ShopHeader from '../shop-header';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={3} total={90} />
      <Switch>
        <Route path='/cart'>
          <Cartpage />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
