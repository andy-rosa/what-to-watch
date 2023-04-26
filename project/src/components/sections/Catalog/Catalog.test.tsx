import React from 'react';
import {render, screen} from '@testing-library/react';
import Catalog from './Catalog';
import MockProviderWithComponent from '../../../helpers/decorators/MockProviderWithComponent/MockProviderWithComponent';

test('renders the Catalog component', () => {
  const catalog = new MockProviderWithComponent(<Catalog />);
  render(catalog.renderTest());

  const catalogTitle = screen.getByRole('heading', { name: 'Catalog' });
  const catalogGenresList = screen.getByTestId('genres-list');
  const catalogFilmsList = screen.getByTestId('films-list');
  const showMoreButton = screen.getByRole('button', { name: 'Show more' });

  expect(catalogTitle).toBeInTheDocument();
  expect(catalogGenresList).toBeInTheDocument();
  expect(catalogFilmsList).toBeInTheDocument();
  expect(showMoreButton).toBeInTheDocument();
});
