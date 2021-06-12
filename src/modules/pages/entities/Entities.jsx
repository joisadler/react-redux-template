import React from 'react';
import PropTypes from 'prop-types';

import EntityCard from './EntityCard';

import styles from './entities.module.scss';

const Entities = ({ entities }) => {
  return (
    <main className={styles.container}>
      <section className={styles.controls}>controls section</section>
      <section className={styles.cards}>
        {entities.map((entity) => {
          const { name, id } = entity;
          return <EntityCard key={id} name={name} />;
        })}
      </section>
    </main>
  );
};

Entities.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Entities;
