import styled from "@emotion/styled"


const Button = styled.button`
  padding: ${((props) => props.padding || "15px 30px")};
  margin-left: ${(props) => props.ml || "20px"};
  border: none;
  border: ${(props) => props.bd || "1px solid rgb(5,7,148)"};
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.bg || "white"};
  border-radius: ${(props) => props.br || "10px"};
  cursor: ${(props) => props.cur || "pointer"};
`;


export default Button