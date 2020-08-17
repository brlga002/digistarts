import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={home} />
      </Switch>
    </BrowserRouter>
  );
}
