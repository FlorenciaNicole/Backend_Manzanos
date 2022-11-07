import LocalMallIcon from '@mui/icons-material/LocalMall';
import React, { useContext } from "react";
import { cartCtx } from "./CartContext";

function CartWidget() {
  const { getItemQty } = useContext(cartCtx);

  return (
    <div>
        <LocalMallIcon />
        <span>{getItemQty()}</span>
    </div>
  )
}

export default CartWidget;
