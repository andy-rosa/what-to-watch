import React from 'react';
import { render, screen } from '@testing-library/react';
import CatalogGenresList from './catalog-genres-list';
import {GenreName} from '../../../types/genre';
import MockProviderWithComponent from '../../../hoc/mock-provider-with-component/mock-provider-with-component';

describe('catalog-genres-list component', () => {
  it('renders all genres', () => {
    const catalog = new MockProviderWithComponent(<CatalogGenresList />);
    render(catalog.renderTest());

    const genreNames = Object.values(GenreName);
    genreNames.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });
});
