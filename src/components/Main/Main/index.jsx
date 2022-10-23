import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import Container from "../ContainerUl";
import Header from "../../Header/Header";
import Cart from "../SectionCart";
import { MainStyles } from "./styles";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

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
    setCart([]);
  }
  function handleRemove(item) {
    const filtro = cart.findIndex((e) => e.name === item.name);
    if (cart[filtro].quantity !== 1) {
      cart[filtro].quantity = cart[filtro].quantity - 1;
      setCart([...cart]);
    } else {
      const filtred = cart.filter((e) => e.name !== item.name);
      setCart([...filtred]);
    }
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
    const filtro = cart.findIndex((e) => e.name === elem.name);
    if (filtro === -1) {
      const product = {
        id: elem.id,
        img: elem.img,
        name: elem.name,
        category: elem.category,
        price: elem.price,
        quantity: 1,
      };

      setCart([...cart, product]);
    } else {
      cart[filtro].quantity = cart[filtro].quantity + 1;
      setCart([...cart]);
    }
  }

  console.log(cart);

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
