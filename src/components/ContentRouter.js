import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Single from '../containers/Single';
import PhotoGrid from '../containers/PhotoGrid';

const ContentRouter = () => (
  <Switch>
    <Route exact path="/" component={PhotoGrid} />
    <Route path="/view/:postId" component={Single} />
  </Switch>
);

export default ContentRouter;
