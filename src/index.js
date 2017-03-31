import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, hashHistory, Router } from 'react-router';
import App from './App';
import TabComponent from './TabComponent';
import Post from './Post';
import Home from './Home';
import Tab2 from './Tab2';
import Following from './Following';
import Search from './Search';
import Timeline from './Timeline';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TabComponent} />
      <Route path="home" component={Home} />
      <Route path="post" component={Post} />
      <Route path="search" component={Search} />
      <Route path="timeline" component={Timeline} />
      <Route path="tab2" component={Tab2} />
      <Route path="following" component={Following} />
    </Route>
  </Router>,
  document.getElementById('root')
);
