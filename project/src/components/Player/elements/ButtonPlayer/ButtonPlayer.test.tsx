import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonPlayer from './ButtonPlayer';

describe('ButtonPlayer component', () => {
  it('renders correctly', () => {
    render(<ButtonPlayer />);
    const playButton = screen.getByRole('button', { name: 'Play' });
    const nameElement = screen.getByText('Transpotting');
    const fullScreenButton = screen.getByRole('button', { name: 'Full screen' });

    expect(playButton).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(fullScreenButton).toBeInTheDocument();
  });
});
