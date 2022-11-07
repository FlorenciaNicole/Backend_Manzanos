import React, { useState, useContext } from "react";
import FlexWrapper from "./FlexWrapper";
import ItemCount from "./ItemCount";
import { cartCtx } from "./CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addItem } = useContext(cartCtx);


  function handleAddToCart(count) {
    addItem(item, count);
    setIsInCart(true);
  }

  const stylePrice = {
    color: item.offer ? "#22cc77" : "#333333",
  };

  return (
    <FlexWrapper rows={true}>
      <div className="mainContainer">
      <h1>{item.title}</h1>
        <img src={item.img} alt={item.title} />
        <h3 style={stylePrice}> ${item.price}</h3>
      </div>
      {item.stock === 0 && (
        <span style={{ color: "#aa0033" }}>Producto sin stock</span>
      )}
      {isInCart ? (
        <Link to="/cart" >Ir al carrito</Link>
      ) : (
        <ItemCount stock={5} onAddToCart={handleAddToCart} />
      )}
    </FlexWrapper>
  );
}

export default ItemDetail;


