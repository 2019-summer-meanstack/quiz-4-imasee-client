import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Vedios from '../components/vedios';
import Authors from '../components/Authors';
import Calculator from '../components/calculator';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Vedios} />
        <Route exact  path="/Authors" component={Authors} />
        <Route exact path="/Calculator" component={Calculator} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;