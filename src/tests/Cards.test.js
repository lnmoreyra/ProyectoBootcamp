import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Cards from './Cards';

const simEvento = {
  _id: 'event_id_18',
  name: 'Nombre del Evento',
  description: 'Descripción del Evento',
  price: '$20',
  image: 'imagen.png',
};

test('renders card details and "More Details" button', () => {
  render(
    <MemoryRouter>
      <Cards evento={simEvento} />
    </MemoryRouter>
  );

  const eventName = screen.getByText('Nombre del Evento');
  const eventDescription = screen.getByText('Descripción del Evento');
  const eventPrice = screen.getByText('$20');
  const moreDetailsButton = screen.getByRole('button', { name: /more details/i });

  expect(eventName).toBeInTheDocument();
  expect(eventDescription).toBeInTheDocument();
  expect(eventPrice).toBeInTheDocument();
  expect(moreDetailsButton).toBeInTheDocument();
});

test('redirects to event details page when "More Details" button is clicked', () => {
  const { container } = render(
    <MemoryRouter>
      <Cards evento={simEvento} />
    </MemoryRouter>
  );

  const moreDetailsButton = screen.getByRole('button', { name: /more details/i });

  userEvent.click(moreDetailsButton);

  // Ensure that clicking the button navigates to the correct URL with the event details
  expect(container.innerHTML).toContain(`/details/${simEvento._id}`);
});
