import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Number from '../../common/number/Number';

import styles from './home.module.scss';

const Home = ({ entities }) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Welcome to the entities app!</h1>
      <p className={styles.info}>
        At the moment there are <Number number={entities.length} /> entities.
      </p>
      <Link to="/entities" className={styles.action}>
        Take a look
      </Link>
    </main>
  );
};

Home.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
