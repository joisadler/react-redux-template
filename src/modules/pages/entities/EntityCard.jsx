import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './entities.module.scss';

const EntityCard = ({ name, id }) => {
  return (
    <Link className={styles.card} to={`entity/${id}`}>
      <h2 className={styles.card_name}>{name}</h2>
    </Link>
  );
};

EntityCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default EntityCard;
