import { render, screen } from '@testing-library/react';
import Tables from './Tables';


const sampleEventos = [

];

test('comprobar renderización de tabla event statistics', () => {
  render(<Tables eventos={sampleEventos} />);


  expect(screen.getByText('Events Statistic')).toBeInTheDocument();
  expect(screen.getByText('Upcoming events statistics by category')).toBeInTheDocument();
  expect(screen.getByText('Past Events statistics by category')).toBeInTheDocument();


});

