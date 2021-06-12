import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.link_active}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/entities"
          className={styles.link}
          activeClassName={styles.link_active}
        >
          Entities
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
