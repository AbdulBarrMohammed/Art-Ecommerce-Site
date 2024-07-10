export const Cart = ({ cart, setCart}) => {
    const removeFromCart = (productId) => {
        console.log('removed from cart');
        console.log(productId);
        setCart(cart.filter((c) => c.id !== productId));

    }
    return (
        <>

            <p>This is the cart</p>
            {cart.map((product) => (

                <div>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <button onClick={() => removeFromCart(product.id)}> remove product</button>
                </div>
                ))}
        </>
    )
}
