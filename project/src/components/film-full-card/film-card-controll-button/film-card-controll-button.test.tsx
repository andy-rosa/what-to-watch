import { render, screen} from '@testing-library/react';
import { generatePath } from 'react-router-dom';
import { RoutePath } from '../../routers/app-router/config/router-config';
import FilmCardButton from './film-card-controll-button';
import MockProviderWithComponent from '../../../hoc/mock-provider-with-component/mock-provider-with-component';

describe('FilmCardButton', () => {
  const id = 123;
  let filmCardButton: MockProviderWithComponent;

  beforeEach(() => {
    filmCardButton = new MockProviderWithComponent(<FilmCardButton id={id} />);
  });

  it('renders a play button with a link to the player page', () => {
    render(filmCardButton.renderTest());

    const playButton = screen.getByTestId('link-button-play');
    expect(playButton.tagName).toBe('A');
    expect(playButton.getAttribute('href'))
      .toEqual(generatePath(RoutePath.player, { id }));
  });

  it('renders a "My list" button', () => {
    render(filmCardButton.renderTest());

    const myListButton = screen.getByTestId('my-list-button');
    expect(myListButton.tagName).toBe('BUTTON');
    expect(myListButton).toHaveTextContent('My list');
  });
});
