// Pretend delay
export const waait = () => new Promise((res) => setTimeout(res, Math.random() * 2000));

// Generate random color
const generateRandomColor = () => {
	const existingBudgetLenght = fetchData('budgets')?.length ?? 0;
	return `${existingBudgetLenght * 100} 45% 50%`;
};

// Local storage
export const fetchData = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

// Get all items from Local Storage
export const getAllMatchingItems = ({ category, key, value }) => {
	const data = fetchData(category) ?? [];
	return data.filter((item) => item[key] === value);
};

// Delete item from Local Storage
export const deleteItem = ({ key, id }) => {
	const existingData = fetchData(key);
	if (id) {
		const newData = existingData.filter((item) => item.id !== id);
		return localStorage.setItem(key, JSON.stringify(newData));
	}
	return localStorage.removeItem(key);
};

// Create Budget
export const createBudget = ({ name, amount }) => {
	const newItem = {
		id: crypto.randomUUID(),
		name: name,
		createdAt: Date.now(),
		amount: +amount,
		color: generateRandomColor(),
	};
	const existingBudgets = fetchData('budgets') ?? [];
	return localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]));
};

// Create Expense
export const createExpense = ({ name, amount, budgetId }) => {
	const newItem = {
		id: crypto.randomUUID(),
		name: name,
		createdAt: Date.now(),
		amount: +amount,
		budgetId: budgetId,
	};
	const existingExpense = fetchData('expenses') ?? [];
	return localStorage.setItem('expenses', JSON.stringify([...existingExpense, newItem]));
};

// Calculate total spent by budget
export const calculateSpentByBudget = (budgetId) => {
	const expenses = fetchData('expenses') ?? [];
	const budgetSpent = expenses.reduce((acc, expense) => {
		// check if  expense.id === budget.id passed in
		if (expense.budgetId !== budgetId) return acc;

		// add current amount to total
		return (acc += expense.amount);
	}, 0);
	return budgetSpent;
};

// FORMATING
// formating dates
export const formatDateToLocaleString = (epoch) => new Date(epoch).toLocaleDateString();

// Formating percentages
export const formatPercentage = (amt) => {
	return amt.toLocaleString(undefined, {
		style: 'percent',
		minimumFractionDigits: 0,
	});
};

// Formating currency
export const formatCurrency = (amt) => {
	return amt.toLocaleString(undefined, {
		style: 'currency',
		currency: 'EUR',
	});
};
