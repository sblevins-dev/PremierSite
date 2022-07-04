import "../css/productCard.css";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../contexts/Context";

export const ProductCard = ({ data, delay }) => {
  const { addToCart, removeFromCart } = useContext(Context);
  const [inCart, setInCart] = useState(false);
  data.quantity = 1;

  const handleClick = () => {
    if (inCart) {
      setInCart(false);
      removeFromCart(data);
    } else {
      setInCart(true);
      addToCart(data);
    }
  };

  const addTip = document.querySelector('.add-tool-tip')
  const removeTip = document.querySelector('.remove-tool-tip')

  const handleHover = () => {
    if (inCart) {
      removeTip.style.visibility = 'visible'
    } else {
      addTip.style.visibility = 'visible'
    }
  }

  const handleHoverEnd = () => {
    if (inCart) {
      removeTip.style.visibility = 'hidden'
    } else {
      addTip.style.visibility = 'hidden'
    }
  }

  return (
    <div
      className="product-card-wrapper product-animation"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="product-card">
        {/* {data} */}
        {inCart ? (
          <>
            <FontAwesomeIcon
              className="minus-icon"
              icon={faCircleMinus}
              size="xl"
              onClick={handleClick}
              // onMouseOver={handleHover}
              // onMouseLeave={handleHoverEnd}
            />
            {/* <span className="remove-tool-tip" style={{visibility: 'hidden'}}>Remove From Cart</span> */}
          </>
        ) : (
          <>
            <FontAwesomeIcon
              className="plus-icon"
              icon={faCirclePlus}
              size="xl"
              onClick={handleClick}
              // onMouseOver={handleHover}
              // onMouseLeave={handleHoverEnd}
            />
            {/* <span className="add-tool-tip" style={{visibility: 'hidden'}}>Add To Cart</span> */}
          </>
        )}

        <img className="product-img" alt="img" src={data.prodImg}></img>
      </div>
      <div className="product-details">
        <div className="product-name">{data.prodName}</div>
        <div className="product-price">${data.price}</div>
      </div>
    </div>
  );
};
