import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Home from './pages/home.jsx';
import Run from './pages/run.jsx'

// TODO
// Once Home is implemented, / should route to Home instead of Run
// Add other pages such as Guide, About, etc.

class Main extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route path='/' component={Run} exact={true} />
            <Route path='/run' component={Run} exact={true} />
            <Route path='/home' component={Home} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('Main'));
