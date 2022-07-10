import "../css/checkout.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();

  const [flag, setFlag] = useState("shipping");

  let initialShipping = {
    fName: "",
    lName: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
  };

  const [shipping, setShipping] = useState(initialShipping);

  const handleShippingChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    navigate("/");
  };

  const handleShipping = () => {
    setFlag('shipping-method')
  };

  return (
    <div className="checkout-page-container">
      <h1>Checkout Details</h1>
      <div className="sections">
        <div className="left-section">
          {flag === "shipping" && (
            <form className="shipping-wrapper">
              <h2>Shipping Address</h2>
              <div className="form-group">
                <input
                  type="text"
                  name="fName"
                  value={shipping.fName}
                  placeholder="First Name"
                  onChange={handleShippingChange}
                />
                <input
                  type="text"
                  name="lName"
                  value={shipping.lName}
                  placeholder="Last Name"
                  onChange={handleShippingChange}
                />
              </div>
              <input
                type="text"
                name="address"
                value={shipping.address}
                placeholder="Address"
                onChange={handleShippingChange}
              />
              <div className="form-group">
                <input
                  type="text"
                  name="city"
                  value={shipping.city}
                  placeholder="City"
                  onChange={handleShippingChange}
                />
                <input
                  type="text"
                  name="state"
                  value={shipping.state}
                  placeholder="State"
                  onChange={handleShippingChange}
                />
                <input
                  type="number"
                  name="zip"
                  value={shipping.zip}
                  placeholder="Zip Code"
                  onChange={handleShippingChange}
                />
              </div>
              <div className="checkout-btns">
                <button className="continue-shopping" onClick={handleContinue}>
                  Continue Shopping
                </button>
                <button className="checkout" onClick={handleShipping}>
                  Continue to Shipping
                </button>
              </div>
            </form>
          )}
          {flag === 'shipping-method' && (
            <form className="shipping-method-wrapper">
                <div className="option">
                    <input type="radio" />
                    <p>Standard</p>
                </div>
                <div className="option">
                    <input type="radio" />
                    <p>Expedited</p>
                </div>
                <div className="option">
                    <input type="radio" />
                    <p>Next-Day Air</p>
                </div>
            </form>
          )}
        </div>
        <div className="right-section">
          <div className="information-wrapper">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>John doe Email</p>
            </div>
            {shipping !== initialShipping && (
              <div className="shipping-information">
                <h3>Shipping Information</h3>
                <p>{shipping.address}</p>
              </div>
            )}
          </div>
          <div className="checkout-cart">Cart</div>
        </div>
      </div>
    </div>
  );
};
