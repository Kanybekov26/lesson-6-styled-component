// import "../button/Button.css";
import styled from "styled-components";
export const Button = ({ children, onClick, style }) => {
  return (
    <StyledButton className={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  color: wheat;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #4a026b;
  margin-right:50px;

  &:hover {
    background-color: #041456;
  }

  &:active {
    background-color: #520b73;
  }
`;
