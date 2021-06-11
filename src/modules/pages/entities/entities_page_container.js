import { connect } from 'react-redux';

import { addEntity } from '../../../redux/entities/entities_actions';

import EntitiesPage from './EntitiesPage';

const mSTP = (state) => ({
  entities: state.entities.entities,
});

const mDTP = {
  addEntity,
};

export default connect(mSTP, mDTP)(EntitiesPage);
