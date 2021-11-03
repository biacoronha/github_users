import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SearchPage text', () => {
  render(<App />);
  const linkElement = screen.getByText(/To search for a GitHub user, type in the username/i);
  expect(linkElement).toBeInTheDocument();
});
