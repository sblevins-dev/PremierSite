import "../css/productCard.css";

export const ProductCard = ({ data, delay }) => {
  return (
    <div
      className="product-card-wrapper product-animation"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="product-card">{data}</div>
      <div className="product-details">
        <div className="product-name">Name</div>
        <div className="product-price">$0</div>
      </div>
    </div>
  );
};
