import React from 'react';
import {render, screen} from '@testing-library/react';
import FilmCardDesc, { FilmCardDescProps } from './FilmCardDesc';
import MockProviderWithComponent from '../../../helpers/decorators/MockProviderWithComponent/MockProviderWithComponent';

const mockProps: FilmCardDescProps = {
  rating: 8.5,
  scoresCount: 1200,
  director: 'Christopher Nolan',
  starring: ['Leonardo DiCaprio', 'Ellen Page'],
  description: 'A mind-bending sci-fi masterpiece',
  id: 123
};

describe('FilmCardDesc', () => {
  it('should render film card nav, rating, and text', () => {
    const filmCardDesc = new MockProviderWithComponent(<FilmCardDesc {...mockProps} />);
    render(filmCardDesc.renderTest());

    expect(screen.getByTestId('film-card-nav')).toBeInTheDocument();
    expect(screen.getByTestId('film-card-rating')).toBeInTheDocument();
    expect(screen.getByTestId('film-card-text')).toBeInTheDocument();
  });
});
