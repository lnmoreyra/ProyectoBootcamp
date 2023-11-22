import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';

describe('<Nav/>', ()=> {


test('si Nav renderiza correctamente', () => {
  const { getByText } = render(
    <Router>
      <Nav />
    </Router>
  );

  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Upcoming Events')).toBeInTheDocument();
  expect(getByText('Past Events')).toBeInTheDocument();
  expect(getByText('Contact')).toBeInTheDocument();
  expect(getByText('Stats')).toBeInTheDocument();
  });
})
