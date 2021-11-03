import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import RepositoryCard from './RepositoryCard';

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
    render(<RepositoryCard repository={global.repository} />, container);
});

test('renders RepositoryCard info', () => {
    act(() => {
        render(<RepositoryCard repository={global.repository} />, container);
    })

    expect(global.repository.repository.name).toBeTruthy()
    expect(global.repository.repository.description).toBeTruthy()

  });