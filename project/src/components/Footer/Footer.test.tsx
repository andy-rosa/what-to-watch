import { render, screen } from '@testing-library/react';
import Footer from './Footer';

//Падает
describe('Footer', () => {
  it('renders the logo and company information', () => {
    render(<Footer />);
    const logo = screen.getByRole('link', { name: /wtw/i });
    const companyInfo = screen.getByText(/what to watch ltd/i);
    expect(logo).toBeInTheDocument();
    expect(companyInfo).toBeInTheDocument();
  });
});
