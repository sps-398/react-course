import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter";
import React, { useState } from 'react';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const expenses = props.expenses;

    function filterChangeHandler(selectedYear) {
      setFilteredYear(selectedYear);
    }

    return (
        <div>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
          {expenses
            .filter(expense => expense.date.getFullYear().toString() === filteredYear)
            .map(expense => {
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
            })}
        </div>
    );
}

export default Expenses;