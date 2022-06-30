import "../css/productCard.css";
import { useContext } from "react";
import { Context } from "../contexts/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export const ProductCard = ({ data, delay }) => {
  const { addToCart } = useContext(Context)
  let name = 'product'
  let prodPrice = 50


  // let prodImg, cartOnNav;

  // useEffect(() => {
  //   prodImg = document.querySelector(".moveable-img");
  //   cartOnNav = document.querySelector(".cart-on-nav");
  // });

  // const handleClickAnimation = () => {
  //   let innerHeight = window.innerHeight;
  //   let innerWidth = window.innerWidth;

  //   let cart = cartOnNav.getBoundingClientRect();
  //   let img = prodImg.getBoundingClientRect()
  //   let targetTop = cart.top - innerHeight;
  //   console.log(cart.right)
  //   let targetRight = innerWidth - cart.right;

  //   const setPosition = (px) => {
  //     prodImg.style.top = px + "px";
  //     console.log(prodImg.style.right)
  //     console.log(targetRight)

  //     if (prodImg.style.right <= targetRight) {
  //       prodImg.style.right = px + 'px'
  //       console.log('yes')
  //     }
  //   };

  //   (function animate(n) {
  //     n -= 50;
  //     setPosition(n);

  //     if (n >= targetTop) {
  //       setTimeout(animate, 50, n);
  //     }
  //   })(0);
  // };

  return (
    <div
      className="product-card-wrapper product-animation"
      style={{ animationDelay: `${delay}s` }}
      onClick={() => addToCart(name, prodPrice)}
    >
      <div className="product-card">
        {/* {data} */}
        <FontAwesomeIcon className="plus-icon" icon={faCirclePlus} size="xl" />
        <img
          className="product-img"
          alt="img"
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441177_sd.jpg;maxHeight=200;maxWidth=300"
        ></img>
        <img
          className="moveable-img"
          alt="img"
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441177_sd.jpg;maxHeight=200;maxWidth=300"
        ></img>
      </div>
      <div className="product-details">
        <div className="product-name">{name}</div>
        <div className="product-price">${prodPrice}</div>
      </div>
    </div>
  );
};
