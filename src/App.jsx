import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import Button from "react-bootstrap/Button";
import Landing from "./components/landing/Landing";
import ItemDetail from "./pages/detail/ItemDetail";
import ItemList from "./pages/itemList/ItemList";
import Cart from "./pages/cart/Cart";

import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/productos/telefonos"
            element={<ItemList type="cel" />}
          />
          <Route
            path="/productos/notebooks"
            element={<ItemList type="note" />}
          />
          <Route path="/producto/:id" element={<ItemDetail />} />
          <Route path="/productos" element={<ItemList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>404 - Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
