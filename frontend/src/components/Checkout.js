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
  const { fName, lName, address, city, state, zip } = shipping;

  const handleShippingChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    navigate("/");
  };

  const handleReturnToAddress = (e) => {
    e.preventDefault()
    setFlag('shipping')
  }

  const handleShipping = (e) => {
    e.preventDefault();
    setFlag("shipping-method");
  };

  const handleShippingMethod = (e) => {
    e.preventDefault();
    setFlag("payment");
  };

  const handleReturnToShipping = (e) => {
    e.preventDefault()
    setFlag("shipping-method")
  }

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
          {flag !== "shipping" &&
            flag !== "payment" &&
            fName !== "" &&
            lName !== "" &&
            address !== "" &&
            city !== "" &&
            state !== "" &&
            zip !== 0 && (
              <form className="shipping-method-wrapper">
                <h2>Shipping Method</h2>
                <div>
                  <input
                    name="shipping-method"
                    type="radio"
                    value="standard"
                    title="standard"
                  />
                  <label forhtml="standard">
                    <h3>Ground</h3>
                    <p>
                      Standard shipping. Receive your items within 5-7 business
                      days.
                    </p>
                  </label>
                </div>
                <div>
                  <input
                    name="shipping-method"
                    type="radio"
                    value="next-day"
                    title="next-day"
                  />
                  <label forhtml="next-day">
                    <h3>Next Day Air</h3>
                    <p>Get it by the next business day!</p>
                  </label>
                </div>
                <div className="shipping-method-btns">
                  <button
                    className="return-to-address"
                    onClick={handleReturnToAddress}
                  >
                    Return to Address
                  </button>
                  <button
                    className="continue-payment"
                    onClick={handleShippingMethod}
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            )}
          {flag === "payment" && (
            <>
              <form className="payment-method">
                <h2>Payment Method</h2>
                <div>
                  <div>
                    <input type="radio" name="typeOfCard" />
                    <label forhtml="typeOfCard">Visa</label>
                  </div>
                  <div>
                    <input type="radio" name="typeOfCard" />
                    <label forhtml="typeOfCard">Mastercard</label>
                  </div>
                </div>
                <div>
                  <input type="text" name="fName" placeholder="First Name" />
                  <input type="text" name="lName" placeholder="Last Name" />
                </div>
                <input
                  type="number"
                  name="cardNumber"
                  placeholder="Card Number"
                />
                <div>
                  <input
                    type="number"
                    name="expiration"
                    placeholder="Expiration"
                  />
                  <input type="number" name="cvv" placeholder="CVV" />
                </div>
              </form>
              <form className="billing-address">
                <h2>Billing Address</h2>
                <div className="first-option">
                  <input type="radio" name="bAddress" />
                  <label htmlFor="bAddress">Same as shipping address</label>
                </div>
                <div>
                  <input type="radio" name="bAddress" />
                  <label forhtml="bAddress">Different Address</label>
                </div>
                
                <div className="billing-btns">
                  <button className="return-to-shipping-btn" onClick={handleReturnToShipping}>Return to Shipping</button>
                  <button className="pay-now-btn">Pay Now</button>
                </div>
              </form>
            </>
          )}
        </div>
        <div className="right-section">
          <div className="information-wrapper">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>John doe Email</p>
            </div>
            {(flag === "shipping-method" || flag !== "shipping") && (
              <div className="shipping-information">
                <h3>Shipping Information</h3>
                <p>{shipping.address}</p>
              </div>
            )}
            {flag === "payment" && (
              <div className="shipping-method-info">
                <h3>Shipping Method</h3>
              </div>
            )}
          </div>
          <div className="checkout-cart">Cart</div>
        </div>
      </div>
    </div>
  );
};
