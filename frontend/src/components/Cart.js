import { useContext } from 'react'
import { Context } from '../contexts/Context'
import "../css/cart.css"

export const Cart = () => {
    const {cart} = useContext(Context)

  return (
    <div className="cart-page-container">
      <h1>My Cart <span className='cart-page-cart-length'>{cart.length}</span></h1>
      <div className='cart-items-header'>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>
        <ul className="cart-wrapper">
            {cart.length > 0 ? cart.map(product => (
                <li key={product.product.sku} className="cart-product">
                  <img src={product.product.prodImg} alt={product.product.prodName} />
                  <div>{product.product.prodName}</div>
                  <div>{product.product.price}</div>
                  <div></div>
                </li>
            )) : (<li>Nothing in your cart yet!</li>)}
        </ul>
    </div>
  )
}
