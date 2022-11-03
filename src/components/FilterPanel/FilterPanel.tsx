import React from 'react';
import { Badge } from '../../UI/Badge/Badge';
import { Card } from '../../UI/Card/Card';
import { Stack } from '../../UI/Stack/Stack';

export const FilterPanel = () => {
  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          <Badge type='clearable'>Frontend</Badge>
          <Badge type='clearable'>Backend</Badge>
          <Badge type='clearable'>React</Badge>
        </Stack>

        <button className='link'>Clear</button>
      </div>
    </Card>
  );
};
