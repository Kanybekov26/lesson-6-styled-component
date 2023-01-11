import { ExpenseForm } from "../expens-form/ExpenseForm";
import { useState } from "react";
import "../new-expense/newexpense.css"
import {Button} from "../UI/button/Button";

export const Newexpense = ({onNewExpenseadd}) => {
   const [showForm,setShowForm] = useState(false)

  const showexpenseForm = () => {
    setShowForm((prevState)=>{
        return !prevState
    })
  };

  return (
    <div className="Newexpense-div">
      {showForm ? (
        <ExpenseForm onShoForm={showexpenseForm} onNewExpenseadd={onNewExpenseadd} />
      ) : (
        <Button style={"btnAdd"} title={""} onClick={showexpenseForm} >Добавить новый расход</Button>
      )}
    </div>
  );
};
