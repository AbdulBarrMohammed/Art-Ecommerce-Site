import { useState } from "react"
import trash from './images/trash-can-outline.svg';

export const Likes = ({ likes, setLikes}) => {
    const [total, setTotal] = useState(0);
    const removeFromLikes = (productId) => {
        setLikes(likes.filter((c) => c.id !== productId));

    }
    return (
        <>
            <div className="like-page-header">
                <h1>Liked Items</h1>
            </div>

            <div className="likes-container">

                <div className="likes-item-container">

                    {likes.map((product) => (

                        <div className="likes-item">
                            <div className="likes-item-left">
                                <img src={product.imageurl}/>
                                <div className="likes-item-description">
                                    <p>{product.name}</p>
                                    <p>In Stock</p>
                                </div>
                            </div>
                            <div className="likes-item-right">
                                <div className="likes-item-label">
                                    <h3>Price</h3>
                                    <p>{product.price}</p>
                                </div>
                                <button onClick={() => removeFromLikes(product.id)}> <img src={trash}/></button>
                            </div>
                        </div>

                        ))}


                </div>
            </div>


        </>

    )

}
