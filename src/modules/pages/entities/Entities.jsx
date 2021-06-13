import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EntityCard from './EntityCard';

import styles from './entities.module.scss';

const Entities = ({ entities }) => {
  const [entitiesToShow, setEntitiesToShow] = useState(entities);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = ({ target }) => {
    const { value } = target;
    setSearchQuery(value);
    setEntitiesToShow(
      entities.filter((entity) =>
        entity.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <main className={styles.container}>
      <section className={styles.controls}>
        <label>
          Search entity:
          <input
            type="text"
            className={styles.input}
            value={searchQuery}
            onChange={handleSearch}
            placeholder="name"
          />
        </label>
      </section>
      <div className={styles.cards_wrapper}>
        <section className={styles.cards}>
          {entitiesToShow.map((entity) => {
            const { name, id } = entity;
            return <EntityCard key={id} name={name} />;
          })}
        </section>
      </div>
    </main>
  );
};

Entities.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Entities;
