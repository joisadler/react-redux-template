import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EntityCard from './EntityCard';

import styles from './entities.module.scss';

const Entities = ({ entities }) => {
  const [entitiesToShow, setEntitiesToShow] = useState(entities);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateOrder, setDateOrder] = useState('asc');

  const handleSearch = ({ target }) => {
    const { value } = target;
    setSearchQuery(value);
    setEntitiesToShow(
      entities
        .filter((entity) =>
          entity.name.toLowerCase().includes(value.toLowerCase())
        )
        .sort((a, b) => {
          if (dateOrder === 'desc') return a.created - b.created;
          return b.created - a.created;
        })
    );
  };

  const handleSortByDate = ({ target }) => {
    const { value } = target;
    setDateOrder(value);
    setEntitiesToShow(
      entities
        .filter((entity) =>
          entity.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
          if (value === 'desc') return a.created - b.created;
          return b.created - a.created;
        })
    );
  };

  return (
    <main className={styles.container}>
      <section className={styles.controls}>
        <label className={styles.label}>
          Search entity:
          <input
            type="text"
            className={styles.input}
            value={searchQuery}
            onChange={handleSearch}
            placeholder="name"
          />
        </label>
        <label className={styles.label}>
          Sort by date:
          <select
            className={styles.input}
            name="dateOrder"
            id="dateOrder"
            value={dateOrder}
            onChange={handleSortByDate}
          >
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
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
