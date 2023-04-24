import React from 'react';
import { render, screen } from '@testing-library/react';
import FilmCardText, { FilmCardTextProps } from './FilmCardText';
import {Films} from '../../../../../types/films';

const mockFilm: Pick<Films, FilmCardTextProps> = {
  description: 'A great film',
  director: 'John Smith',
  starring: ['Actor One', 'Actor Two'],
};

describe('FilmCardText', () => {
  it('renders the description', () => {
    render(<FilmCardText {...mockFilm} />);
    const descriptionElement = screen.getByText(mockFilm.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the director', () => {
    render(<FilmCardText {...mockFilm} />);
    const directorElement = screen.getByText(`Director: ${mockFilm.director}`);
    expect(directorElement).toBeInTheDocument();
  });

  it('renders the starring actors', () => {
    render(<FilmCardText {...mockFilm} />);
    const starringElement = screen.getByText(`Starring: ${mockFilm.starring.join(', ')}`);
    expect(starringElement).toBeInTheDocument();
  });
});
