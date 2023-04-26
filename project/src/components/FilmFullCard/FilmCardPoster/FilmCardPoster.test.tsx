import React from 'react';
import { render, screen } from '@testing-library/react';
import FilmCardPoster from './FilmCardPoster';

describe('FilmCardPoster', () => {
  it('renders poster image with correct alt text', () => {
    const posterImage = 'https://example.com/poster.jpg';
    const name = 'The Great Movie';
    render(<FilmCardPoster posterImage={posterImage} name={name} />);
    const posterImg = screen.getByAltText(name);
    expect(posterImg).toHaveAttribute('src', posterImage);
  });
});
