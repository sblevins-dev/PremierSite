import "../css/nav.css";

export const Nav = () => {
  return (
    <div className="nav-container">
      <div className="hamburger">Ham</div>

      {/* Right Side of Nav */}
      <div className="title">Title</div>
      <div className="option-wrapper">
        <div className="acct-nav-btns">
          <div className="login-btn">Log In</div>
          <div>|</div>
          <div className="create-acct-btn">Create Account</div>
        </div>
        <div className="search-box">Search</div>
        <div className="cart-on-nav">Cart</div>
      </div>
    </div>
  );
};
