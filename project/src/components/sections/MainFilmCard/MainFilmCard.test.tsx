import {render, screen} from '@testing-library/react';
import MainFilmCard from './MainFilmCard';
import MockProviderWithComponent from '../../../helpers/decorators/MockProviderWithComponent/MockProviderWithComponent';

describe('MainFilmCard', () => {
  const title = 'The Grand Budapest Hotel';
  const genre = 'Comedy';
  const year = 2014;

  it('renders the component with given props', () => {
    const mainFilmCard = new MockProviderWithComponent( <MainFilmCard title={title} genre={genre} year={year} />);
    render(mainFilmCard.renderTest());

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(genre)).toBeInTheDocument();
    expect(screen.getByText(year)).toBeInTheDocument();
    expect(screen.getByAltText(title)).toBeInTheDocument();
  });
});
