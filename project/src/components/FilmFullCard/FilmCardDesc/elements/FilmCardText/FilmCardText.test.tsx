import React from 'react';
import { render } from '@testing-library/react';
import FilmCardText, { FilmCardTextProps } from './FilmCardText';
import {Films} from "../../../../../types/films";

const mockFilm: Pick<Films, FilmCardTextProps> = {
  description: 'A great film',
  director: 'John Smith',
  starring: ['Actor One', 'Actor Two'],
};

describe('FilmCardText', () => {
  it('renders the description', () => {
    const { getByText } = render(<FilmCardText {...mockFilm} />);
    const descriptionElement = getByText(mockFilm.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the director', () => {
    const { getByText } = render(<FilmCardText {...mockFilm} />);
    const directorElement = getByText(`Director: ${mockFilm.director}`);
    expect(directorElement).toBeInTheDocument();
  });

  it('renders the starring actors', () => {
    const { getByText } = render(<FilmCardText {...mockFilm} />);
    const starringElement = getByText(`Starring: ${mockFilm.starring.join(', ')}`);
    expect(starringElement).toBeInTheDocument();
  });
});
