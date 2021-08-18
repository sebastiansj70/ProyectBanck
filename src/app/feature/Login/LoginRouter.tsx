import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from '../../shared/components/LazyFallback';

const LoginMainPage = React.lazy(() => import('./pages/Main'));

export const LoginRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    <Switch>
      <Route path="/" component={LoginMainPage}></Route>
    </Switch>
  </React.Suspense>
);
