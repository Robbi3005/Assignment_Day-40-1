import { render, screen } from '@testing-library/react';
import App from './App';
import PostSection from './components/PostSection/view';
import '@testing-library/jest-dom/extend-expect';

//---------------------------------------------------------------------------------------------------------------------

test('renders text', () => {
  render(<App />);

  const text1 = screen.getByText(/example/i);
  // const text1 = screen.getByText("example");

  expect(text1).toBeInTheDocument();
});

//---------------------------------------------------------------------------------------------------------------------

test('renders another text', () => {
  render(<App />);

  const text2 = screen.getByTestId('text');

  expect(text2).toBeInTheDocument();
});

//---------------------------------------------------------------------------------------------------------------------

test('renders placeholder', () => {
  render(<PostSection />);

  const title = screen.getByPlaceholderText('Title');

  expect(title).toBeInTheDocument();
});