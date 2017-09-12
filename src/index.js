import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Single from './containers/Single';
import PhotoGrid from './containers/PhotoGrid';
import Main from './components/Main';

import css from  './styles/style.styl';
import store from './store';

render(
  <Provider store={store}>
    <BrowserRouter>
      <Main>
      <Switch>
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Switch>
    </Main>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
