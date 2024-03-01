// rrd imports
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import Main, { mainLoader } from './layouts/Main';

// Actions
import { logoutAction } from './actions/logout';
import { deleteBudget } from './actions/deleteBudget';

// Routes
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import ExpensesPage, { expensesAction, expensesLoader } from './pages/ExpensesPage';
import BudgetPage, { budgetAction, budgetLoader } from './pages/BudgetPage';
import Error from './pages/Error';

// Library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
	{
		path: '/easybudget',
		element: <Main />,
		loader: mainLoader,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Dashboard />,
				loader: dashboardLoader,
				action: dashboardAction,
				errorElement: <Error />,
			},
			{
				path: '/easybudget/budget/:id',
				element: <BudgetPage />,
				loader: budgetLoader,
				action: budgetAction,
				errorElement: <Error />,
				children: [
					{
						path: 'delete',
						action: deleteBudget,
					},
				],
			},
			{
				path: '/easybudget/expenses',
				element: <ExpensesPage />,
				loader: expensesLoader,
				action: expensesAction,
				errorElement: <Error />,
			},
			{
				path: '/easybudget/logout',
				action: logoutAction,
			},
		],
	},
]);

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} basename='easybudget' />
			<ToastContainer />
		</div>
	);
}

export default App;
