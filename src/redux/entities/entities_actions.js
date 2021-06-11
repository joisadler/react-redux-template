import { ADD_ENTITY } from './entities_action_types';

export const addEntity = (entity) => ({
  type: ADD_ENTITY,
  payload: entity,
});
