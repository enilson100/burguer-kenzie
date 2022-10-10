import Cards from "../CardsLi";
import { ContainerStyle } from "./styles";

const Container = ({ products, filteredProducts, addCart }) => {
  return (
    <ContainerStyle>
      {filteredProducts.length
        ? filteredProducts.map((elem, i) => {
            return (
              <Cards
                key={elem.id}
                addCart={addCart}
                elem={filteredProducts[i]}
                category={elem.category}
                img={elem.img}
                name={elem.name}
                price={
                  elem.price.toString().split("").length < 3
                    ? `${elem.price},00`
                    : elem.price.toString().replace(".", ",")
                }
              />
            );
          })
        : products.map((elem) => {
            return (
              <Cards
                key={elem.id}
                addCart={addCart}
                elem={elem}
                category={elem.category}
                img={elem.img}
                name={elem.name}
                price={
                  elem.price.toString().split("").length < 3
                    ? `${elem.price},00`
                    : elem.price.toString().replace(".", ",")
                }
              />
            );
          })}
    </ContainerStyle>
  );
};

export default Container;
