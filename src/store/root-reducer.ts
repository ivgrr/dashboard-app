import { combineReducers } from 'redux';
import { filtersReducer } from './filters/filter-reducer';
import { positionReducer } from './positions/position-reducer';

export const rootReducer = combineReducers({
  filters: filtersReducer,
  positions: positionReducer,
});
