import "../button/Button.css";
 export const Button = ({ children,onClick,style}) => {
  return (
    <button className={style} onClick={onClick} >
      {children}
    </button>
  );
};

