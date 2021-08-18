import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AccountRouter } from 'app/feature/Account/AccountRouter';
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import MainPage from 'app/Main';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/home" component={HomeRouter} />
        <Route path="/accounts" component={AccountRouter} />
        {/* <Route path="/accounts" component={AccountRouter} /> */}
      </Switch>
    </BrowserRouter>
  );
};
