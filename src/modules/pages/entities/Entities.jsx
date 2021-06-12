import React from 'react';
import PropTypes from 'prop-types';

import EntityCard from './EntityCard';

import styles from './entities.module.scss';

const Entities = ({ entities }) => {
  return (
    <main className={styles.container}>
      {entities.map((entity) => {
        const { name, id } = entity;
        return <EntityCard key={id} name={name} />;
      })}
    </main>
  );
};

Entities.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Entities;
