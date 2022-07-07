import "../css/productCard.css";
import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../contexts/Context";

export const ProductCard = ({ data, delay }) => {
  const { cart, addToCart, removeFromCart } = useContext(Context);

  const cardRef = useRef();

  // flag to keep track of item if it is in the cart
  const [inCart, setInCart] = useState(false);
  data.quantity = 1;

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product._id === data._id) {
        setInCart(true)
      }
    }
  }, [ addToCart ])

  // add or remove from cart
  const handleClick = (e) => {
    if (inCart) {
      setInCart(false);
      removeFromCart(data);
    } else {
      setInCart(true);
      addToCart(data);
    }
  };

  const navigate = useNavigate();

  // go to the product description
  const handleProductClick = (e, data) => {
    if (cardRef.current?.contains(e.target)) {
      const { sku, price, prodName, prodDesc, prodImg, quantity, _id } = data;
      const state = { sku, price, prodName, prodDesc, prodImg, quantity, _id };
      navigate("/product", { state });
    }
  };

  // working on tooltips
  // const addTip = document.querySelector('.add-tool-tip')
  // const removeTip = document.querySelector('.remove-tool-tip')

  // const handleHover = () => {
  //   if (inCart) {
  //     removeTip.style.visibility = 'visible'
  //   } else {
  //     addTip.style.visibility = 'visible'
  //   }
  // }

  // const handleHoverEnd = () => {
  //   if (inCart) {
  //     removeTip.style.visibility = 'hidden'
  //   } else {
  //     addTip.style.visibility = 'hidden'
  //   }
  // }

  return (
    <div
      className="product-card-wrapper product-animation"
      style={{ animationDelay: `${delay}s` }}
    >
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
      <div
        className="product-card"
        onClick={(e) => handleProductClick(e, data)}
        ref={cardRef}
      >
        <img className="product-img" alt="img" src={data.prodImg}></img>
      </div>
      <div className="product-details">
        <div className="product-name">{data.prodName}</div>
        <div className="product-price">${data.price}</div>
      </div>
    </div>
  );
};
