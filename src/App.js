import './App.css';
import {Newexpense} from './components/new-expense/Newexpense';
import { Expenses } from './components/expenses/Expenses';
import { useState } from 'react';


function App() {

const [expenses,setExpenses] = useState([
  {
    title:"Туалетный бумага",
    price:300,
    date: new Date()
  },
  {
    title:" zariatnik",
    price:400,
    date: new Date() 
  }
])

  const addNewExpensehandler = (data) => {
    const ubdatedExpenses = [...expenses]
    ubdatedExpenses.push(data)
    setExpenses(ubdatedExpenses)
  }
  return (
    <div className="App">
     <Newexpense onNewExpenseadd={addNewExpensehandler}/>
     <Expenses
     expenses={expenses}
     />

    </div>
  );
}

export default App;
