 import "../expensitem/expensitem.css"
 export const ExpensItem = ({date,title,price}) => {
    // console.log(date);
  return (
    <div className="expensitem-div">
      <div className="container-dateandtitle">
      <p className="date-text">{date.toString()}</p>
        <p>{title}</p>
      </div>
        
        <p className="price">{price}</p>

    </div>
  )
}
