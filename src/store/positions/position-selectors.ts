import { IPosition } from '../../Position.interface';

export const selectAllPositions = (state: { positions: IPosition[] }) =>
  state.positions;

export const selectVisiblePositions = (
  state: { positions: IPosition[] },
  filters: string[] | [] = []
) => {
  if (!filters.length) return state.positions;
  return state.positions.filter((pos: IPosition) => {
    const positionsFilters = [
      pos.role,
      pos.level,
      ...pos.languages,
      ...pos.tools,
    ];

    return filters.every((filter) => positionsFilters.includes(filter));
  });
};
