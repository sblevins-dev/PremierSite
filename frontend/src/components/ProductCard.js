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
      setInCart(false)
      removeFromCart(data)
    } else {
      setInCart(true)
      addToCart(data)
    }
  };

  return (
    <div
      className="product-card-wrapper product-animation"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="product-card">
        {/* {data} */}
        {inCart ? (
          <FontAwesomeIcon
            className="minus-icon"
            icon={faCircleMinus}
            size="xl"
            onClick={handleClick}
          />
        ) : (
          <FontAwesomeIcon
            className="plus-icon"
            icon={faCirclePlus}
            size="xl"
            onClick={handleClick}
          />
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
