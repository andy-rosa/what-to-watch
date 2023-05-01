import { render, screen } from '@testing-library/react';
import FilmCardRating from './film-card-rating';

describe('FilmCardRating', () => {
  const rating = 8.5;
  const scoresCount = 123;

  it('renders rating and number of ratings', () => {
    render(
      <FilmCardRating rating={rating} scoresCount={scoresCount} />
    );

    expect(screen.getByText(rating.toString())).toBeInTheDocument();
    expect(screen.getByText(`${scoresCount} ratings`)).toBeInTheDocument();
  });

  it('renders "Very good" rating level', () => {
    render(<FilmCardRating rating={rating} scoresCount={scoresCount} />);

    expect(screen.getByText('Very good')).toBeInTheDocument();
  });
});
