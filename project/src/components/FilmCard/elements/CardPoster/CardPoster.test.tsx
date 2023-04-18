import React from 'react';
import { render } from '@testing-library/react';
import CardPoster from './CardPoster';

describe('CardPoster', () => {
  const props = {
    posterImage: 'https://example.com/image.jpg',
    name: 'Test Film',
  };

  it('renders the poster image and title', () => {
    const { getByAltText, getByText } = render(<CardPoster {...props} />);
    const image = getByAltText(props.name);
    const title = getByText(props.name);

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it('sets the correct image source and dimensions', () => {
    const { getByAltText } = render(<CardPoster {...props} />);
    const image = getByAltText(props.name);

    expect(image).toHaveAttribute('src', props.posterImage);
    expect(image).toHaveAttribute('width', '280');
    expect(image).toHaveAttribute('height', '175');
  });
});
