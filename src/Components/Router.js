import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import Repo from './Repo';

const Router = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
    <Route path="/repo/:author/:name" component={Repo} />
  </BrowserRouter>
);
export default Router;
