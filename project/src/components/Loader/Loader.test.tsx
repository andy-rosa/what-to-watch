import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  test('renders the loader component', () => {
    const { getByTestId } = render(<Loader />);
    const loaderWrapper = getByTestId('loader-wrapper');
    const loader = getByTestId('loader');
    expect(loaderWrapper).toBeInTheDocument();
    expect(loader).toBeInTheDocument();
  });
});
