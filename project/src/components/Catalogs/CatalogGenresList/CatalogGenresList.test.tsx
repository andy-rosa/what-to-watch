import React from 'react';
import { render, screen } from '@testing-library/react';
import CatalogGenresList from './CatalogGenresList';
import {GenreName} from '../../../types/genre';
import {store} from '../../../store';
import { Provider } from 'react-redux';

describe('CatalogGenresList component', () => {
  it('renders all genres', () => {
    render(
      <Provider store={store}>
        <CatalogGenresList />
      </Provider>
    );

    const genreNames = Object.values(GenreName);
    genreNames.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });
});
