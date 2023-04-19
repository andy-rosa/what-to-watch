import React from 'react';
import { render, screen } from '@testing-library/react';
import Catalog from './Catalog';
import MockProviderTest from '../../../helpers/decorators/MockProviderTest/MockProviderTest';

test('renders the Catalog component', () => {
  render(<MockProviderTest component={<Catalog />} />);
  const catalogTitle = screen.getByRole('heading', { name: 'Catalog' });
  const catalogGenresList = screen.getByTestId('genres-list');
  const catalogFilmsList = screen.getByTestId('films-list');
  const showMoreButton = screen.getByRole('button', { name: 'Show more' });

  expect(catalogTitle).toBeInTheDocument();
  expect(catalogGenresList).toBeInTheDocument();
  expect(catalogFilmsList).toBeInTheDocument();
  expect(showMoreButton).toBeInTheDocument();
});
