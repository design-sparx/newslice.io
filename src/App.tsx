import React, { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { Route } from 'react-router-dom';
import { CategoryPage, EmptySearchPage, Error404Page, HomePage, SearchPage } from './pages';
import './App.scss';
import RouterTransition from './components/RouterTransition';

const App = (): JSX.Element => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme): void =>
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <div className={colorScheme === 'dark' ? 'App-dark' : 'App-light'}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withNormalizeCSS
          theme={{
            colorScheme,
            colors: {
              brand: [
                '#ecedff',
                '#c9caee',
                '#a5a5dc',
                '#8480cc',
                '#645cbc',
                '#343880',
                '#343880',
                '#252b5c',
                '#151d39',
                '#060a19',
              ],
              dark: [
                '#d5d7e0',
                '#acaebf',
                '#8c8fa3',
                '#666980',
                '#4d4f66',
                '#34354a',
                '#2b2c3d',
                '#1d1e30',
                '#0c0d21',
                '#01010a',
              ],
            },
            primaryColor: 'brand',
          }}
        >
          <RouterTransition>
            <Route index element={<HomePage />} />
            <Route path='category/:categoryTitle' element={<CategoryPage />} />
            <Route path='search'>
              <Route path=':query' element={<SearchPage />} />
              <Route path='/search' element={<EmptySearchPage />} />
            </Route>
            <Route path='*' element={<Error404Page />} />
          </RouterTransition>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
};

export default App;
