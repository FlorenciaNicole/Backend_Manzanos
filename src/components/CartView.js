import { useContext } from "react";
import { cartCtx } from "./CartContext";
import Button from "./Button";
import "./CartView.css";
import CheckoutForm from "./CheckoutForm";
import { Link } from 'react-router-dom';

function CartView() {
  const context = useContext(cartCtx);
  const { cart, getTotalPriceInCart, deleteItem, emptyCart } = context;

  let carritovacio = cart.length === 0;

  if (carritovacio) {
    return <div>Tu carrito está vacio...</div>;
  }

  return (
    <>
    <div>
      <h1 className='carritoTitle'>Tu carrito</h1>
      <Button onClick={emptyCart} className="title">Borrar todo</Button>
            </div>
      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Imagen</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id} className="cartList_row">
                <td>
                  <img height={100} src={item.img} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td>{item.count}</td>
                <td>
                  <Button onClick={() => deleteItem(item.id)}>ELIMINAR</Button>
                </td>
                <th>$ {item.price * item.count}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>El total de tu compra es de $ {getTotalPriceInCart()}</h3>
      <Link to="/">Seguir comprando</Link>
      <CheckoutForm />
    </>
  );
}

export default CartView;