import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Repo from './Components/Repo';
import { PATHS } from './config/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={PATHS.HOME} component={Home} />
          <Route path={PATHS.REPO} component={Repo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
