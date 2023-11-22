import './nav.css';
import { Link } from "react-router-dom";

function Nav () {
    return(
        <nav className="nav1">
            <Link to={"/"}>Home</Link>
            <Link to={"/upcoming"}>Upcoming Events</Link>
            <Link to={"/past"}>Past Events</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/stats"}>Stats</Link>
        </nav>
    )
}

export default Nav