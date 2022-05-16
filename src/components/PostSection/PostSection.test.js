import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostSection from './view';
import { waitFor } from "@testing-library/dom";
import '@testing-library/jest-dom';

//---------------------------------------------------------------------------------------------------------------------

// belum sukses

test('renders input', async () => {

  const testText = "hai";

  render(<PostSection />);

  const input = screen.getByTestId("input");
  userEvent.type(input, testText)

  const textElement = await screen.findByText(`Title: ${testText}`);
  expect(textElement).toBeInTheDocument();

});

//---------------------------------------------------------------------------------------------------------------------

test('deletes rendered text', async () => {

  const testText = "hai";
  render(<PostSection />);

  const input = screen.getByTestId("input");
  userEvent.clear(input);
  userEvent.type(input, testText)

  const newTextElement = screen.getByTestId('text-output');

  // await waitFor(() => {
  //   expect(newTextElement.innerHTML).toBe(testText);
  // });

  const deleteButton = screen.getByTestId('delete');

  userEvent.click(deleteButton);

  await waitFor(() => {
    expect(newTextElement.innerHTML).toBe('Title: ');
  });

});