import styled from "styled-components"
export const ExpensItem = ({ date, title, price }) => {
  // console.log(date);
  return (
    <ExpensesItemContainer>
      <ContainerDateAndTitle>
        <ContainerDate>
        <span>{new Date(date).toLocaleString("ru-ru", { month: "long" })}</span>
        <span>{new Date(date).getFullYear().toString()}</span>
        <span>{new Date(date).getDate()}</span>
        </ContainerDate>
        
        <p>{title}</p>
      </ContainerDateAndTitle>

      <Price>{price}</Price>
    </ExpensesItemContainer>
  );
};

const ExpensesItemContainer = styled.div`
    border-radius:10px;
    margin-bottom: 20px;
    background: #4B4B4B;
    margin: auto;
    width: 60rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
`
const ContainerDateAndTitle = styled.div`
     display: flex;
 flex-direction: row;
 justify-content: flex-start;
 align-items: center;
`

const ContainerDate = styled.div`
   display: flex;
    flex-direction: column;
border: 2px solid white;
border-radius: 10px;

padding: 10px 15px;
margin-left: 10px;
margin-right: 30px;
`
const Price = styled.p`
  padding: 10px 10px;
gap: 10px;

width: 90px;
height: 30px;


background: #40005D;
border: 1px solid #FFFFFF;
border-radius: 10px;
margin-right: 10px;

`