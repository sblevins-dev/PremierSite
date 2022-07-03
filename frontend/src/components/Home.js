import "../css/home.css";
import { useEffect, useState, useContext } from "react";
import { ProductCard } from "./ProductCard";
import { Context } from "../contexts/Context";

export const Home = () => {
  // phone data
  const { phones } = useContext(Context)

  // home phone data
  const samplePhones = phones.slice(0, 9);

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
      <div className="hero-img"></div>
      

      <div className="featured-wrapper">
        <div className="first">first</div>
        <div className="second">first</div>
        <div className="third">first</div>
      </div>
      <div className="sample-products-wrapper">
        {inView && samplePhones.map((phone, i=1) => (
          <ProductCard key={phone.sku} data={phone} delay={i * .15} />
        ))}
      </div>
      <div className="featured-product-wrapper"></div>
    </div>
  );
};
