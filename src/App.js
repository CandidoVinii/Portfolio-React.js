import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main';
import Sobre from './pages/Sobre/Sobre';
import Projetos from './pages/Projetos/Projetos';
import React from 'react';
import { Router } from 'react-router-dom';
import history from './Components/history';

class App extends React.Component {
  render() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/sobre" component={Sobre} />
            <Route exact path="/projetos" component={Projetos} />
          </Switch>
        </Router>
    </BrowserRouter>
    );
  }
}

export default App;
