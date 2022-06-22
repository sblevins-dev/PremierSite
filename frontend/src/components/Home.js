import "../css/home.css";
import { ProductCard } from "./ProductCard";

export const Home = () => {
  let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="home-container">
      <div className="categories-wrapper">
        <span>Option</span>
        <span>Option</span>
        <span>Option</span>
        <span>Option</span>
        <span>Option</span>
        <span>Option</span>
        <span>Option</span>
      </div>
      <div className="hero">Hero</div>

      <div className="featured-wrapper">
        <div className="first">first</div>
        <div className="second">first</div>
        <div className="third">first</div>
      </div>
      <div className="sample-products-wrapper">
        {myArr.map((num) => (
          <ProductCard key={num} data={num} />
        ))}
      </div>
      <div className="featured-product-wrapper"></div>
    </div>
  );
};
