import React from 'react'
import "../expensesFilter/Expensesfilter.css"

const ExpensesFilter = ({value,onChange}) => {
  return (
    <div>
        <div className='filter-container'>
            <label className='filter-text'>Фильтр по году</label>
           <select className='select' value={value} onChange={onChange}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>

           </select>
        </div>
       
    </div>
  )
}

export default ExpensesFilter