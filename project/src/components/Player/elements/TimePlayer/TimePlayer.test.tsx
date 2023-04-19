import React from 'react';
import { render, screen } from '@testing-library/react';
import TimePlayer from './TimePlayer';

describe('TimePlayer', () => {
  test('renders the time value', () => {
    render(<TimePlayer />);

    const timeValue = screen.getByText('1:30:29');
    expect(timeValue).toBeInTheDocument();
  });

  test('renders the progress bar and toggler', () => {
    render(<TimePlayer />);

    const progressBar = screen.getByRole('progressbar');
    const toggler = screen.getByText('Toggler');
    expect(progressBar).toBeInTheDocument();
    expect(toggler).toBeInTheDocument();
  });
});
