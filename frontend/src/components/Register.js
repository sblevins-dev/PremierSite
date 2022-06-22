import "../css/register.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Context";
import { Transition } from "react-transition-group";

export const Register = () => {
  const { registerRef, isRegisterShown, setRegisterShown, setLoginShown } =
    useContext(Context);

  const [mountProp, setMountProp] = useState(false);

  // add event listener
  useEffect(() => {
    document
      .querySelector(".register-container")
      .addEventListener("click", handle);

    setMountProp(true);
  });

  // handle outside click
  const handle = (e) => {
    if (!registerRef.current?.contains(e.target) && isRegisterShown) {
      setRegisterShown(false);
      document
        .querySelector(".register-container")
        .removeEventListener("click", handle);
    }
  };

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
    <Transition in={mountProp}>
      {(state) => (
        <div
          className="register-container"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="register-modal-wrapper" ref={registerRef}>
            <div className="register-img">hello</div>
            <form className="register-form">
              <h1>Register</h1>
              <p>
                Already have an account?{" "}
                <span className="log-in-link" onClick={handleLoginClick}>
                  Sign in here
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
