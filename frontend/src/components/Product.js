import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../contexts/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../css/product.css";

export const Product = () => {
  const { addToCart } = useContext(Context);

  // product data
  const { state } = useLocation();

  const { price, prodName, prodImg, prodDesc, quantity } = state;

  const [quant, setQuant] = useState(quantity);

  const handleChange = (e) => {
    setQuant(e.target.value);
  };

  const handleDec = () => {
    if ( !(quant <= 0) ) {
      let temp = parseInt(quant)
      temp -= 1
      setQuant(temp)
    }
  }

  const handleInc = () => {
    if ( !(quant >= 10) ) {
      let temp = parseInt(quant);
      temp += 1;
      setQuant(temp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    state.quantity = quant

    addToCart(state)
  }

  return (
    <div className="product-page-container">
      <img className="product-page-img" src={prodImg} alt={prodName} />
      <div className="product-desc-wrapper">
        <h1 className="product-name">{prodName}</h1>
        <div className="product-section">
          <div className="p-quantity-wrapper">
            <FontAwesomeIcon icon={faMinus} size="1x" className="p-quanttity-btns" onClick={handleDec} />
            <input
              className="p-quantity"
              type="number"
              value={quant}
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faPlus} size="1x" className="p-quanttity-btns" onClick={handleInc} />
          </div>
          <span className="product-price">{price}</span>
        </div>
        <p className="product-desc">{prodDesc}</p>
        <button className="add-to-cart-btn" onClick={handleSubmit}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
