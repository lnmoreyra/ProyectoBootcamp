import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form component', () => {
  test('renders form inputs and submit button', () => {
    const { getByPlaceholderText, getByLabelText, getByText } = render(<Form />);

    expect(getByPlaceholderText('Ingrese aquí su Nombre (Ej. Alberto)')).toBeInTheDocument();
    expect(getByPlaceholderText('Ingrese aquí su Apellido (Ej. Gómez)')).toBeInTheDocument();
    expect(getByPlaceholderText('Ingrese aquí su Email (Ej. 123@gmail.com)')).toBeInTheDocument();
    expect(getByPlaceholderText('Ingrese celular sin 0 ni 15')).toBeInTheDocument();
    expect(getByPlaceholderText('Ingrese aquí Motivo de Consulta (Ej. Pedido 6874)')).toBeInTheDocument();
    expect(getByPlaceholderText('Ingrese aquí su comentario...')).toBeInTheDocument();
    expect(getByText('Aceptar Terminos y Condiciones.')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument(); // Update this with your actual submit button text
  });

    test('submits the form when submit button is clicked', () => {
    const { getByText, getByLabelText } = render(<Form />);
    const submitButton = getByText('Submit'); // Update this with your actual submit button text

    
    fireEvent.change(getByLabelText('Nombre: '), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Apellido: '), { target: { value: 'Doe' } });
    

    fireEvent.click(submitButton);

    
  });
});



