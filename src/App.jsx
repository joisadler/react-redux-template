import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './modules/common/header/Header';

import styles from './app.module.scss';

const Home = lazy(() => import('./modules/pages/home/Home'));
const Entities = lazy(() =>
  import('./modules/pages/entities/entities_container')
);

const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Switch>
        <Route path="/entities">
          <Suspense fallback={<div>Loading...</div>}>
            <Entities />
          </Suspense>
        </Route>
        <Route path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
