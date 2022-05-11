import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GetSection from './view';

//---------------------------------------------------------------------------------------------------------------------

test('renders button', () => {
  render(<GetSection />);

  const button = screen.getByTestId(/button/i);

  userEvent.click(button);

  // expect(text1);
});