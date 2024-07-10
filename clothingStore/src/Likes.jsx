import { useState } from "react"

export const Likes = ({ likes, setLikes}) => {
    const [total, setTotal] = useState(0);
    return (
        <>
            <p>This is the Likes</p>
            {likes.map((product) => (

                <div>
                    <p>{product.name}</p>
                    <p>{[product.price]}</p>
                </div>
            ))}
        </>
    )
}
