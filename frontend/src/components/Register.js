import "../css/register.css";
import { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../contexts/Context";
import { Transition } from "react-transition-group";

export const Register = () => {
  const { registerRef, isRegisterShown, setRegisterShown, setLoginShown } =
    useContext(Context);

  const initialState = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);

  // used for Transition
  const [mountProp, setMountProp] = useState(false);

  const nodeRef = useRef(null);

  useEffect(() => {
    // handle outside click
    const handle = (e) => {
      let registerModal = document.querySelector(".register-container");

      if (
        !registerRef.current?.contains(e.target) &&
        isRegisterShown &&
        registerModal
      ) {
        setRegisterShown(false);
        registerModal.removeEventListener("click", handle);
      }
    };

    // add event listener
    document
      .querySelector(".register-container")
      .addEventListener("click", handle);

    // activate animation
    setMountProp(true);
  }, [registerRef, isRegisterShown, setRegisterShown]);

  // handle login link
  const handleLoginClick = () => {
    setRegisterShown(false);
    setLoginShown(true);
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

  return (
    <Transition in={mountProp} timeout={0} nodeRef={nodeRef}>
      {(state) => (
        <div
          className="register-container"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="register-modal-wrapper" ref={registerRef}>
            <img className="register-img" src={require('../images/registerImg.jpg')} />
            <form className="register-form">
              <div className="register-modal-header">
                <h1>Register</h1>
                <p>
                  Already have an account?{" "}
                  <span className="log-in-link" onClick={handleLoginClick}>
                    Sign in here
                  </span>
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="fName">First Name</label>
                <input id="fName" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="lName">Last Name</label>
                <input id="lName" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
              </div>
              <button type="submit" className="register-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </Transition>
  );
};
