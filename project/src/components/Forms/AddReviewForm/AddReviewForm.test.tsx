import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import AddReviewForm from './AddReviewForm';

describe('AddReviewForm', () => {
  it('should update text value on input change', () => {
    render(<AddReviewForm />);
    const input = screen.getByPlaceholderText('Review text') ;
    fireEvent.change(input, { target: { value: 'Test review text' } });
    expect(input.value).toBe('Test review text');
  });

  it('should update rating value on radio button change', () => {
    render(<AddReviewForm />);
    const ratingRadio = screen.getByLabelText('Rating 4') ;
    fireEvent.click(ratingRadio);
    expect(ratingRadio.checked).toBe(true);
  });
});
