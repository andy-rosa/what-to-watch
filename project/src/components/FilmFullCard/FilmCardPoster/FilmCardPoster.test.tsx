import React from 'react';
import { render } from '@testing-library/react';
import FilmCardPoster from './FilmCardPoster';

describe('FilmCardPoster', () => {
  it('renders poster image with correct alt text', () => {
    const posterImage = 'https://example.com/poster.jpg';
    const name = 'The Great Movie';
    const { getByAltText } = render(<FilmCardPoster posterImage={posterImage} name={name} />);
    const posterImg = getByAltText(name);
    expect(posterImg).toHaveAttribute('src', posterImage);
  });
});
