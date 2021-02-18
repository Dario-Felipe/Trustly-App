import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/index';
import Checkout from './pages/Checkout/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/checkout/:id" component={Checkout} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
