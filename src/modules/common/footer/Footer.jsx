import React from 'react';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>
        &copy;{' '}
        <a href="https://github.com/joisadler" className={styles.link}>
          Yossi Adler
        </a>
      </p>
    </footer>
  );
};

export default Footer;
