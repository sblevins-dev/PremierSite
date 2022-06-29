import "./css/nav.css";
import React, { useState, useRef } from "react";
import { Context } from "./contexts/Context";
import { Nav } from "./components/Nav";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

function App() {
  const [isLoginShown, setLoginShown] = useState(false);
  const [isRegisterShown, setRegisterShown] = useState(false);
  const [cartTotal, setCartTotal] = useState(0)

  const [cart, setCart] = useState([])

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
        setCartTotal
      }}
    >
      <div className="App">
        <Nav />
        {isLoginShown && <Login />}
        {isRegisterShown && <Register />}
        <Home />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
