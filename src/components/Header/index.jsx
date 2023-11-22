import Nav from "../Nav"
import './header.css'
import Logo from '../../assets/images/logo.png'

function Header () {
    return(
        <header>
        <div className="amazing">
        <img className="logo" src={Logo} alt="Logo" /><h3>Amazing <br className="textEvents"/> Events</h3>
        </div>
        <Nav/>
        
        
        
        </header>
    )
}

export default Header