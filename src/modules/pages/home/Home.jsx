import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './home.module.scss';

const Home = ({ entities }) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Welcome to the entities app!</h1>
      <p className={styles.info}>
        At the moment there are {entities.length}{' '}
        <Link to="/entities" className={styles.link}>
          entities
        </Link>
        .
      </p>
    </main>
  );
};

Home.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
