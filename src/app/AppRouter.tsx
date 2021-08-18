import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AccountRouter } from 'app/feature/Account/AccountRouter';
import { LoginRouter } from 'app/feature/Login/LoginRouter';
import MainPage from 'app/Main';
import { NavigationHeader } from 'app/shared/components/NavigationHeader';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationHeader />
      <Switch>
        {/* <Route path="/" exact component={MainPage} /> */}
        <Route path="/" exact component={LoginRouter} />
        <Route path="/login" component={LoginRouter} />
        <Route path="/accounts" component={AccountRouter} />
      </Switch>
    </BrowserRouter>
  );
};
