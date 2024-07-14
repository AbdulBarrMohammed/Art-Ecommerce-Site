import { useEffect, useState } from 'react';
import trash from './images/trash-can-outline.svg';

export const Cart = ({ cart, setCart}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        console.log(cart.length);
        let currTotal = 0;
        let currPrice = 0;
        let currPriceStr = '';

        {cart.map((product) => {

            currPriceStr = product.price
            currPrice = parseFloat(currPriceStr.replace("$", "")) * product.qty;
            currTotal = currTotal + currPrice;

        })}

        setTotal(currTotal);

      }, [cart])



    const removeFromCart = (productId) => {
        setCart(cart.filter((c) => c.id !== productId));

    }
    return (
        <>
            <div className="cart-page-header">
                <h1>Shopping Cart</h1>
            </div>

            <div className="cart-container">

                <div className="cart-item-container">

                {cart.map((product) => (

                    <div className="cart-item">
                        <div className="cart-item-left">
                            <img src={product.imageurl}/>
                            <div className="cart-item-description">
                                <p>{product.name}</p>
                                <p>In Stock</p>
                            </div>
                        </div>
                        <div className="cart-item-right">
                            <div className="cart-item-label">
                                <h3>Price</h3>
                                <p>{product.price}</p>
                            </div>
                            <div className="cart-item-label">
                                <h3>Qty</h3>
                                <p>{product.qty}</p>
                            </div>
                            <div className="cart-item-label">
                                <h3>Subtotal</h3>
                                <p>${product.subTotal}</p>
                            </div>
                            <button onClick={() => removeFromCart(product.id)}> <img src={trash}/></button>
                        </div>
                    </div>

                    ))}


                </div>
                <div className="cart-sidebar">
                    <h3>Order Summary ( {cart.length} items ) </h3>
                    <h4>Estimated Shipping and Tax</h4>
                    <div className='cart-line'></div>
                    <div className='cal-total-container'>
                        <p>Subtotal</p>
                        <p>${total}</p>
                    </div>
                    <div className='cal-total-container'>
                        <p>Shipping</p>
                        <p>$5.99</p>
                    </div>
                    <div className='cal-total-container'>
                        <p>Tax</p>
                        <p>$13.99</p>
                    </div>
                    <h4>Estimated Shipping and Tax</h4>
                    <div className='cart-line'></div>
                    <div className='cal-total-container last'>
                        <p>Calculated Total</p>
                        <p>$ {(total * 14 * 6).toFixed(2)}</p>
                    </div>


                </div>

            </div>


        </>
    )
}
