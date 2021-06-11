import React from 'react';

import Header from './modules/common/header/Header';
import HomePage from './modules/pages/home_page/HomePage';
import EntitiesPage from './modules/pages/entities/EntitiesPage';

import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.page}>
      <Header />
    </div>
  );
};

export default App;
