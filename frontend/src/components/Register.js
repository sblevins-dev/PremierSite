import "../css/register.css";
import { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../contexts/Context";
import { Transition } from "react-transition-group";

export const Register = () => {
  const { registerRef, isRegisterShown, setRegisterShown, setLoginShown } =
    useContext(Context);

  const [mountProp, setMountProp] = useState(false);

  const nodeRef = useRef(null)

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
