
import heart from './images/heart-outline.svg';
import { Link, NavLink } from "react-router-dom";
import { SelectedProduct } from './SelectedProduct';

export const Product = ({ likes, setLikes, data, image, id, title, price}) => {

    const addToLikes = () => {
        const alreadyLiked = likes.some((currData) => currData.id === data.id);

        if (alreadyLiked) {
            console.log("data already in here");
        } else {
            setLikes([...likes, data]);
        }
    };
    const removeFromLikes = () => {};
    return (
        <>
             <div className="product-card">
                            <img src={image} className='prod-img'/>
                            <img onClick={addToLikes} src={heart} className='heart' id='heart'/>
                            <div className='product-card-bottom'>
                                <h3>{title}</h3>
                                <p>Starting At: <span>{price}</span></p>

                                <Link key={id} to={`/Store/product/${id}`}>
                                    <button>Shop Now</button>
                                </Link>


                </div>
            </div>
        </>

    )
}
