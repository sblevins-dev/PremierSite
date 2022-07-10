import "../css/checkout.css";
import { useState } from "react";

export const Checkout = () => {
  const [shipping, setShipping] = useState();

  return (
    <div className="checkout-page-container">
      <h1>Checkout Details</h1>
      <div className="sections">
        <div className="left-section">
          <div className="shipping-wrapper">
            <form>
              <div className="form-group">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="text" placeholder="Address" />
              <div className="form-group">
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
                <input type="number" placeholder="Zip Code" />
              </div>
            </form>
          </div>
        </div>
        <div className="right-section">
          <div className="information-wrapper">Info</div>
          <div className="checkout-cart">Cart</div>
        </div>
      </div>
    </div>
  );
};
