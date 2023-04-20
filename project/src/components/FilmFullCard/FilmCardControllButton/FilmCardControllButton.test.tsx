import React from 'react';
import { render, screen} from '@testing-library/react';
import { generatePath } from 'react-router-dom';
import { RoutePath } from '../../Routers/AppRouter/config/routerConfig';
import FilmCardButton from './FilmCardControllButton';
import MockProviderWithComponent from '../../../helpers/decorators/MockProviderWithComponent/MockProviderWithComponent';

//отвалились тесты
describe('FilmCardButton', () => {
  const id = 123;

  it('renders a play button with a link to the player page', () => {
    const filmCardButton = new MockProviderWithComponent(<FilmCardButton id={id} />);
    render(filmCardButton.renderTest());

    const playButton = screen.getByText('Play');
    expect(playButton.tagName).toBe('SPAN');
    console.log(playButton.getAttribute('href'));
    expect(playButton.getAttribute('href'))
      .toEqual(generatePath(RoutePath.player, { id }));
  });

  it('renders a "My list" button', () => {
    const filmCardButton = new MockProviderWithComponent(<FilmCardButton id={id} />);
    render(filmCardButton.renderTest());

    const myListButton = screen.getByText('My list');
    expect(myListButton.tagName).toBe('SPAN');
  });

  it('renders an "Add review" button with a link to the add review page', () => {
    const filmCardButton = new MockProviderWithComponent(<FilmCardButton id={id} />);
    render(filmCardButton.renderTest());

    const addReviewButton = screen.getByText('Add review');
    expect(addReviewButton.tagName).toBe('A');
    expect(addReviewButton.getAttribute('href')).toBe(RoutePath.add_review);
  });
});
