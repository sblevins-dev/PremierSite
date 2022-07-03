import { useContext } from 'react'
import { Context } from '../contexts/Context'
import "../css/cart.css"

export const Cart = () => {
    const {cart} = useContext(Context)

  return (
    <div className="cart-page-container">
        <ul className="cart-wrapper">
            {cart.length > 0 ? cart.map(product => (
                <li key={product.product.sku} className="cart-product">{product.product.price}</li>
            )) : (<li>Nothing in your cart yet!</li>)}
        </ul>
    </div>
  )
}
