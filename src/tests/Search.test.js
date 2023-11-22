
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

test('renders search input and button', () => {
  const mockFilterEvents = jest.fn();
  const { getByPlaceholderText, getByAltText } = render(<Search filterEvents={mockFilterEvents} />);

  const inputElement = getByPlaceholderText('Buscar...');
  const buttonElement = getByAltText('buscar');

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('calls filterEvents function with input value when typing', () => {
  const mockFilterEvents = jest.fn();
  const { getByPlaceholderText } = render(<Search filterEvents={mockFilterEvents} />);

  const inputElement = getByPlaceholderText('Buscar...');

  fireEvent.change(inputElement, { target: { value: 'some search query' } });

  expect(mockFilterEvents).toHaveBeenCalledWith('some search query');
});
