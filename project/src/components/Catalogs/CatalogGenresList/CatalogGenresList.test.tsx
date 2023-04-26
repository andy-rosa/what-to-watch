import React from 'react';
import { render, screen } from '@testing-library/react';
import CatalogGenresList from './CatalogGenresList';
import {GenreName} from '../../../types/genre';
import MockProviderWithComponent from '../../../helpers/decorators/MockProviderWithComponent/MockProviderWithComponent';

describe('CatalogGenresList component', () => {
  it('renders all genres', () => {
    const catalog = new MockProviderWithComponent(<CatalogGenresList />);
    render(catalog.renderTest());

    const genreNames = Object.values(GenreName);
    genreNames.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });
});
