import './footer.css';
import { Link } from 'react-router-dom';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import X from '../../assets/images/twitterx.png';
import Gmail from '../../assets/images/gmail.png';
import Whatsapp from '../../assets/images/whatsapp.png';


function Footer() {
  return (
    <footer className='footer-container'>
      <section className='copy'>
        <h6> Amazing Events </h6>
        <p>Copyright © 2023 Amazing Events - Todos los derechos reservados.</p> <br />
        <p> Dirección: Mina Clavero 8504.<br/> C.P. 5000. Córdoba, Argentina.</p>
      </section>
      <section className='nav2'>
            <Link to={"/"}>Home</Link>
            <Link to={"/upcoming"}>Upcoming Events</Link>
            <Link to={"/past"}>Past Events</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/stats"}>Stats</Link>
      </section>
      <section className='suscription'>
        <ul>
          <li>Suscribite</li>
          <li>Novedades</li>
          <li>Condiciones de Pago</li>
          <li>Terminos y Condiciones</li>
        </ul>
      </section>
      <section className='opContact'>
        <div className='contactContainer'>
      <img className="imagesContact" src={Whatsapp} alt="Celular"/><p>3515005800</p>
      </div>
      <div className='contactContainer'>
      <img className="imagesContact" src={Gmail} alt="Email"/><p>ventas@aevents.com</p>
      </div>
        <p>Seguinos:</p>
        <img src={Facebook} alt="Facebook"/>
        <img src={Instagram} alt="Instagram"/>
        <img src={X} alt="TwitterX"/>
      </section>
    </footer>
  )
}

export default Footer;
