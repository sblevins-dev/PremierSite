import "./css/nav.css";
import { useState, useRef } from "react";
import { Context } from "./contexts/Context";
import { Nav } from "./components/Nav";
import { Login } from "./components/Login"
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

function App() {

  const [isLoginShown, setLoginShown] = useState(false);
  const [isRegisterShown, setRegisterShown] = useState(false);

  const loginRef = useRef()
  const registerRef = useRef()

  return (
    <Context.Provider value={{ isLoginShown, setLoginShown, loginRef, isRegisterShown, setRegisterShown, registerRef }}>
      <div className="App">
        <Nav />
        {isLoginShown && <Login />}
        <Home />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
