import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import AddReviewForm from './add-review-form';
import MockProviderWithComponent
  from '../../../hoc/mock-provider-with-component/mock-provider-with-component';
/* eslint-disable */

describe('AddReviewForm', () => {
  let form: MockProviderWithComponent;

  beforeEach(() => {
    form = new MockProviderWithComponent(<AddReviewForm />);
  });

  it('should update text value on input change', () => {
    render(form.renderTest());
    const input = screen.getByPlaceholderText('Review text') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test review text' } });
    expect(input.value).toBe('Test review text');
  });

  it('should update rating value on radio button change', () => {
    render(form.renderTest());
    const ratingRadio = screen.getByLabelText('Rating 4') as HTMLInputElement;
    fireEvent.click(ratingRadio);
    expect(ratingRadio.checked).toBe(true);
  });
});
