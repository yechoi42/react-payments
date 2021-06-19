import React from 'react';
import MainPage from './page/MainPage';
import RegisterPage from './page/RegisterPage';
import PageNotFound from './component/PageNotFound/PageNotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
