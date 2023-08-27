import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    function newExpenseHandler(expenseData) {
        const newExpense = {
            ...expenseData,
            id: Math.random().toString()
        }

        console.log("Inside New Epense ", newExpense);

        props.addExpense(newExpense);
    }

    return (
        <ExpenseForm onSaveExpenseData={newExpenseHandler}></ExpenseForm>
    )
}

export default NewExpense;