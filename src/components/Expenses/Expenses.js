import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter";
import './Expenses.css';
import React, { useState } from 'react';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const expenses = props.expenses;
  const filteredExpenses = expenses
    .filter(expense => expense.date.getFullYear().toString() === filteredYear);

  let expenseContent = filteredExpenses.map(expense => {
    console.log(expense);
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      ></ExpenseItem>
    )
  });

  if (filteredExpenses.length === 0)
    expenseContent = <p className="user_alert">No Expenses to show!</p>

  else if(filteredExpenses.length === 1)
    expenseContent = <>{expenseContent}<p className="user_alert">Only one expense here, Please add more...</p></>

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      {expenseContent}
    </div>
  );
}

export default Expenses;