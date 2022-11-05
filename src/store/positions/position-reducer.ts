import { IPosition } from '../../Position.interface';
import { ADD_POSITIONS } from './position-action';

export const positionReducer = (
  state = [],
  action: { type: 'ADD_POSITIONS'; positions: IPosition[] }
) => {
  switch (action.type) {
    case ADD_POSITIONS:
      return action.positions;

    default:
      return state;
  }
};
