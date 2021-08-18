import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LazyFallback } from 'app/shared/components/LazyFallback';

const MainPage = React.lazy(() => import('./pages/Main'));
const ViewDataAccountPage = React.lazy(() => import('./pages/ViewDataAccount'));

export const AccountRouter = () => (
  <React.Suspense fallback={<LazyFallback />}>
    <Switch>
      <Route
        path="/accounts/DataAccount"
        component={ViewDataAccountPage}
      ></Route>
      <Route path="/" component={MainPage}></Route>
    </Switch>
  </React.Suspense>
);
