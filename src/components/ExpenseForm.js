import './ExpenseForm.css';

function ExpenseForm() {
    return (
        <div className="add_expense_form">
            <form>
                <input type="text" onChange={e => console.log(e.target.value)} placeholder="Enter expense title" name="expense_title"></input>
                <input type="number" placeholder="Enter expense amount" name="expense_amount"></input>
                <input type="date" name="expense_date"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default ExpenseForm;