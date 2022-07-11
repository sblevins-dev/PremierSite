import "../css/checkout.css";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUps } from "@fortawesome/free-brands-svg-icons";

export const Checkout = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, setCart } = useContext(Context);

  // used for billing address
  const [checked, setIsChecked] = useState(false);

  // go home if empty cart
  const [tempCart, setTempCart] = useState(cart)
  const [tempCartTotal, setTempCartTotal] = useState(cartTotal)

  useEffect(() => {
    if (cart.length === 0 && flag !== 'success') {
      navigate("/");
    }
  }, [cart]);

  // calculate tax
  const tax = (tempCartTotal * 0.07).toFixed(2);

  // used flags to step through checkout process
  const [flag, setFlag] = useState("shipping");

  // empty first form
  let initialShipping = {
    fName: "",
    lName: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
  };

  // shipping information
  const [shipping, setShipping] = useState(initialShipping);

  const { fName, lName, address, city, state, zip } = shipping;

  // shipping method ground or next day
  const [shippingMethod, setShippingMethod] = useState("");

  // handle payment method
  const [cardType, setCard] = useState("");
  let initialPayment = {
    cardType: cardType,
    fName: "",
    lName: "",
    cardNum: 0,
    exp: 0,
    cvv: 0,
  };

  const [paymentMethod, setPaymentMethod] = useState(initialPayment);

  // handle billing address
  let initialBilling = {
    fName: "",
    lName: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
  };

  const [billingAddress, setBillingAddress] = useState(initialBilling);

  // filling out shipping info form
  const handleShippingChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  // return to shopping home
  const handleContinue = () => {
    navigate("/");
  };

  // go to next step which is shipping information
  const handleReturnToAddress = (e) => {
    e.preventDefault();
    setFlag("shipping");
  };

  // got to shipping method
  const handleShipping = (e) => {
    e.preventDefault();
    if (
      !(
        fName === "" ||
        lName === "" ||
        address === "" ||
        city === "" ||
        state === "" ||
        zip === 0
      )
    ) {
      setFlag("shipping-method");
    }
  };

  // if method checked, move to payment method
  const handleShippingMethod = (e) => {
    e.preventDefault();
    let ground = document.querySelector(".free");
    let nextDay = document.querySelector(".next-day");

    if (ground.checked || nextDay.checked) {
      setFlag("payment");

      if (ground.checked) {
        setShippingMethod("Ground: Free");
      } else {
        setShippingMethod("Next Day Air: $7.99");
      }
    }
  };

  // go back to shipping method from payment method
  const handleReturnToShipping = (e) => {
    e.preventDefault();
    setFlag("shipping-method");
  };

  // handle payment method
  const handlePaymentChange = (e) => {
    setPaymentMethod({
      ...paymentMethod,
      [e.target.name]: e.target.value,
    });
  };

  // set new billing address
  const handleBillingChange = (e) => {
    setBillingAddress({
      ...billingAddress,
      [e.target.name]: e.target.value,
    });
  };

  // complete checkout
  const payNow = (e) => {
    e.preventDefault();
    const { cardType, cardNum, fName, lName, exp, cvv } = paymentMethod;
    if (
      cardNum !== "" &&
      cardNum !== 0 &&
      fName !== "" &&
      lName !== "" &&
      exp !== 0 &&
      cvv !== 0
    ) {
      setFlag("success");
      setCart([])
    }
  };

  return (
    <div className="checkout-page-container">
      <div className="sections">
        <div className="left-section">
          <h1>Checkout Details</h1>
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
            flag !== "success" &&
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
                    value="free"
                    title="standard"
                    className="free"
                  />
                  <label forhtml="standard">
                    <FontAwesomeIcon icon={faUps} className="ups" />
                    <div>
                      <h3>Ground</h3>
                      <p>Free</p>
                      <p>
                        Standard shipping. Receive your items within 5-7
                        business days.
                      </p>
                    </div>
                  </label>
                </div>
                <div>
                  <input
                    name="shipping-method"
                    type="radio"
                    value="7.99"
                    title="next-day"
                    className="next-day"
                  />
                  <label forhtml="next-day">
                    <FontAwesomeIcon icon={faUps} className="ups" />
                    <div>
                      <h3>Next Day Air</h3>
                      <p>$7.99</p>
                      <p>Get it by the next business day!</p>
                    </div>
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
                    <input
                      type="radio"
                      name="cardType"
                      value={paymentMethod.cardType}
                      onClick={handlePaymentChange}
                    />
                    <label forhtml="cardType">Visa</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="cardType"
                      onChange={handlePaymentChange}
                    />
                    <label forhtml="cardType">Mastercard</label>
                  </div>
                </div>
                <div className="names">
                  <input
                    type="text"
                    name="fName"
                    placeholder="First Name"
                    onChange={handlePaymentChange}
                  />
                  <input
                    type="text"
                    name="lName"
                    placeholder="Last Name"
                    onChange={handlePaymentChange}
                  />
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  name="cardNum"
                  placeholder="Card Number"
                  maxLength={19}
                  pattern="[0-9\s]{13, 19}"
                  onChange={handlePaymentChange}
                />
                <div className="card-exp">
                  <input
                    type="text"
                    name="exp"
                    placeholder="Expiration"
                    onChange={handlePaymentChange}
                  />
                  <input
                    type="number"
                    name="cvv"
                    placeholder="CVV"
                    onChange={handlePaymentChange}
                  />
                </div>
              </form>
              <form className="billing-address">
                <h2>Billing Address</h2>
                <div className="first-option">
                  <input
                    type="radio"
                    name="bAddress"
                    onClick={() => setIsChecked(false)}
                  />
                  <label htmlFor="bAddress">Same as Shipping Address</label>
                </div>
                <div className="second-option">
                  <input
                    type="radio"
                    name="bAddress"
                    className="diff-address"
                    onClick={() => setIsChecked(true)}
                  />
                  <label forhtml="bAddress">Different Billing Address</label>
                  {checked && (
                    <div>
                      <h3>Billing Information</h3>
                      <input
                        type="text"
                        name="fName"
                        placeholder="First Name"
                        value={billingAddress.fName}
                        onChange={handleBillingChange}
                      />
                      <input
                        type="text"
                        name="lName"
                        placeholder="Last Name"
                        value={billingAddress.lName}
                        onChange={handleBillingChange}
                      />
                      <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={billingAddress.address}
                        onChange={handleBillingChange}
                      />
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={billingAddress.city}
                        onChange={handleBillingChange}
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={billingAddress.state}
                        onChange={handleBillingChange}
                      />
                      <input
                        type="number"
                        name="zip"
                        placeholder="Zip Code"
                        value={billingAddress.zip}
                        onChange={handleBillingChange}
                      />
                    </div>
                  )}
                </div>

                <div className="billing-btns">
                  <button
                    className="return-to-shipping-btn"
                    onClick={handleReturnToShipping}
                  >
                    Return to Shipping
                  </button>
                  <button className="pay-now-btn" onClick={payNow}>
                    Pay Now
                  </button>
                </div>
              </form>
            </>
          )}
          {flag === "success" && (
            <div className="success">
              <h2>Success</h2>
              <p>Your items are on there way!</p>
              <button onClick={() => navigate('/')}>Return To Home</button>
            </div>
          )}
        </div>
        <div className="right-section">
          <div className="information-wrapper">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>John doe Email</p>
              <p>Edit</p>
            </div>
            {(flag === "shipping-method" || flag !== "shipping") && (
              <div className="shipping-information">
                <h3>Shipping Information</h3>
                <p>
                  {address} {city} {state} {zip}
                </p>
                <p onClick={() => setFlag("shipping")}>Edit</p>
              </div>
            )}
            {(flag === "payment" || flag === "success") && (
              <div className="shipping-method-info">
                <h3>Shipping Method</h3>
                <p>{shippingMethod}</p>
                <p onClick={() => setFlag("shipping-method")}>Edit</p>
              </div>
            )}
          </div>
          <div className="checkout-cart">
            <h2>{tempCart.length} item/s in cart</h2>
            <ul>
              {tempCart.map((item) => (
                <li key={item.product._id}>
                  <img src={item.product.prodImg} alt={item.product.prodName} />
                  <div>
                    <p>{item.product.prodName}</p>
                    <p>${item.product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <hr></hr>
            <div className="cart-details">
              <span>
                <p>Subtotal:</p> <p>${tempCartTotal.toFixed(2)}</p>{" "}
              </span>
              <span>
                <p>Shipping: </p> <p>{shippingMethod.split(":")[1]}</p>
              </span>
              <span>
                <p>Tax:</p> <p>${tax}</p>
              </span>
              <span>
                <p>Total:</p>
                <p>
                  $
                  {(
                    cartTotal +
                    parseFloat(tax) +
                    (shippingMethod.split(":")[1] === " Free" ? 0 : 7.99)
                  ).toFixed(2)}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
