import React from 'react';
import PropTypes from 'prop-types';

import EntityCard from './EntityCard';

import styles from './entities_page.module.scss';

const EntitiesPage = ({ entitiesToShow }) => {
  return (
    <main className={styles.container}>
      {entitiesToShow.map((entity) => {
        const { name, id } = entity;
        return <EntityCard key={id} name={name} />;
      })}
    </main>
  );
};

EntitiesPage.propTypes = {
  entitiesToShow: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EntitiesPage;
