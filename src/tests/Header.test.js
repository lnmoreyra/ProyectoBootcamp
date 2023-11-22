import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from '../components/Header'

describe('<Header/>', ()=> {

test('Comprobar si el componente renderiza correctamente', ()=> {
    
    render (
        <Router>
            <Header/>
        </Router>    )


})

let titleTest = screen.getByText("Amazing Events")

expect(titleTest).toBeInTheDocument();
})


