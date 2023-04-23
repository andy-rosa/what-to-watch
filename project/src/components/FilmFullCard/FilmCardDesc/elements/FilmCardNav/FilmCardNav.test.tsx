import React from 'react';
import { render, screen } from '@testing-library/react';
import FilmCardNav from './FilmCardNav';
import MockProviderWithComponent
  from '../../../../../helpers/decorators/MockProviderWithComponent/MockProviderWithComponent';

const mockProps: { id: number } = { id: 1 };

describe('FilmCardNav', () => {
  it('renders the overview and details links', () => {
    const filmCardNav = new MockProviderWithComponent(<FilmCardNav {...mockProps} />);
    render(filmCardNav.renderTest());

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
  });

  it('renders the reviews link with the correct url', () => {
    const filmCardNav = new MockProviderWithComponent(<FilmCardNav {...mockProps} />);
    render(filmCardNav.renderTest());

    const linkElement = screen.getByTestId('review-link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/films/${mockProps.id}/review`);
    expect(linkElement).toHaveAttribute('class', 'film-nav__link');
  });
});
