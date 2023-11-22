import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders footer links and contact information', () => {
  const { getByText, getByAltText } = render(<Footer />);

  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Upcoming Events')).toBeInTheDocument();
  expect(getByText('Past Events')).toBeInTheDocument();
  expect(getByText('Contact')).toBeInTheDocument();
  expect(getByText('Stats')).toBeInTheDocument();

  expect(getByText('Suscribite')).toBeInTheDocument();
  expect(getByText('Novedades')).toBeInTheDocument();
  expect(getByText('Condiciones de Pago')).toBeInTheDocument();
  expect(getByText('Terminos y Condiciones')).toBeInTheDocument();

  expect(getByText('3515005800')).toBeInTheDocument();
  expect(getByText('ventas@aevents.com')).toBeInTheDocument();

  expect(getByAltText('Celular')).toBeInTheDocument();
  expect(getByAltText('Email')).toBeInTheDocument();
  expect(getByAltText('Facebook')).toBeInTheDocument();
  expect(getByAltText('Instagram')).toBeInTheDocument();
  expect(getByAltText('TwitterX')).toBeInTheDocument();
})