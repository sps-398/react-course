import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [ enteredTitle, setTitle ] = useState("");
    const [ enteredAmount, setAmount ] = useState("");
    const [ enteredDate, setDate ] = useState("");

    function submitForm(e) {
        e.preventDefault();
        
        const expense = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log("Inside Expense Form " + expense);

        props.onSaveExpenseData(expense);

        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <div className="add_expense_form_contianer flex">
            <form id="add_expense_form" onSubmit={submitForm} className='add_expense_form flex'>
                <div className='expense_form_input'>
                    <label>Title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={enteredTitle} placeholder="Enter expense title" name="expense_title"></input>
                </div>
                <div className='expense_form_input'>
                    <label>Amount</label>
                    <input type="number" onChange={e => setAmount(e.target.value)} value={enteredAmount} placeholder="Enter expense amount" name="expense_amount"></input>
                </div>
                <div className='expense_form_input'>
                    <label>Date</label>
                    <input type="date" onChange={e => setDate(e.target.value)} value={enteredDate} name="expense_date"></input>
                </div>
                <div className='expense_form_action flex'>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;