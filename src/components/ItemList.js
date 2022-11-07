import Item from "./Item";

const ItemList = ({data = []}) => {
  return (
    data.map(producto => <Item key={producto.id} info={producto} />)
  );
}

export default ItemList;
