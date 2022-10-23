import { SectionCartStyles } from "./styles";

const Cart = ({ cart, remove, total, removeAll }) => {
  return (
    <SectionCartStyles>
      <div className="header-cart">
        <span className="title">Carrinho de Compras</span>
      </div>
      <div className="container-wrap">
        {cart.length ? (
          <>
            <ul className="container-list">
              {cart?.map((elem, index) => {
                return (
                  <li key={elem.id}>
                    <div>
                      <img src={elem.img} alt="" />
                    </div>
                    <div className="cart-info">
                      <div className="cart_info-wrap">
                        <p className="name-cart">{elem.name}</p>
                        <p className="category-cart">{elem.category}</p>
                      </div>

                      <p
                        className="button-remove"
                        onClick={() => remove(elem.id)}
                      >
                        Remover
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <hr />
            <section className="footer-cart">
              <p className="total-cart">
                Total{" "}
                <span className="span-cart">
                  R$ {total.toString().slice(0, 5)},00
                </span>
              </p>
              <button className="button-footer" onClick={() => removeAll()}>
                Remover todos
              </button>
            </section>
          </>
        ) : (
          <div className="body-cart">
            <p className="text-body">Sua sacola está vazia</p>
            <p>Adicione tens</p>
          </div>
        )}
      </div>
    </SectionCartStyles>
  );
};
export default Cart;
