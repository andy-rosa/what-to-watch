import { render, screen, fireEvent } from '@testing-library/react';
import GoBackNavigate from './go-back-navigate';
import Mock = jest.Mock;

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('GoBackNavigate', () => {
  it('renders the component', () => {
    render(<GoBackNavigate />);
    expect(screen.getByText(/Oops you're lost!/i)).toBeInTheDocument();
  });

  it('navigates to the previous page when the "Go Back" button is clicked', () => {
    const navigateMock = jest.fn();
    const useNavigateMock = jest.requireMock<{useNavigate: () => void}>('react-router-dom').useNavigate as Mock;
    useNavigateMock.mockReturnValue(navigateMock);

    render(<GoBackNavigate />);
    const goBackButton = screen.getByRole('button', { name: /go back/i });
    fireEvent.click(goBackButton);

    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});
