import "./css/nav.css";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./contexts/Context";
import { Nav } from "./components/Nav";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Products } from "./components/Products"
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";

function App() {
  // show login modal
  const [isLoginShown, setLoginShown] = useState(false);

  // show register modal
  const [isRegisterShown, setRegisterShown] = useState(false);

  // overall price
  const [cartTotal, setCartTotal] = useState(0);

  // collection of items added
  const [cart, setCart] = useState([]);

  // update total after an item is added to a cart
  const updateCartTotal = () => {
    let sum = 0;

    if (cart.length === 0) {
      setCartTotal(0);
    } else {
      cart.map((product) => (sum += product.price));
    }
    setCartTotal(sum);
  };

  // add to cart when clicking a product
  const addToCart = (name, price) => {
    setCart((prevState) => [...prevState, { name, price }]);

    updateCartTotal();
  };

  // used to update cart when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      updateCartTotal();
    }
  }, [cart]);

  // used to click outside modals
  const loginRef = useRef();
  const registerRef = useRef();

  return (
    <Context.Provider
      value={{
        isLoginShown,
        setLoginShown,
        loginRef,
        isRegisterShown,
        setRegisterShown,
        registerRef,
        cart,
        setCart,
        cartTotal,
        setCartTotal,
        addToCart,
      }}
    >
      <div className="App">
        <Router>
          <Nav />
          {isLoginShown && <Login />}
          {isRegisterShown && <Register />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
