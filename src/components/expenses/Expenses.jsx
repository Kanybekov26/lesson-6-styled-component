import React, { useState } from 'react'
// import "../expenses/expenses.css"
import { ExpensItem } from '../expensitem/ExpensItem'
import ExpensesFilter from '../expensesFilter/ExpensesFilter'
import Chart from '../chart/Chart'
import styled from 'styled-components'
export const Expenses = ({expenses}) => {

 const [selectYear,setSelectYear] = useState("2023")

 const yearChangeHandler = (event) => {
  setSelectYear(event.target.value)
 }

 const FiltredYear = expenses.filter((item)=>{
  // console.log(item);
  const stringifiYear = new Date(item.date).getFullYear().toString()
  
  return selectYear ===  stringifiYear
 })
 console.log(FiltredYear);

  return (
    <Ul>
      <ExpensesFilter
      value={selectYear}
      onChange={yearChangeHandler}
      />
      <Chart items={FiltredYear}/>
        {FiltredYear.map((elem) => {
            // console.log(elem);
            
            return (
                <ExpensItem
                key={elem.title}
                title={elem.title}
                price={elem.price}
                date={elem.date}
                />
            )
        })}
    </Ul>
  )
}

const Ul = styled.ul`
  padding: 20px;
    /* border: 2px solid blueviolet; */
    background: #1F1F1F;
    width: 61.7rem;
    margin: auto;
    border-radius: 20px;
`