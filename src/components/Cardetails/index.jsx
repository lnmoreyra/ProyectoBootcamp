import { useSelector } from 'react-redux';
import './cardetails.css'
import 'bootstrap/dist/css/bootstrap.css';




function Cardetails(evento) {

  

    return (
      
        <>
          {
            <div className="car2">
              <div className="img-md-4">
                <img src={evento.image} alt={evento.name} />
              </div>
              <div className="col-md-8">
                <div className='card-body'>
                  <h5 className='card-title'>{evento.name}</h5>
                  <p className='card-text'>{evento.description}</p>
                  <p className='card-text'>Fecha: {evento.date}</p>
                  <p className='card-text'>Precio: {evento.price}</p>
                </div>
              </div>
            </div>
            
            
          }
        </>
      );
    }


export default Cardetails