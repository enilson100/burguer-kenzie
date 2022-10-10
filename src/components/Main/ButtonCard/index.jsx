import { ButtonStyle } from "./styles";

const Button = ({ addCart, elem }) => {
  return (
    <div>
      <ButtonStyle onClick={() => addCart(elem)}>Adicionar</ButtonStyle>
    </div>
  );
};
export default Button;
