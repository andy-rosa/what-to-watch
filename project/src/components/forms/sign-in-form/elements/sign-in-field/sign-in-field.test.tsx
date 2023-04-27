import { render, screen } from '@testing-library/react';
import SignInField from './sign-in-field';

describe('sign-in-field component', () => {
  const labelText = 'Username';
  const entityForm = 'sign-in';

  it('renders input with label', () => {
    render(<SignInField label={labelText} entityForm={entityForm} />);
    const input = screen.getByLabelText(labelText);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', labelText);
    expect(input).toHaveAttribute('name', 'text');
    expect(input).toHaveAttribute('id', `${entityForm}-text`);
  });
});
