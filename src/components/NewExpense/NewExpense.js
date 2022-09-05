import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props) {
  const[isEditing,setIsEditing] = useState(false)
  const childtoparent = userdate =>{
    const expenseData = {
      ...userdate,
      id:Math.random().toString()
    };
    props.onSaveExpenses(expenseData)
    setIsEditing(false)
  } 
  const formOpen = () =>{
    setIsEditing(true)
  }
  const formCancel = () => {
    setIsEditing(false)
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick = {formOpen}>add new expenses</button>}
       {isEditing && <ExpenseForm onSaveExpenses={childtoparent} onCancel ={formCancel}/>}
    </div>
  )
}
