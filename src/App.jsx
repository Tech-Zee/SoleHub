import { useState } from "react";
import NavBar from "./User/components/home/navbar";
import Home from "./User/pages/home";
import Shop from "./User/pages/shop";
import ProdDetails from "./User/components/product/prodDetails";
import CartPage from "./User/pages/cart";
import Checkout from "./User/components/checkout/checkout"
import Success from "./User/pages/success"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    if (exists) {
      setWishlist(
        wishlist.filter((item) => item.id !== product.id)
      );
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/Home" element={<Home />} />

        <Route
          path="/Shop"
          element={
            <Shop
              cart={cart}
              wishlist={wishlist}
              addToCart={addToCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              toggleWishlist={toggleWishlist}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProdDetails
              cart={cart}
              wishlist={wishlist}
              addToCart={addToCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              toggleWishlist={toggleWishlist}
            />
          }
        />
   <Route
  path="/cart"
  element={
    <CartPage
      cart={cart}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
    />
  }
/>
  <Route path="/checkout" element={<Checkout cart = {cart}/>}/>
  <Route path="/success" element= {<Success />}/>

      </Routes>
    </Router>
  );
}

export default App;