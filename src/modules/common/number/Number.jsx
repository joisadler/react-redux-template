import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './number.module.scss';

const Number = ({ number }) => {
  const [counter, setCounter] = useState(0);

  const delay = 1000 / number;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (counter < number) setCounter(counter + 1);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [counter, number, delay]);

  return <span className={styles.number}>{counter}</span>;
};

Number.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Number;
