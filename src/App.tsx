import React from 'react';
import './App.css';
import { FilterPanel } from './components/FilterPanel/FilterPanel';
import { Header } from './components/Header/Header';
import { JobList } from './components/JobList/JobList';

export const App = () => {
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
