import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {   
    return (
        <div>
            <div className="expense_item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <ExpenseDetails id={props.id} title={props.title} location={props.location} amount={props.amount} />
            </div>
        </div>
    );
}   

export default ExpenseItem;