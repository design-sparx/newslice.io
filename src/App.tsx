import { MantineProvider } from '@mantine/core';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CategoryPage, HomePage, SearchPage } from './pages';
import './App.scss';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <MantineProvider
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          colors: {
            brand: ['#ecedff', '#c9caee', '#a5a5dc', '#8480cc', '#645cbc', '#343880', '#343880', '#252b5c', '#151d39', '#060a19'],
          },
          primaryColor: 'brand',
        }}
      >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/category/:categoryTitle' element={<CategoryPage />} />
          <Route path='/search/:query' element={<SearchPage />} />
        </Routes>
      </MantineProvider>
    </div>
  );
};

export default App;
