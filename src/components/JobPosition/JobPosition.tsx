import React from 'react';
import { Card } from '../../UI/Card/Card';
import { Stack } from '../../UI/Stack/Stack';
import { Badge } from '../../UI/Badge/Badge';
import { JobPositionProps } from './JobPosition.interface';

export const JobPosition: React.FC<JobPositionProps> = ({
  id,
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  const badges = [role, level, ...languages, ...tools];
  return (
    <Card isFeatured={featured}>
      <div className='job-position'>
        <div className='job-position-info'>
          <img className='job-position-avatar' src={logo} alt={company} />
          <div className='job-position-body'>
            <div className='job-postion-company'>
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  <>
                    {isNew && (
                      <Badge type='rounded' color='primary'>
                        NEW!
                      </Badge>
                    )}
                    {featured && (
                      <Badge type='rounded' color='dark'>
                        FEATURED
                      </Badge>
                    )}
                  </>
                </Stack>
              )}
            </div>
            <h2 className='job-position-title'>{position}</h2>
            <Stack>
              <div className='job-position-meta'>{postedAt}</div>
              <div className='job-position-meta'>{contract}</div>
              <div className='job-position-meta'>{location}</div>
            </Stack>
          </div>
        </div>
        <Stack>
          {badges.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </Stack>
      </div>
    </Card>
  );
};
