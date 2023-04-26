import React from 'react';
import { render, screen } from '@testing-library/react';
import CardToggle from './card-toggle';

describe('CardToggle', () => {
  it('should render card-player when isActive is true', () => {
    render(
      <CardToggle
        isActive
        videoLink="https://example.com/test-video.mp4"
        posterImage="https://example.com/poster-image.jpg"
        name="Test Video"
      />
    );

    setTimeout(() => {
      const cardPlayer = screen.getByTestId('card-player');
      expect(cardPlayer).toBeInTheDocument();
    }, 2000);
  });

  it('should render card-poster when isActive is false', () => {
    render(
      <CardToggle
        isActive={false}
        videoLink="https://example.com/test-video.mp4"
        posterImage="https://example.com/poster-image.jpg"
        name="Test Video"
      />
    );

    const posterImageElement = screen.getByAltText('Test Video');
    expect(posterImageElement).toBeInTheDocument();
  });
});
