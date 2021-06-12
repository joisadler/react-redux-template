import React from 'react';
import PropTypes from 'prop-types';

import styles from './entities.module.scss';

const EntityCard = ({ name }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.card_name}>{name}</h2>
    </div>
  );
};

EntityCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default EntityCard;
