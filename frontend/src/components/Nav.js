import "../css/nav.css";
import { useContext, useState } from "react";
import { Context } from "../contexts/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  const { isLoginShown, setLoginShown, isRegisterShown, setRegisterShown } =
    useContext(Context);
  const [isSearchActive, setSearchActive] = useState(false);

  // When log in is clicked from navbar
  const handleLoginClick = () => {
    let isVisible = !isLoginShown;
    setLoginShown(isVisible);
    setRegisterShown(!isVisible);
  };

  // When log in is clicked from navbar
  const handleRegisterClick = () => {
    let isVisible = !isRegisterShown;
    setRegisterShown(isVisible);
    setLoginShown(!isVisible);
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
    console.log("click");
  };


  return (
    <div className="nav-container">
      <div className="hamburger">Ham</div>

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
        <div className="cart-on-nav">
          <FontAwesomeIcon
            icon={faCartShopping}
            size="lg"
            style={{ color: "rgb(81, 81, 81)" }}
          />{" "}
          $0
        </div>
      </div>
    </div>
  );
};
