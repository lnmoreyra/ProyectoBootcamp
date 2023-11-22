import React from 'react';
import { render } from '@testing-library/react';
import Cardetails from './Cardetails';


const simEvento = {
  name: 'Nombre del Evento',
  description: 'Descripción del Evento',
  date: '2023-12-25',
  price: '$20',
  image: 'imagen.png',
};

test('Cardetails renders correctly with event data', () => {
  const { getByText, getByAltText } = render(<Cardetails {...simEvento} />);

  expect(getByText('Nombre del Evento')).toBeInTheDocument();
  expect(getByText('Descripción del Evento')).toBeInTheDocument();
  expect(getByText('Fecha: 2023-12-25')).toBeInTheDocument();
  expect(getByText('Precio: $20')).toBeInTheDocument();
  expect(getByAltText('Nombre del Evento')).toBeInTheDocument();

});

