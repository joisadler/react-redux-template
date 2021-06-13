import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './entity.module.scss';

const Entity = ({ entities, match }) => {
  const { params } = match;
  const id = Number(params.id);
  const entity = entities.find((e) => e.id === id);
  const { name } = entity;

  return (
    <main className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
      <Link className={styles.link} to="/entities">
        Back to entities
      </Link>
    </main>
  );
};

Entity.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  entities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Entity;
