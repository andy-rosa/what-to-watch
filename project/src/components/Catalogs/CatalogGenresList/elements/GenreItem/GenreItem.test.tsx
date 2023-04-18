import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {useDispatch, useSelector} from 'react-redux';
import GenreItem, {GenreItemProps} from './GenreItem';
import {genreActions} from '../../../../../store/Genre/slice/genreSlice';
import {GenreName} from '../../../../../types/genre';

jest.mock('react-redux');

describe('GenreItem component', () => {
  const mockProps: GenreItemProps = {
    name: GenreName.DRAMAS,
  };

  beforeEach(() => {
    (useDispatch as jest.Mock).mockClear();
    (useSelector as jest.Mock).mockClear();
  });

  it('renders the genre name', () => {
    (useSelector as jest.Mock).mockReturnValueOnce('');
    render(<GenreItem {...mockProps} />);

    const genreLink = screen.getByRole('link');
    expect(genreLink).toHaveTextContent(mockProps.name);
  });

  it('applies the active class if the genre is selected', () => {
    (useSelector as jest.Mock).mockReturnValueOnce(mockProps.name);
    render(<GenreItem {...mockProps} />);

    const genreItem = screen.getByRole('listitem');
    expect(genreItem).toHaveClass('catalog__genres-item--active');
  });

  it('dispatches the select action when clicked', () => {
    const dispatchMock = jest.fn();
    (useDispatch as jest.Mock).mockReturnValueOnce(dispatchMock);
    (useSelector as jest.Mock).mockReturnValueOnce('');

    render(<GenreItem {...mockProps} />);

    const genreLink = screen.getByRole('link');
    fireEvent.click(genreLink);

    expect(dispatchMock).toHaveBeenCalledWith(genreActions.select(mockProps.name));
  });
});
