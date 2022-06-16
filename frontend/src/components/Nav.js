import "../css/nav.css";
import { useContext } from "react";
import { Context } from "../contexts/Context";

export const Nav = () => {
  const { isLoginShown, setLoginShown } = useContext(Context);

  // When log in is clicked from navbar
  const handleClick = () => {
    let isVisible = !isLoginShown
    setLoginShown(isVisible)
  }

  return (
    <div className="nav-container">
      <div className="hamburger">Ham</div>

      {/* Right Side of Nav */}
      <div className="title">Title</div>
      <div className="option-wrapper">
        <div className="acct-nav-btns">
          <div className="login-btn" onClick={handleClick}>Log In</div>
          <span>|</span>
          <div className="create-acct-btn">Create Account</div>
        </div>
        <div className="search-box">Search</div>
        <div className="cart-on-nav">Cart</div>
      </div>
    </div>
  );
};
