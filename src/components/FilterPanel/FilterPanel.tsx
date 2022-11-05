import React from 'react';
import { Badge } from '../../UI/Badge/Badge';
import { Card } from '../../UI/Card/Card';
import { Stack } from '../../UI/Stack/Stack';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from '../../store/filters/filter-selectors';

import { removeFilter, clearFilter } from '../../store/filters/filter-actions';

export const FilterPanel = () => {
  const currentFilters: string[] = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (!currentFilters.length) return null;

  const showBadges = (): JSX.Element => {
    return (
      <>
        {currentFilters.map((filter) => (
          <Badge
            key={filter}
            onClear={() => {
              dispatch(removeFilter(filter));
            }}
            type='clearable'
          >
            {filter}
          </Badge>
        ))}
      </>
    );
  };

  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>{showBadges()}</Stack>

        <button onClick={() => dispatch(clearFilter)} className='link'>
          Clear
        </button>
      </div>
    </Card>
  );
};
