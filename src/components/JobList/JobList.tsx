import React from 'react';
import data from '../../mock/data.json';
import { JobPosition } from '../JobPosition/JobPosition';

export const JobList = () => {
  return (
    <div className='job-list'>
      {data.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};
