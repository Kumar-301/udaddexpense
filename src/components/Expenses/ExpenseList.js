import React from 'react'
import './ExpenseList.css'
import Expenseitem from './Expenseitem'
export default function ExpenseList(props) {
  if(props.items.length === 0){
      return <h2 className='expenses-list__fallback'>no expenses found</h2>
  }
  return (
    <ul className='expenses-list'>
        {props.items.map((expense) =>{
      return <Expenseitem 
      key = {expense.id}
      title={expense.title}
      amount={expense.amount}
      date = {expense.date}/>
    })
        }
    </ul>
  )
}
