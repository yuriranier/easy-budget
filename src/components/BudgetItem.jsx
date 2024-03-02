// helper functions
import { calculateSpentByBudget, formatCurrency, formatPercentage } from '../helpers';

// rrd imports
import { Form, Link } from 'react-router-dom';

// library imports
import { BanknotesIcon, TrashIcon } from '@heroicons/react/24/outline';

function BudgetItem({ budget, showDelete = false }) {
	const { id, name, amount, color } = budget;
	const spent = calculateSpentByBudget(id);
	return (
		<div className='budget' style={{ '--accent': color }}>
			<div className='progress-text'>
				<h3>{name}</h3>
				<p>{formatCurrency(amount)} Budgeted</p>
			</div>
			<progress max={amount} value={spent}>
				{formatPercentage(spent / amount)}
			</progress>
			<div className='progress-text'>
				<small>{formatCurrency(spent)} spent</small>
				<small>{formatCurrency(amount - spent)} remaining</small>
			</div>
			{showDelete ? (
				<>
					<Form
						method='post'
						action='delete'
						onSubmit={(event) => {
							if (!confirm('Are you sure you want to delete the budget?')) {
								event.preventDefault();
							}
						}}
					>
						<button type='submit' className='btn'>
							{'Delete Budget'}
							<TrashIcon width={20} />{' '}
						</button>
					</Form>
					<Form
						method='post'
						onSubmit={(event) => {
							if (!confirm('Are you sure you want to delete the budget?')) {
								event.preventDefault();
							}
						}}
					>
						<input type='hidden' name='_action' value='deleteBudget' />
						<button type='submit' className='btn'>
							{'Delete Budget OPT 2'}
							<TrashIcon width={20} />{' '}
						</button>
					</Form>
				</>
			) : (
				<div className='flex-sm'>
					<Link to={`/easy-budget/budget/${id}`} className='btn'>
						<span>View Details</span> <BanknotesIcon width={20} />
					</Link>
				</div>
			)}
		</div>
	);
}

export default BudgetItem;