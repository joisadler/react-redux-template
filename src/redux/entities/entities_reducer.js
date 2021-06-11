import { ADD_ENTITY } from './entities_action_types';

import initialEntities from '../../entities.data';

const initialState = {
  entities: initialEntities,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTITY:
      return {
        ...state,
        entities: [...state.entities, action.payload],
      };
    default:
      return state;
  }
};
