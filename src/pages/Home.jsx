import './Home.css'
import Layout from "../layout/layout";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import Select from "../components/Select";
import { useSelector } from 'react-redux';



function Home({title}) {

  const [eventosFiltrados, setEventosFiltrados] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  
  const eventos = useSelector(store=>store.eventos)
  

  useEffect(() => {
  

if (title === 'UPCOMING EVENTS') {
  let futuros=eventos.filter(evento => evento.estimate);
  setEventosFiltrados(futuros)
}else if (title === 'PAST EVENTS') {
  let pasados=eventos.filter(evento => evento.assistance);
  setEventosFiltrados(pasados)
} else {
  setEventosFiltrados(eventos)
}


},[eventos, title]);


function filterData(data, categories) {
  let filteredData = eventos;
    
  // Filtra eventos por búsqueda
    if (data) {
      filteredData = filteredData.filter(
        (evento) =>
          evento.name.toLowerCase().includes(data.toLowerCase()));
    }

    // Filtra eventos por categoría (si se seleccionaron categorías)
    if (categories.length > 0) {
      filteredData = filteredData.filter((evento) =>
        categories.includes(evento.category.toLowerCase()));
    }

    setEventosFiltrados(filteredData);
  }  
  
function handleCheckboxFilter(categories) {
  setSelectedCategories(categories);
  filterData(searchText, categories);
}

function filterEvents(data) {
  setSearchText(data);
  filterData(data, selectedCategories);
}

  return (
    <>
      <Layout>
      <main>
        <h1>{title}</h1>
        <form className="search-element">
          <Select handleCheckboxFilter={handleCheckboxFilter} />
          <Search filterEvents={filterEvents} />
        </form>
        <div className="card-container">
          {eventosFiltrados.map((evento) => (
            <Cards evento={evento} key={evento._id} />
          ))}
        </div>
        </main>
      </Layout>
    </>
  );
}

export default Home;
