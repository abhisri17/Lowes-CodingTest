import { fireEvent, render, screen } from '@testing-library/react';
import SearchImage from './index';

test('should render title of search page', async () => {
    render(<SearchImage />);
    const titleElement = screen.getByText('Image Search Page');
    expect(titleElement).toBeInTheDocument();
});

test('should render input element', async () => {
    render(<SearchImage />);
    const inputElement = screen.getByPlaceholderText("type to search image")
    expect(inputElement).toBeInTheDocument();
});

test('should be able to type in input', async () => {
    render(<SearchImage />);
    const inputElement = screen.getByPlaceholderText("type to search image")
    fireEvent.change(inputElement, {target: {value: 'yellow flower'}})
    expect(inputElement.value).toBe('yellow flower');
});
