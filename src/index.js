import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main';
import ContentRouter from './components/ContentRouter';

import css from  './styles/style.styl';
import store from './store';

render(
  <Provider store={store}>
    <BrowserRouter>
      <Main>
        <ContentRouter />
      </Main>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
