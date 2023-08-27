import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense';
import React, { useState } from 'react';

function App() {
  const items = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Chennai'
    },
    { id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: 'Noida'
  },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Mumbai'
    }
  ];

  const [expenses, setExpenses] = useState(items);

  function addExpenseHandler(newExpense) {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;