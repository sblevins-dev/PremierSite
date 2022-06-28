import "../css/login.css";
import { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../contexts/Context";
import { Transition } from "react-transition-group";

export const Login = () => {
  const { loginRef, isLoginShown, setLoginShown, setRegisterShown } =
    useContext(Context);

  // initial form data
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  // used for transition
  const [mountProp, setMountProp] = useState(false);

  // used to close modals
  const nodeRef = useRef(null);

  // used to establish click of inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // select form inputs
  let emailInput = document.querySelector(".email-input");
  let passwordInput = document.querySelector(".password-input");

  useEffect(() => {
    // handle outside click
    const handle = (e) => {
      let loginContainer = document.querySelector(".login-container");

      if (
        !loginRef.current?.contains(e.target) &&
        isLoginShown &&
        loginContainer
      ) {
        setLoginShown(false);
        loginContainer.removeEventListener("click", handle);
      }
    };

    // add event listener
    document
      .querySelector(".login-container")
      .addEventListener("click", handle);

    // activate animation
    setMountProp(true);
  }, [loginRef, isLoginShown, setLoginShown]);

  // handle register link
  const handleRegisterClick = () => {
    setLoginShown(false);
    setRegisterShown(true);
  };

  // fade in
  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
  };

  // change input size on click
  const handleInputClick = (e) => {
    if (emailRef.current?.contains(e.target)) {
      emailInput.style.display = "block";
      emailInput.focus();
    }

    if (passwordRef.current?.contains(e.target)) {
      passwordInput.style.display = "block";
      passwordInput.focus();
    }
  };

  // set form data
  const handleLoginInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // login btn
  const handleLogin = (e) => {
    e.preventDefault();
    setFormData(initialState);
    emailInput.style.display = "none"
    passwordInput.style.display = "none"
  };

  return (
    <Transition in={mountProp} timeout={0} nodeRef={nodeRef}>
      {(state) => (
        <div
          className="login-container"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="login-modal-wrapper" ref={loginRef}>
            <img
              className="login-img"
              src={require("../images/loginImg.jpg")}
              alt="login"
            />
            <form className="login-form">
              <div className="login-modal-header">
                <h1>Login</h1>
                <p>
                  Don't have an account?{" "}
                  <span className="register-link" onClick={handleRegisterClick}>
                    Sign up here
                  </span>
                </p>
              </div>

              <div
                className="form-group"
                ref={emailRef}
                onClick={handleInputClick}
              >
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="email-input"
                  name="email"
                  value={formData.email}
                  onChange={handleLoginInput}
                />
              </div>
              <div
                className="form-group"
                ref={passwordRef}
                onClick={handleInputClick}
              >
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="password-input"
                  name="password"
                  value={formData.password}
                  onChange={handleLoginInput}
                />
              </div>
              <button
                type="submit"
                className="login-submit-btn"
                onClick={handleLogin}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </Transition>
  );
};
