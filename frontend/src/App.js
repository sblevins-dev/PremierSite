import "./css/nav.css";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./contexts/Context";
import { Nav } from "./components/Nav";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(19, 102, 135)"
    },
    secondary: {
      main: "rgb(255, 0, 40)"
    }
  }
})

function App() {
  // state for phones from backend
  const [phones, setPhones] = useState([]);

  // pull phones
  const getPhones = () =>
    axios
      .get("/phones")
      .then((data) => {
        setPhones(data.data);
      })
      .catch((err) => console.log(err));

  // show login modal
  const [isLoginShown, setLoginShown] = useState(false);

  // show register modal
  const [isRegisterShown, setRegisterShown] = useState(false);

  // overall price
  const [cartTotal, setCartTotal] = useState(0);

  // collection of items added
  const [cart, setCart] = useState([]);

  // update total after an item is added to a cart
  const updateCartTotal = (empty) => {
    let sum = 0;
    if (cart.length === 0 || empty === 0) {
      setCartTotal(0);
    } else {
      cart.forEach(
        (product) => (sum += product.product.price * product.product.quantity)
      );
    }
    setCartTotal(sum);
  };

  // add to cart when clicking a product
  const addToCart = (product) => {
    if (product.quantity > 0) {
      let found = false;

      if (cart.length > 0) {
        cart.forEach((prod) => {
          if (prod.product._id === product._id) {
            found = true;
            prod.product.quantity += 1;
          }
        });
      }

      if ((!found && cart.length > 0) || cart.length === 0) {
        setCart((prevState) => [...prevState, { product }]);
      }

      updateCartTotal();
    }
  };

  // remove from cart on click
  const removeFromCart = (product) => {
    setCart(cart.filter((prod) => prod.product._id !== product._id));

    updateCartTotal();
  };

  // used to update cart when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      updateCartTotal();
    } else {
      updateCartTotal(0);
    }

    getPhones();
  }, [cart.length]);

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
        updateCartTotal,
        cartTotal,
        setCartTotal,
        addToCart,
        phones,
        removeFromCart,
      }}
    >
      <ThemeProvider theme={theme}>
        <div className="App">
        <Router>
          <Nav />
          {isLoginShown && <Login />}
          {isRegisterShown && <Register />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </div>
      </ThemeProvider>
      
    </Context.Provider>
  );
}

export default App;
