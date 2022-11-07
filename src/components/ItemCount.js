import React, { useState } from "react";
import Button from "./Button";
import "./ItemCount.css"

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {

    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {

    if (count > 1) setCount(count - 1);
  }


  return (

    <div className="itemcount_container">
      <div className="itemcount_control">
        <Button onClick={handleSubstract}>
          -
        </Button>
        <span>{count}</span>
        <Button onClick={handleAdd}>
          +
        </Button>
      </div>
      <div className="itemcount_btns">
        <Button
          onClick={() => {
            onAddToCart(count);
          }}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}
export default ItemCount;