import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostSection from './view';

//---------------------------------------------------------------------------------------------------------------------

// belum sukses

test.skip('renders input', async () => {

  const testText = "hai";

  render(<PostSection />);

  const input = screen.getByTestId("input");
  userEvent.type(input, testText)

  const textElement = await screen.findByDisplayValue(testText);
  expect(textElement).toBeInTheDocument;

});