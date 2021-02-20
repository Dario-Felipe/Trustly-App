import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/index';
import Checkout from './pages/Checkout/index';
import Confirmation from './pages/Confirmation/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/checkout/:id" component={Checkout} />
      <Route path="/confirmation/:id" component={Confirmation} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
