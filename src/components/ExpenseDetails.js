import './ExpenseDetails.css';

function ExpenseDetails(props) {
    return (
        <div className='expense_detail'>
            <div>
                {props.id}
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
    )
}

export default ExpenseDetails;