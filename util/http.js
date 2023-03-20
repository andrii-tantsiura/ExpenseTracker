import axios from "axios";

const BACKEND_ROOT =
  "https://expensetracker-3cb0c-default-rtdb.europe-west1.firebasedatabase.app";

export function storeExpense(expenseData) {
  axios.post(BACKEND_ROOT + "/expenses.json", expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_ROOT + "/expenses.json");
  const expenses = [];

  for (let key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}
