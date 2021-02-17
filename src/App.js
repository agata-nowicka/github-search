import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Repo from './Components/Repo';
import { PATHS } from './config/routes';

function App() {
  <BrowserRouter>
    <Switch>
      <Route path="{PATHS.HOME}" exact component={Home} />
      <Route path="{PATHS.REPO}" component={Repo} />
    </Switch>
  </BrowserRouter>;

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
