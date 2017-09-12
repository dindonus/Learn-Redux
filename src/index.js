/*
  Import Dependencies
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'babel-polyfill';

/*
  Import Components
*/
import Single from './containers/Single';
import PhotoGrid from './containers/PhotoGrid';

/* Import CSS */
import css from  './styles/style.styl';

/* Import our data store */
import store from './store';

/*
  Rendering
  This is where we hook up the Store with our actual component and the router
*/
render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
