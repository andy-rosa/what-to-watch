import React from 'react';
import { render, screen} from '@testing-library/react';
import { generatePath } from 'react-router-dom';
import { RoutePath } from '../../Routers/AppRouter/config/routerConfig';
import FilmCardButton from './FilmCardControllButton';
import MockProviderWithComponent from '../../../helpers/decorators/MockProviderWithComponent/MockProviderWithComponent';

describe('FilmCardButton', () => {
  const id = 123;

  it('renders a play button with a link to the player page', () => {
    const filmCardButton = new MockProviderWithComponent(<FilmCardButton id={id} />);
    render(filmCardButton.renderTest());

    const playButton = screen.getByTestId('link-button-play');
    expect(playButton.tagName).toBe('A');
    expect(playButton.getAttribute('href'))
      .toEqual(generatePath(RoutePath.player, { id }));
  });

  it('renders a "My list" button', () => {
    const filmCardButton = new MockProviderWithComponent(<FilmCardButton id={id} />);
    render(filmCardButton.renderTest());

    const myListButton = screen.getByTestId('my-list-button');
    expect(myListButton.tagName).toBe('BUTTON');
    expect(myListButton).toHaveTextContent('My list');
  });

  it('renders an "Add review" button with a link to the add review page', () => {
    const filmCardButton = new MockProviderWithComponent(<FilmCardButton id={id} />);
    render(filmCardButton.renderTest());

    const addReviewButton = screen.getByText('Add review');
    expect(addReviewButton.tagName).toBe('A');
    expect(addReviewButton.getAttribute('href')).toBe(RoutePath.add_review);
  });
});
