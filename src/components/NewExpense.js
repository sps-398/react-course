import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import React, { useState } from 'react';

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    function newExpenseHandler(expenseData) {
        const newExpense = {
            ...expenseData,
            id: Math.random().toString()
        }

        props.addExpense(newExpense);

        setIsEditing(false);
    }

    return (
        <div className="newExpenseContainer">
            {!isEditing && <button className="btn" onClick={() => setIsEditing(true)}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={newExpenseHandler} onCancel={() => setIsEditing(false)}></ExpenseForm>}
        </div>
    )
}

export default NewExpense;