import { render, screen } from '@testing-library/react';
import App from './App';
import PostSection from './components/PostSection/view';

//---------------------------------------------------------------------------------------------------------------------

test('renders text', () => {
  render(<App />);

  const text1 = screen.getByText(/example/i);

  expect(text1);
});

test('renders another text', () => {
  render(<App />);

  const text2 = screen.getByTestId('text');

  expect(text2);
});

test('renders placeholder', () => {
  render(<PostSection />);

  const title = screen.getByPlaceholderText('Title');

  expect(title);
});