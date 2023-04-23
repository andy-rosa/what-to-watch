import { render } from '@testing-library/react';
import MainFilmCard from './MainFilmCard';
import MockProviderWithComponent from "../../../helpers/decorators/MockProviderWithComponent/MockProviderWithComponent";

describe('MainFilmCard', () => {
  const title = 'The Grand Budapest Hotel';
  const genre = 'Comedy';
  const year = 2014;

  it('renders the component with given props', () => {
    const mainFilmCard = new MockProviderWithComponent( <MainFilmCard title={title} genre={genre} year={year} />)
    const { getByText, getByAltText } = render(mainFilmCard.renderTest());

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(genre)).toBeInTheDocument();
    expect(getByText(year)).toBeInTheDocument();
    expect(getByAltText(title)).toBeInTheDocument();
  });
});
