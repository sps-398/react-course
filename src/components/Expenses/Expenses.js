import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter";
import React, { useState } from 'react';

function Expenses(props) {
    const expenses = props.expenses;

    const [filteredYear, setFilteredYear] = useState('2020');

    function filterChangeHandler(selectedYear) {
      setFilteredYear(selectedYear);
    }

    return (
        <div>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
          {expenses.map(expense => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                location={expense.location}
              ></ExpenseItem>
            ))}
        </div>
    );
}

export default Expenses;