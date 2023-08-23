import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {
    const [ amount, setAmount ] = useState(props.amount);
    function deleteExpense() {
        document.getElementById(props.id).remove();   
    }
    function changeAmount() {
        console.log('clicked!');
        setAmount('$100');
    }
    return (
        <div>
            <div id={props.id} className="expense_item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <ExpenseDetails id={props.id} title={props.title} location={props.location} amount={amount} />
                <button onClick={deleteExpense}>Delete expense</button>
                <button onClick={changeAmount}>Change amount</button>
            </div>
        </div>
    );
}   

export default ExpenseItem;