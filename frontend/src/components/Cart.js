import { useContext } from "react";
import { Context } from "../contexts/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../css/cart.css";

export const Cart = () => {
  const { cart, setCart, updateCartTotal, cartTotal } = useContext(Context);

  const decreaseQuantity = (product) => {
    if (product.product.quantity <= 1) {
      let newCart = cart.filter(
        (prod) => prod.product._id !== product.product._id
      );
      setCart(newCart);

      if (newCart.length === 0) {
        updateCartTotal(0);
      } else {
        updateCartTotal();
      }
    } else {
      product.product.quantity -= 1;
      updateCartTotal();
    }
  };

  const increaseQuantity = (product) => {
    if (!(product.product.quantity >= 10)) {
      product.product.quantity += 1;
      updateCartTotal();
    }
  };

  return (
    <div className="cart-page-container">
      <h1>
        My Cart <span className="cart-page-cart-length">{cart.length}</span>
      </h1>
      <div className="cart-items-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span></span>
      </div>
      <ul className="cart-wrapper">
        {cart.length > 0 ? (
          cart.map((product) => (
            <li key={product.product.sku} className="cart-product">
              <div className="cart-product-description">
                <div className="cart-product-image">
                  <img
                    src={product.product.prodImg}
                    alt={product.product.prodName}
                  />
                </div>

                <div className="cart-product-name">
                  {product.product.prodName}
                </div>
              </div>
              <div className="cart-product-price">${product.product.price}</div>
              <div className="cart-quantity-wrapper">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="decrease-quantity"
                  onClick={() => decreaseQuantity(product)}
                />
                <div className="cart-product-quantity">
                  {product.product.quantity}
                </div>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="increase-quantity"
                  onClick={() => increaseQuantity(product)}
                />
              </div>

              <div className="cart-product-total">
                ${(product.product.quantity * product.product.price).toFixed(2)}
              </div>
              <FontAwesomeIcon icon={faX} className="remove-cart-product" />
            </li>
          ))
        ) : (
          <li>Nothing in your cart yet!</li>
        )}
      </ul>
      <div className="cart-total-wrapper">
        <div className="comments-to-seller">
          <div>Special instructions for seller</div>
          <textarea></textarea>
        </div>
        <div className="cart-details">
          <h2>Subtotal: {cartTotal.toFixed(2)}</h2>
          <div className="shipping-protection-wrapper">
            <input type="radio" />
            <div className="shipping-protection">
              * By clicking this checkbox you choose to add protection
            </div>
          </div>
          <div className="shipping-protection-details">
            By not clicking this you release liability from seller for any
            shipping problems
          </div>
          <button className="cart-checkout">Checkout</button>
          <div className="cart-pay-types">AMEX</div>
        </div>
      </div>
    </div>
  );
};
