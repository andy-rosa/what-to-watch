import React from 'react';
import {render, screen} from '@testing-library/react';
import Catalog from './catalog';
import MockProviderWithComponent from '../../../hoc/mock-provider-with-component/mock-provider-with-component';

test('renders the catalog component', () => {
  const catalog = new MockProviderWithComponent(<Catalog />);
  render(catalog.renderTest());

  const catalogTitle = screen.getByRole('heading', { name: 'Catalog' });
  const catalogGenresList = screen.getByTestId('genres-list');
  const catalogFilmsList = screen.getByTestId('films-list');

  expect(catalogTitle).toBeInTheDocument();
  expect(catalogGenresList).toBeInTheDocument();
  expect(catalogFilmsList).toBeInTheDocument();
});
