import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import Container from "../ContainerUl";
import Header from "../../Header/Header";
import Cart from "../SectionCart";
import { MainStyles } from "./styles";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  const [cart, setCart] = useState([]);

  function removeDuplicatas() {
    currentSale.forEach((elem) => {
      if (!cart.includes(elem)) {
        setCart([...cart, elem]);
      }
    });
  }
  removeDuplicatas();

  useEffect(() => {
    api
      .get("products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  const sumTotal = cart.reduce(
    (acc, atual) => acc + parseFloat(atual.price),
    0
  );

  function removerAll() {
    setCurrentSale([]);
    setCart([]);
  }
  function handleRemove(item) {
    setCurrentSale(currentSale.filter((elem) => item !== elem.id));
    setCart(cart.filter((elem) => item !== elem.id));

    removeDuplicatas();
  }
  function handleSearch(value) {
    setFilteredProducts(
      products.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.category.toLowerCase().includes(value.toLowerCase())
      )
    );
  }
  function addCart(elem) {
    setCurrentSale([...currentSale, elem]);
    removeDuplicatas();
  }

  return (
    <>
      <Header handleSearch={handleSearch}></Header>
      <MainStyles>
        <Container
          products={products}
          filteredProducts={filteredProducts}
          addCart={addCart}
        ></Container>
        <Cart
          currentSale={currentSale}
          cart={cart}
          remove={handleRemove}
          total={sumTotal}
          removeAll={removerAll}
        />
      </MainStyles>
    </>
  );
};
export default Main;
