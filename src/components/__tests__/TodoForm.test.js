import { render, screen } from '@testing-library/react';
import TodoForm from '../../components/TodoForm';
import '@testing-library/jest-dom/extend-expect';

describe("TodoForm component", () => {
    test('Render TodoForm component', () => {
        render(<TodoForm />);
        const todoForm = screen.getByTestId('todo-form')
        expect(todoForm).toBeInTheDocument()
    });

    test('Render "Add a todo" input field.', () => {
        render(<TodoForm edit={false}/>);
        const addTodo = screen.queryByPlaceholderText("Add a todo")
        expect(addTodo).toBeInTheDocument()
    });

    test('Render todo update input field when todo item is editable.', () => {
        render(<TodoForm edit={true}/>);
        const updateTodo = screen.queryByPlaceholderText("Update todo")
        expect(updateTodo).toBeInTheDocument()
    });
                                                                                  
    test('should not render todo update input field when todo item is editable.', () => {
        render(<TodoForm edit={false}/>);
        const updateTodo = screen.queryByPlaceholderText("Update todo")
        expect(updateTodo).not.toBeInTheDocument()
    });

    test('should not render todo update input field when todo item is editable.', () => {
        render(<TodoForm edit={false}/>);
        const updateTodo = screen.queryByPlaceholderText("Update todo")
        expect(updateTodo).not.toBeInTheDocument()
    });


})