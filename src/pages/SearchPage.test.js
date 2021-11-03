import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import SearchBar from '../components/SearchBar';
import SearchPage from './SearchPage'

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders without crashing', () => {
    render(<SearchPage />, container);
});

test('renders SearchPage text', () => {
  render(<SearchPage />);
  const linkElement = screen.getByText(/To search for a GitHub user, type in the username/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders page elements', () => {
    act(() => {
        render(<SearchPage />, container);
    })
    const about = document.createElement("div");
    document.body.appendChild(about);
    render(<SearchBar/>, about)
});
