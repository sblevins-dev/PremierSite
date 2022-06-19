import "../css/register.css";
import { useContext, useEffect } from "react";
import { Context } from "../contexts/Context";

export const Register = () => {
  const { registerRef, isRegisterShown, setRegisterShown, setLoginShown } =
    useContext(Context);

    // add event listener
  useEffect(() => {
    document
      .querySelector(".register-container")
      .addEventListener("click", handle);
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
    setRegisterShown(false)
    setLoginShown(true)
  }

  return (
    <div className="register-container">
      <div className="register-modal-wrapper" ref={registerRef}>
        <div className="register-img">hello</div>
        <form className="register-form">
          <h1>Register</h1>
          <p>
            Already have an account?{" "}
            <p className="log-in-link" onClick={handleLoginClick}>
              Sign in here
            </p>
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
