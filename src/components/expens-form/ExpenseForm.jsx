import React, { useState } from 'react'
import {Button} from '../UI/button/Button'
import Forminput from '../UI/forminput/Forminput'
import styled from "styled-components"

 export const ExpenseForm = ({onShoForm,onNewExpenseadd}) => {
    // event.preventDefault()
    // useState()
   const [title, setTitle] = useState("");
   const [price, setprice]= useState("");
   const [date, setdate]= useState("");


    const cancelHanler = (event) => {
        event.preventDefault()
        onShoForm()
    }
  const titleInputChangeHandler = (event) => {
    
    setTitle(event.target.value);

  }
  const priceInputChangeHandler = (event) => {
    const value = event.target.value
    if(value.charAt(0)!== "-"){
      setprice(event.target.value);
    }
  

  }
  const dateInputChangeHandler = (event) => {
    setdate(event.target.value);

  }
    
    const saveHandler = (event) => {
      event.preventDefault()
    
const expense = {
  title,
  date,
  price
 }
 setTitle("")
 setdate("")
 setprice("")

  onNewExpenseadd(expense)

     
    }

  return (
    <form>
      <Container>
      <ContainerInput>
      <Forminput
   labelName={"Название"}
   inputType={"text"}
   placeholder={"bedite ..."}
   id={"name"}
   value={title}
   onChange={titleInputChangeHandler}
   />
        <Forminput
   labelName={"Количество"}
   inputType={"numder"}
   id={"price"}
   value={price}
    onChange={priceInputChangeHandler}
   />
      </ContainerInput>
    <ContainerInputDate>
    <Forminput
     labelName={"Дата"}
     inputType={"date"}
     placeholder={"ДД.ММ.ГГГГ"}
     id={"date"}
   value={date}
  onChange={dateInputChangeHandler}
     />
    </ContainerInputDate>
   
      </Container>
     
     <ContainerButton>
     <Button 
     style="btnСancel"
     onClick={cancelHanler}
     >Отмена</Button>

     <Button onClick={saveHandler}
    style="btnСheck"
     >Сохронить</Button>
     </ContainerButton>
     
    </form>
    
    
  )
}

const Container = styled.div`
   display: flex;
    flex-direction: column;
`

const ContainerInput = styled.div`
     display: flex;
    flex-direction: row;
    justify-content:center ;
`

const ContainerInputDate = styled.div`
  margin-left: 9.625rem;
`

const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    
`