import { render, screen } from '@testing-library/react';
import Todo from '../../components/Todo';
import '@testing-library/jest-dom/extend-expect';

describe("Todo component", () => {
    test('Render Todo component', () => {
        render(<Todo />);
        const todoElement = screen.getByTestId('todo')
        expect(todoElement).toBeInTheDocument()
    });

    test('Render Todo component with header', () => {
        render(<Todo />);
        const todoHeader = screen.getByTestId('todo-header')
        expect(todoHeader).toHaveTextContent("TODO List")
        
    });
})

 