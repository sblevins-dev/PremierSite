import "../css/login.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Context";
import { Transition } from "react-transition-group";

export const Login = () => {
  const { loginRef, isLoginShown, setLoginShown, setRegisterShown } =
    useContext(Context);

  const [mountProp, setMountProp] = useState(false)

  // add event listener
  useEffect(() => {
    document
      .querySelector(".login-container")
      .addEventListener("click", handle);

    setMountProp(true)
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
    setLoginShown(false);
    setRegisterShown(true);
  };

  const duration = 500

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: {opacity: 1 },
  }

  return (
    <Transition in={mountProp}>
      {state => (
        <div className="login-container" style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
        <div className="login-modal-wrapper" ref={loginRef}>
          <div className="login-img">hello</div>
          <form className="login-form">
            <h1>Login</h1>
            <p>
              Don't have an account?{" "}
              <span className="register-link" onClick={handleRegisterClick}>
                Sign up here
              </span>
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
      )}
      
    </Transition>
  );
};
