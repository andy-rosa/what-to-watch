import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ReviewText from './ReviewText';

describe('ReviewText', () => {
  it('renders textarea with correct value', () => {
    const value = 'Test review text';
    render(<ReviewText value={value} />);
    const textarea = screen.getByPlaceholderText('Review text') ;
    expect(textarea.value).toBe(value);
  });

  it('should call onChange with correct value', () => {
    const handleChange = jest.fn();
    render(
      <ReviewText value="" onChange={handleChange} />
    );
    const input = screen.getByPlaceholderText('Review text');
    fireEvent.change(input, { target: { value: 'Test review text' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders submit button', () => {
    render(<ReviewText value="" />);
    const submitButton = screen.getByRole('button', { name: /post/i });
    expect(submitButton).toBeInTheDocument();
  });
});
