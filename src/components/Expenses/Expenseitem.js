import React from 'react'
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css'
import Card from '../UI/Card';
const Expenseitem = (props) => {
   // console.log(props);
  // console.log(props.date);
  
  //console.log(title);
  
   return(
     <li>
    <Card className='expense-item'>
    <ExpenseDate date={props.date}/>
    <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}/-</div>
    </div>
    
</Card>
</li>
  )
}
export default Expenseitem;
