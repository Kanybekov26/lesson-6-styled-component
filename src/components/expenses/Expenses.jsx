import React from 'react'
import "../expenses/expenses.css"
import { ExpensItem } from '../expensitem/ExpensItem'
export const Expenses = ({expenses}) => {
  return (
    <ul className='ul'>
        {expenses.map((elem) => {
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
    </ul>
  )
}
