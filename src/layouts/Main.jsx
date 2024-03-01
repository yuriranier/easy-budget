// rrd imports
import { Outlet, useLoaderData } from 'react-router-dom';

// components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

//  helper functions
import { fetchData } from '../helpers';

// loader
export function mainLoader() {
	const userName = fetchData('userName');
	return { userName };
}

const Main = () => {
	const { userName } = useLoaderData();

	return (
		<div className='layout'>
			<Nav userName={userName} />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
export default Main;
