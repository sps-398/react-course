import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = props.expenses;

    return (
        <div>
          {expenses.map(expense => {
            return (
              <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} location={expense.location}></ExpenseItem>
            )
          })}
        </div>
    );
}

export default Expenses;