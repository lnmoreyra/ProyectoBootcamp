import Home from './pages/Home';
import Contact from'./pages/Contact';
import Stats from'./pages/Stats';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect } from "react";
import Details from './pages/Details';
import { useDispatch } from 'react-redux';
import eventsActions from './store/actions/eventsActions';

function App() {
  
  
const dispatch = useDispatch()


  useEffect (
    ()=>{
      dispatch (eventsActions.get_events());
    
    }, []
    )


  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Home title="HOME" />} />
        <Route path='/upcoming' element={<Home title="UPCOMING EVENTS" />} />
        <Route path='/past' element={<Home title="PAST EVENTS" />} />
        <Route path='/contact' Component={Contact}/>
        <Route path='/stats' Component={Stats} />
        <Route path="/details/:id" Component={Details} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </Router>
    
    
    </>
  )
}

export default App
