import React from 'react';
import { render, screen } from '@testing-library/react';
import Player from './Player';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Player', () => {

  it('renders video and exit button', () => {
    render(
      <Player
        videoLink="https://example.com/video.mp4"
        previewImage="https://example.com/image.jpg"
      />
    );
    const video = screen.getByRole('video') as HTMLVideoElement;
    expect(video).toBeInTheDocument();
    expect(video.src).toBe('https://example.com/video.mp4');
    expect(video.poster).toBe('https://example.com/image.jpg');
    const exitButton = screen.getByText('Exit');
    expect(exitButton).toBeInTheDocument();
  });
});
