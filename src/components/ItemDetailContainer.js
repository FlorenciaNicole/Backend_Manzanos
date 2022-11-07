import React, { useState, useEffect } from "react";
import { getSingleItem } from "../Service/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { LineWobble } from '@uiball/loaders'

function ItemDetailContainer() {
  const [data, setData] = useState({});

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id)
      .then((respuestaDatos) => setData(respuestaDatos))
      .catch((errormsg) => {
        setError(errormsg.message);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <>
        {error ? (
          <div>
            <h2 style={{ color: "#aa0033" }}>Error obteniendo los datos</h2>
            <p>{error}</p>
          </div>
        ) : (
          <h3>        <LineWobble 
          size={1800}
          lineWeight={5}
          speed={1.75} 
          color="grey" 
         /></h3>
        )}
      </>
    );
  }

  return (
    <div>
        <ItemDetail item={data} />
    </div>
  );}

export default ItemDetailContainer;