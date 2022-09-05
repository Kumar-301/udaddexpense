import React,{useState} from 'react'
import './Expenses.css'
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
const Expenses = (props) => {
  const[filtered,setFiltered]=useState('2020')
  //console.log(props);
  const filterChange = selectedYear =>{
    setFiltered(selectedYear)
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filtered;
  })

  
  return (
    <div>
      

    <Card className='expenses'>
    <ExpensesFilter selected={filtered} onSaveYear = {filterChange}/>
     <ExpenseChart expenses={filteredExpenses}/>
     <ExpenseList items={filteredExpenses}/>
        
        
        
    </Card>
    </div>
  )
}
export default Expenses;