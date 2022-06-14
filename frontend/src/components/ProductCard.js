import "../css/productCard.css";

export const ProductCard = ({ data }) => {
  return (
    <div className="product-card-wrapper">
      <div className="product-card">{data}</div>
      <div className="product-details">
        <div className="product-name">Name</div>
        <div className="product-price">$0</div>
      </div>
    </div>
  );
};
