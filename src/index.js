import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, hashHistory, Router } from 'react-router';
import App from './App';
import TabComponent from './TabComponent';
import Tab2 from './Tab2';
import Home from './Home';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TabComponent} />
      <Route path="home" component={Home} />
      <Route path="tab2" component={Tab2} />
    </Route>
  </Router>,
  document.getElementById('root')
);
