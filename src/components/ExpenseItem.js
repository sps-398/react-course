import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div>
            <div className="expense_item">
                <div>
                    {props.id}
                </div>
                <div>
                    {props.date.toISOString().split('T')[0]}
                </div>
                <div className="title">
                    {props.title}
                </div>
                <div className='location'>
                    {props.location}
                </div>
                <div className="amount">
                    {props.amount}
                </div>
            </div>
        </div>
    );
}   

export default ExpenseItem;