import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddReviewForm from './AddReviewForm';

describe('AddReviewForm', () => {
  it('should update text value on input change', () => {
    const { getByPlaceholderText } = render(<AddReviewForm />);
    const input = getByPlaceholderText('Review text') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test review text' } });
    expect(input.value).toBe('Test review text');
  });

  it('should update rating value on radio button change', () => {
    const { getByLabelText } = render(<AddReviewForm />);
    const ratingRadio = getByLabelText('Rating 4') as HTMLInputElement;
    fireEvent.click(ratingRadio);
    expect(ratingRadio.checked).toBe(true);
  });
});
