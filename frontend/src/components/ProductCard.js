import "../css/productCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'

export const ProductCard = ({ data, delay }) => {
  return (
    <div
      className="product-card-wrapper product-animation"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="product-card">
        {/* {data} */}
        <FontAwesomeIcon className="plus-icon" icon={faCirclePlus} size="xl" />
        <img className="product-img" alt="img" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441177_sd.jpg;maxHeight=200;maxWidth=300"></img>
      </div>
      <div className="product-details">
        <div className="product-name">Name</div>
        <div className="product-price">$0</div>
      </div>
    </div>
  );
};
