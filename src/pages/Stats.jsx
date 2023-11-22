import Layout from "../layout/layout";
import Tables from "../components/Tables";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import eventsActions from "../store/actions/eventsActions";


function Stats() {


	const dispatch = useDispatch()

	const eventos = useSelector((state) => state.eventos);

	useEffect(() => {
		dispatch (eventsActions.get_events());
	}, [dispatch])


	return (
		<>
        <main>
			<Layout>
				<h1>STATS</h1>
				<Tables eventos={eventos} />
			</Layout>
		</main>
		</>
	)
}

export default Stats;