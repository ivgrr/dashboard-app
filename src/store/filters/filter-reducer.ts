import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from './filter-actions';

export const filtersReducer = (
  state: string[] = [],
  action: {
    type: 'ADD_FILTER' | 'REMOVE_FILTER' | 'CLEAR_FILTER';
    filter: string;
  }
) => {
  switch (action.type) {
    case ADD_FILTER:
      if (state.includes(action.filter)) {
        return state;
      }
      return [...state, action.filter];
    case REMOVE_FILTER:
      return state.filter((item) => item !== action.filter);
    case CLEAR_FILTER:
      return [];
    default:
      return state;
  }
};