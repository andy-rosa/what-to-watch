import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the logo and company information', () => {
    render(<Footer />);
    const logo = screen.getByTestId('link-logo');
    const companyInfo = screen.getByText(/what to watch ltd/i);
    expect(logo).toBeInTheDocument();
    expect(companyInfo).toBeInTheDocument();
  });
});
