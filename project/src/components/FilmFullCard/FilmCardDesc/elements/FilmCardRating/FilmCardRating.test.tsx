import React from 'react';
import { render, screen } from '@testing-library/react';
import FilmCardRating from './FilmCardRating';

describe('FilmCardRating', () => {
  const rating = 8.5;
  const scoresCount = 123;

  it('renders rating and number of ratings', () => {
    const { getByText } = render(
      <FilmCardRating rating={rating} scoresCount={scoresCount} />
    );

    expect(getByText(rating.toString())).toBeInTheDocument();
    expect(getByText(`${scoresCount} ratings`)).toBeInTheDocument();
  });

  it('renders "Very good" rating level', () => {
    render(<FilmCardRating rating={rating} scoresCount={scoresCount} />);

    expect(screen.getByText('Very good')).toBeInTheDocument();
  });
});
