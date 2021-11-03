import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar'

test('renders SearchBar placeholder', () => {
    render(<SearchBar />);
    const linkElement = screen.queryByPlaceholderText(/Search for a GitHub username/i);
    expect(linkElement).toBeInTheDocument();
  });
