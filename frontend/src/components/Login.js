import "../css/login.css";
import { useContext, useEffect } from "react";
import { Context } from "../contexts/Context";

export const Login = () => {
  const { loginRef, isLoginShown, setLoginShown, setRegisterShown } = useContext(Context);

  // add event listener
  useEffect(() => {
    document
      .querySelector(".login-container")
      .addEventListener("click", handle);
  });

  // handle outside click
  const handle = (e) => {
    if (!loginRef.current?.contains(e.target) && isLoginShown) {
      setLoginShown(false);
      document
        .querySelector(".login-container")
        .removeEventListener("click", handle);
    }
  };

  // handle register link
  const handleRegisterClick = () => {
    setLoginShown(false)
    setRegisterShown(true)
  }

  return (
    <div className="login-container">
      <div className="login-modal-wrapper" ref={loginRef}>
        <div className="login-img">hello</div>
        <form className="login-form">
          <h1>Login</h1>
          <p>
            Don't have an account? <p className="register-link" onClick={handleRegisterClick}>Sign up here</p>
          </p>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>
        </form>
      </div>
    </div>
  );
};
