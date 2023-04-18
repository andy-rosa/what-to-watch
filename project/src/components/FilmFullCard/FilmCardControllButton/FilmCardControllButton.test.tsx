import React from 'react';
import { render } from '@testing-library/react';
import { generatePath } from 'react-router-dom';
import { RoutePath } from '../../Routers/AppRouter/config/routerConfig';
import FilmCardButton from './FilmCardControllButton';

//отвалились тесты
describe('FilmCardButton', () => {
  const id = 123;

  it('renders a play button with a link to the player page', () => {
    const { getByText } = render(<FilmCardButton id={id} />);
    const playButton = getByText('Play');
    expect(playButton.tagName).toBe('A');
    expect(playButton.getAttribute('href')).toBe(generatePath(RoutePath.player, { id }));
  });

  it('renders a "My list" button', () => {
    const { getByText } = render(<FilmCardButton id={id} />);
    const myListButton = getByText('My list');
    expect(myListButton.tagName).toBe('BUTTON');
  });

  it('renders an "Add review" button with a link to the add review page', () => {
    const { getByText } = render(<FilmCardButton id={id} />);
    const addReviewButton = getByText('Add review');
    expect(addReviewButton.tagName).toBe('A');
    expect(addReviewButton.getAttribute('href')).toBe(RoutePath.add_review);
  });
});
