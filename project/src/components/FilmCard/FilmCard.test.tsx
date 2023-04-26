import { render, fireEvent, screen } from '@testing-library/react';
import { generatePath } from 'react-router-dom';
import FilmCard, { FilmCardProps } from './FilmCard';
import { RoutePath } from '../Routers/AppRouter/config/routerConfig';
import MockProviderWithComponent from '../../helpers/decorators/MockProviderWithComponent/MockProviderWithComponent';

const mockFilm: FilmCardProps = {
  name: 'The Godfather',
  posterImage: 'poster-image-url',
  id: 1,
  videoLink: 'video-link-url',
};

describe('FilmCard', () => {
  let filmCard: MockProviderWithComponent;

  beforeEach(() => {
    filmCard = new MockProviderWithComponent(<FilmCard {...mockFilm} />);
  });

  it('should render film card with correct details', () => {
    render(filmCard.renderTest());
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
  });

  it('should navigate to film details page when clicked', () => {
    render(filmCard.renderTest());
    const filmCardLink = screen.getByTestId('link-to-film');
    expect(filmCardLink.getAttribute('href')).toBe(generatePath(RoutePath.film, { id: mockFilm.id }));
  });

  it('should play video when hovered over', () => {
    render(filmCard.renderTest());
    const filmCardComponent = screen.getByRole('article');
    fireEvent.mouseOver(filmCardComponent);
    expect(screen.getByText(`${mockFilm.name}`)).toBeInTheDocument();
  });
});
