import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ReviewRatingItem from './review-rating-item';

describe('ReviewRatingItem', () => {
  it('renders input and label with correct text', () => {
    const value = 7;
    render(<ReviewRatingItem value={value} onChange={() => null} />);
    const input = screen.getByTestId('rating-item');
    const label = screen.getByText(`Rating ${value}`);
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('calls onChange callback when input is clicked', () => {
    const onChange = jest.fn();
    render(<ReviewRatingItem value={7} onChange={onChange} />);
    const input = screen.getByTestId('rating-item');
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
