import { useSelector } from 'react-redux';
import './tables.css'





function Tables() {

  const eventos = useSelector(store=>store.eventos)

  const eventosFuturos = eventos.filter((evento) => evento.estimate > 0);
  const eventosPasados = eventos.filter((evento) => evento.assistance > 0);

  const findEventWithExtremeValue = (eventos, property, comparator) => {
    if (eventos.length === 0) return null;
    return eventos.reduce((maxEvent, currentEvent) =>
      comparator(currentEvent[property], maxEvent[property]) ? currentEvent : maxEvent
    );
  };

  const findEventWithExtremeAssistance = (eventos, isMax) => {
    return findEventWithExtremeValue(eventos, 'assistance', (a, b) => (isMax ? a > b : a < b));
  };

  const findEventWithExtremeCapacity = (eventos, isMax) => {
    return findEventWithExtremeValue(eventos, 'capacity', (a, b) => (isMax ? a > b : a < b));
  };

  const eventosFuturosPorCategoria = eventosFuturos.reduce((agrupados, evento) => {
    if (!agrupados[evento.category]) {
      agrupados[evento.category] = [];
    }
    agrupados[evento.category].push(evento);
    return agrupados;
  }, {});

  const eventosPasadosPorCategoria = eventosPasados.reduce((agrupados, evento) => {
    if (!agrupados[evento.category]) {
      agrupados[evento.category] = [];
    }
    agrupados[evento.category].push(evento);
    return agrupados;
  }, {});
  const calculateTotalIncomeAndAttendancePercentage = (eventos, property) => {
    const totalIncome = eventos.reduce((total, evento) => total + evento.price * evento[property], 0);
    const totalAttendance = eventos.reduce((total, evento) => total + evento[property], 0);
    return { totalIncome, totalAttendance };
  };

  return (
    <div>
      <h2 className='titleH2'>Events Statistic</h2>
      <table className="Statics-table">
        <thead>
          {/* <tr>
            <td colSpan="3"><h2>Events Statistic</h2></td>
          </tr> */}
        </thead>
        <tbody>
          <tr>
            <th>Events with the highest percentage of attendance</th>
            <th>Events with the lowest percentage of attendance</th>
            <th>Events with the largest capacity</th>
          </tr>
          <tr>
            <td>{findEventWithExtremeAssistance(eventos, true)?.name}</td>
            <td>{findEventWithExtremeAssistance(eventos, false)?.name}</td>
            <td>{findEventWithExtremeCapacity(eventos, true)?.name}</td>
          </tr>
        </tbody>
      </table>

      {/* Estadísticas de Eventos Futuros */}
      <h2 className='titleH2'>Upcoming events statistics by category</h2>
      <table className="upcoming-table">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Ingreso</th>
            <th>Porcentaje de Asistencia</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(eventosFuturosPorCategoria).map(([categoria, eventos]) => {
            const { totalIncome, totalAttendance } = calculateTotalIncomeAndAttendancePercentage(eventos, 'estimate');
            const porcentajeTotalFuturos = Math.ceil((totalAttendance / totalIncome) * 100);

            return (
              <tr key={categoria}>
                <td>{categoria}</td>
                <td>${totalIncome}</td>
                <td>{porcentajeTotalFuturos}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Estadísticas de Eventos Pasados */}
      <h2 className='titleH2'>Past Events statistics by category</h2>
      <table className="past-table">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Ingreso</th>
            <th>Porcentaje de Asistencia</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(eventosPasadosPorCategoria).map(([categoria, eventos]) => {
            const { totalIncome, totalAttendance } = calculateTotalIncomeAndAttendancePercentage(eventos, 'assistance');
            const porcentajeTotalPasados = Math.ceil((totalAttendance / totalIncome) * 100);

            return (
              <tr key={categoria}>
                <td>{categoria}</td>
                <td>${totalIncome}</td>
                <td>{porcentajeTotalPasados}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default Tables;