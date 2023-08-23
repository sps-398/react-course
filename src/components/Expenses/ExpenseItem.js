import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {
    function deleteExpense() {
        document.getElementById(props.id).remove();   
    }
    return (
        <div>
            <div id={props.id} className="expense_item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <ExpenseDetails id={props.id} title={props.title} location={props.location} amount={props.amount} />
                <button onClick={deleteExpense}>Delete expense</button>
            </div>
        </div>
    );
}   

export default ExpenseItem;