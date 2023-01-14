import "../expensitem/expensitem.css";
export const ExpensItem = ({ date, title, price }) => {
  // console.log(date);
  return (
    <div className="expensitem-div">
      <div className="container-dateandtitle">
        <div className="div-date">
        <span>{new Date(date).toLocaleString("ru-ru", { month: "long" })}</span>
        <span>{new Date(date).getFullYear().toString()}</span>
        <span>{new Date(date).getDate()}</span>
        </div>
        
        <p>{title}</p>
      </div>

      <p className="price">{price}</p>
    </div>
  );
};
