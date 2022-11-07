const Item = ({info}) => {
  return (
    <a href='www.google.com.ar' className="producto">
    <img src={info.image} alt="" />
    <p>{info.title}</p>

    </a>
  );
}

export default Item;