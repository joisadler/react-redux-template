import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './modules/common/header/Header';
import Footer from './modules/common/footer/Footer';

import styles from './app.module.scss';

const Home = lazy(() => import('./modules/pages/home/home_container'));
const Entities = lazy(() =>
  import('./modules/pages/entities/entities_container')
);
const Entity = lazy(() => import('./modules/pages/entity/entity_container'));

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
        <Route
          path="/entity/:id"
          render={(props) => (
            <Suspense fallback={<div>Loading...</div>}>
              <Entity {...props} />
            </Suspense>
          )}
        />
        <Route path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
