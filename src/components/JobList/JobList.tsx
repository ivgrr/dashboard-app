import React from 'react';
import { JobPosition } from '../JobPosition/JobPosition';

import { selectVisiblePositions } from '../../store/positions/position-selectors';

import { useSelector, useDispatch } from 'react-redux';
import { IPosition } from '../../Position.interface';
import { addFilter } from '../../store/filters/filter-actions';
import { selectFilters } from '../../store/filters/filter-selectors';

export const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state: { positions: IPosition[] }) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleAddFilter = (filter: string) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  );
};
