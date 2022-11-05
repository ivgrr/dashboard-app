import { IPosition } from '../../Position.interface';
export const ADD_POSITIONS = 'ADD_POSITIONS';

export const addPositions = (positions: IPosition[]) => ({
  type: ADD_POSITIONS,
  positions,
});
