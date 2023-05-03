import CatalogFilmsList from './catalog-films-list';
import {render, screen} from '@testing-library/react';
import MockProviderWithComponent from '../../../hoc/mock-provider-with-component/mock-provider-with-component';

describe('catalog-films-list.test', () => {
  let catalogFilms: MockProviderWithComponent;

  beforeEach(() => {
    catalogFilms = new MockProviderWithComponent(<CatalogFilmsList />);
  });

  test('render component', async () => {
    render(catalogFilms.renderTest());

    const list = await screen.findByTestId('films-list');
    expect(list).toBeInTheDocument();
  });

});
