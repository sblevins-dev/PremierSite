import "../css/nav.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../contexts/Context";
import { MuiDrawer } from "./MuiDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  const {
    isLoginShown,
    setLoginShown,
    isRegisterShown,
    setRegisterShown,
    cartTotal,
    cart,
  } = useContext(Context);

  // open search bar
  const [isSearchActive, setSearchActive] = useState(false);

  // cart modal state
  const [isCartModalActive, setCartModal] = useState(false);

  // When log in is clicked from navbar
  const handleLoginClick = () => {
    if (isRegisterShown) {
      setRegisterShown(false);
    }

    isLoginShown ? setLoginShown(false) : setLoginShown(true);
  };

  // When register is clicked from navbar
  const handleRegisterClick = () => {
    if (isLoginShown) {
      setLoginShown(false);
    }

    isRegisterShown ? setRegisterShown(false) : setRegisterShown(true);
  };

  // open search box
  const handleSearchClick = () => {
    if (!isSearchActive) {
      document.querySelector(".search-box").classList.add("active");
      setSearchActive(true);
    }
  };

  // exit search box
  const handleSearchExit = () => {
    document.querySelector(".search-box").classList.remove("active");
    setSearchActive(false);
  };

  // activate cart modal
  const setCartModalActive = () => {
    setCartModal(!isCartModalActive);
  };

  return (
    <div className="nav-container">
      <MuiDrawer />

      {/* Right Side of Nav */}
      <div className="title">Title</div>
      <div className="option-wrapper">
        <div className="acct-nav-btns">
          <div className="login-btn" onClick={handleLoginClick}>
            Log In
          </div>
          <span>|</span>
          <div className="create-acct-btn" onClick={handleRegisterClick}>
            Create Account
          </div>
        </div>
        <div className="search-box" onClick={handleSearchClick}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            style={{ color: "rgb(81, 81, 81)" }}
          />
          {isSearchActive && (
            <>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
              <FontAwesomeIcon
                className="search-exit-icon"
                icon={faX}
                onClick={handleSearchExit}
              />
            </>
          )}
        </div>
        <div className="cart-on-nav" onClick={setCartModalActive}>
          <FontAwesomeIcon
            icon={faCartShopping}
            size="lg"
            style={{ color: "rgb(81, 81, 81)" }}
          />{" "}
          <span className="cart-nav-total">${cartTotal === 0 ? cartTotal : cartTotal.toFixed(2)}</span>
          {isCartModalActive && (
            <div className="cart-modal-wrapper">
              <div className="cart-items-length">
                You have {cart.length} item(s) in your cart!
              </div>
              <div className="cart-modal-total">
                <label>Total:</label>
                <span className="modal-total">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="cart-modal-btns">
                <button
                  className="cart-modal-continue"
                  onClick={() => setCartModal(false)}
                >
                  Continue Shopping
                </button>
                <Link to="/cart">
                  {cart.length !== 0 ? <button className="cart-modal-checkout">Checkout</button> : <button className="cart-empty-checkout" disabled>Checkout</button>}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
