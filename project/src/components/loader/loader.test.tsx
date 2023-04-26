import React from 'react';
import {render, screen} from '@testing-library/react';
import Loader from './loader';

describe('loader component', () => {
  test('renders the loader component', () => {
    render(<Loader />);
    const loaderWrapper = screen.getByTestId('loader-wrapper');
    const loader = screen.getByTestId('loader');
    expect(loaderWrapper).toBeInTheDocument();
    expect(loader).toBeInTheDocument();
  });
});
