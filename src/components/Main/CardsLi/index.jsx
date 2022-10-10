import Button from "../ButtonCard";
import { CardsStyles } from "./styles";

const Cards = ({ category, name, img, price, addCart, elem }) => {
 
  return (
    <CardsStyles>
      <div className="img-wrap">
        <img src={img} alt="imagem hambuguer" />
      </div>
      <div className="info-wrap">
        <h2>{name}</h2>
        <h3>{category}</h3>
        <h4>R$ {price}</h4>
        <Button addCart={addCart} elem={elem}>
          Adicionar
        </Button>
      </div>
    </CardsStyles>
  );
};

export default Cards;
