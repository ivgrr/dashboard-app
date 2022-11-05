import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { FilterPanel } from './components/FilterPanel/FilterPanel';
import { Header } from './components/Header/Header';
import { JobList } from './components/JobList/JobList';
import { addPositions } from './store/positions/position-action';
import data from './mock/data.json';
import { store } from './store';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPositions(data));
    console.log(store);
  });
  return (
    <>
      <Header />
      <div className='container'>
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
};
