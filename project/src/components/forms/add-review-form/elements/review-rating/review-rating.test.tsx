import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewRating from './review-rating';

describe('ReviewRating', () => {
  it('renders 10 review-rating-item components', () => {
    render(<ReviewRating onChange={() => null} />);
    const ratingItems = screen.getAllByTestId('rating-item');
    expect(ratingItems).toHaveLength(10);
  });

});
