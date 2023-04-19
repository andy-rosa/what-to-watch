import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import Player from './Player';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Player', () => {
  const mockNavigate = jest.fn() as jest.MockedFunction<NavigateFunction>;
  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  it('renders video and exit button', () => {
    render(
      <Player
        videoLink="https://example.com/video.mp4"
        previewImage="https://example.com/image.jpg"
      />
    );
    const video = screen.getByRole('video');
    expect(video).toBeInTheDocument();
    expect(video.src).toBe('https://example.com/video.mp4');
    expect(video.poster).toBe('https://example.com/image.jpg');
    const exitButton = screen.getByText('Exit');
    expect(exitButton).toBeInTheDocument();
  });

  it('calls navigate on exit button click', () => {
    render(
      <Player
        videoLink="https://example.com/video.mp4"
        previewImage="https://example.com/image.jpg"
      />
    );
    const exitButton = screen.getByText('Exit');
    fireEvent.click(exitButton);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
