// rrd imports
import { Form, NavLink } from 'react-router-dom';

// library
import { TrashIcon } from '@heroicons/react/24/solid';

// assets
import logomark from '../assets/logomark.svg';

const Nav = ({ userName }) => {
	return (
		<nav>
			<NavLink to='/easy-budget/' aria-label='Go to home'>
				<img src={logomark} alt='' height={50} style={{ marginRight: '20px' }} />
				<span>EasyBudget</span>
			</NavLink>
			{userName && (
				<Form
					method='post'
					action='logout'
					onSubmit={(event) => {
						if (!confirm('Delete user and all data?')) {
							event.preventDefault();
						}
					}}
				>
					<button
						type='submit'
						className='btn btn--warning'
						onClick={() => (window.location.href = '/easy-budget/')}
					>
						<span>Delete User</span>
						<TrashIcon width={20} />
					</button>
				</Form>
			)}
		</nav>
	);
};
export default Nav;
