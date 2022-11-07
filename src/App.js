
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from "./components/CartContext";
import CartView from "./components/CartView";
import Checkout from "./components/Checkout";


function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/categoria/:cat" element={<ItemListContainer />}></Route>
      <Route path="/productos/:id" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/checkout/:orderid" element={<Checkout />} />
      <Route path="*" element={<h1>404: Te perdiste. 🤔</h1>} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </CartContextProvider>

  );
}

export default App;