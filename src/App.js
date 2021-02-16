import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/SearchBar';
import Repo from './Components/Repo';

function App() {
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repo/:author/:name" component={Repo} />
    </Switch>
  </BrowserRouter>;

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
