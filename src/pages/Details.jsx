import { useParams } from 'react-router-dom';
import Layout from '../layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import Cardetails from '../components/Cardetails';
import { useSelector } from 'react-redux';




function Details() {
  
  const eventos = useSelector(store=>store.eventos)
  let params = useParams();
  const [eventoDetallado, setEventoDetallado] = useState(null);

  useEffect(() => {


//        const eventosInfo = response.data.events;
        
      const evento = eventos.find(evento => evento._id == params.id);
        if (evento) {
          setEventoDetallado(evento);
}}, [eventos, params.id]);

  return (
    
    <Layout>

<main>
      <h1>DETAIL</h1>
      {eventoDetallado ? (
        
        <div className='detail-card'>
        <Cardetails
          image={eventoDetallado.image}
          name={eventoDetallado.name}
          description={eventoDetallado.description}
          price={eventoDetallado.price}
          date={eventoDetallado.date}
        />
        </div>
      ) : (
        <p>Evento no encontrado.</p>
      )}

</main>
  </Layout>
  
  );
}

export default Details