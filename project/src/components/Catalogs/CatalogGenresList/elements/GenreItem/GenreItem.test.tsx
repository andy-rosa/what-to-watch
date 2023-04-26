import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GenreItem, { GenreItemProps } from './GenreItem';
import { genreActions } from '../../../../../store/Genre/slice/genreSlice';
import { GenreName } from '../../../../../types/genre';
import * as ReactRedux from 'react-redux';

jest.mock('react-redux');

describe('GenreItem component', () => {
  const mockProps: GenreItemProps = {
    name: GenreName.DRAMAS,
  };

  beforeEach(() => {
    jest.spyOn(ReactRedux, 'useDispatch').mockClear();
    jest.spyOn(ReactRedux, 'useSelector').mockClear();
  });

  it('renders the genre name', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValueOnce('');
    render(<GenreItem {...mockProps} />);

    const genreLink = screen.getByRole('link');
    expect(genreLink).toHaveTextContent(mockProps.name);
  });

  it('applies the active class if the genre is selected', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValueOnce(mockProps.name);
    render(<GenreItem {...mockProps} />);

    const genreItem = screen.getByRole('listitem');
    expect(genreItem).toHaveClass('catalog__genres-item--active');
  });

  it('dispatches the select action when clicked', () => {
    const dispatchMock = jest.fn();
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValueOnce(dispatchMock);
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValueOnce('');

    render(<GenreItem {...mockProps} />);

    const genreLink = screen.getByRole('link');
    fireEvent.click(genreLink);

    expect(dispatchMock).toHaveBeenCalledWith(genreActions.select(mockProps.name));
  });
});
