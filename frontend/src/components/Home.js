import "../css/home.css";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export const Home = () => {
  let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // test for samples in view
  const [inView, setInView] = useState(false)

  useEffect(() => {
    // check whether samples in view
    let topOfSamplesWrapper = document.querySelector('.sample-products-wrapper')

    const checkTop = () => {
      let scrollTop = topOfSamplesWrapper.getBoundingClientRect().top
      let windowBottom = window.innerHeight - 10

      if (scrollTop < windowBottom) {
        setInView(true)
        window.removeEventListener('scroll', checkTop)
      }
    }

    window.addEventListener('scroll', checkTop)
  })

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
        {inView && myArr.map((num, i=1) => (
          <ProductCard key={num} data={num} delay={i * .15} />
        ))}
      </div>
      <div className="featured-product-wrapper"></div>
    </div>
  );
};
