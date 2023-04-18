import { render, fireEvent } from '@testing-library/react';
import { generatePath } from 'react-router-dom';
import FilmCard, { FilmCardProps } from './FilmCard';
import { RoutePath } from '../Routers/AppRouter/config/routerConfig';

const mockFilm: FilmCardProps = {
  name: 'The Godfather',
  posterImage: 'poster-image-url',
  id: 1,
  videoLink: 'video-link-url',
};

describe('FilmCard', () => {
  it('should render film card with correct details', () => {
    const { getByText, getByAltText } = render(
      <FilmCard {...mockFilm} />);
    expect(getByText(mockFilm.name)).toBeInTheDocument();
    expect(getByAltText(`Poster for ${mockFilm.name}`)).toBeInTheDocument();
  });

  it('should navigate to film details page when clicked', () => {
    const { getByRole } = render(
      <FilmCard {...mockFilm} />
  );
    const filmCard = getByRole('link');
    fireEvent.click(filmCard);
    expect(window.location.pathname).toBe(generatePath(RoutePath.film, { id: mockFilm.id }));
  });

  it('should play video when hovered over', () => {
    const { getByRole, getByTitle } = render(
      <FilmCard {...mockFilm} />
  );
    const filmCard = getByRole('article');
    fireEvent.mouseOver(filmCard);
    expect(getByTitle(`Play ${mockFilm.name}`)).toBeInTheDocument();
  });
});
