import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    const [ enteredTitle, setTitle ] = useState("");
    const [ enteredAmount, setAmount ] = useState("");
    const [ enteredDate, setDate ] = useState("");

    function addExpense(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        for(const entry of formData.entries()) {
            console.log(entry[0]);
            console.log(entry[1]);
        }
    }

    return (
        <div className="add_expense_form_contianer flex">
            <form id="add_expense_form" onSubmit={addExpense} className='add_expense_form flex'>
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