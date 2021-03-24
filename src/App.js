import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Repo from './Components/Repo';
import { PATHS } from './config/routes';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path={PATHS.HOME} component={Home} />
          <Route path={PATHS.REPO} component={Repo} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
