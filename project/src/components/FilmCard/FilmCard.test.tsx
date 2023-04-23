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

  it('should render film card with correct details', () => {
    const filmCard = new MockProviderWithComponent(<FilmCard {...mockFilm} />);
    render(filmCard.renderTest());
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
  });

  it('should navigate to film details page when clicked', () => {
    const filmCard = new MockProviderWithComponent(<FilmCard {...mockFilm} />);
    render(filmCard.renderTest());
    const filmCardLink = screen.getByTestId('link-to-film');
    expect(filmCardLink.getAttribute('href')).toBe(generatePath(RoutePath.film, { id: mockFilm.id }));
  });

  it('should play video when hovered over', () => {
    const filmCardComponent = new MockProviderWithComponent(<FilmCard {...mockFilm} />);
    render(filmCardComponent.renderTest());
    const filmCard = screen.getByRole('article');
    fireEvent.mouseOver(filmCard);
    expect(screen.getByText(`${mockFilm.name}`)).toBeInTheDocument();
  });
});
