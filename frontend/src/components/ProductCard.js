import "../css/productCard.css";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../contexts/Context";

export const ProductCard = ({ data, delay }) => {
  const { addToCart } = useContext(Context)
  data.quantity = 1

  return (
    <div
      className="product-card-wrapper product-animation"
      style={{ animationDelay: `${delay}s` }}
      onClick={() => addToCart(data)}
    >
      <div className="product-card">
        {/* {data} */}
        <FontAwesomeIcon className="plus-icon" icon={faCirclePlus} size="xl" />
        <img
          className="product-img"
          alt="img"
          src={data.prodImg}
        ></img>
        {/* <img
          className="moveable-img"
          alt="img"
          src={data.prodImg}
        ></img> */}
      </div>
      <div className="product-details">
        <div className="product-name">{data.prodName}</div>
        <div className="product-price">${data.price}</div>
      </div>
    </div>
  );
};
