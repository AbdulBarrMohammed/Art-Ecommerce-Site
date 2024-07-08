import { useParams } from "react-router-dom"
import { coloredPencilsData } from './data/product-data'
import { markersData } from "./data/product-data";


export const SelectedProduct = () => {
    const {productid} = useParams();
    let name = '';
    let imageUrl = '';
    let price = '';
    let description = '';
    let descriptionTitle = '';
    let reviews = '';
    let rating = '';

    // if productid contains cp
    if (productid.includes('cp')) {
        coloredPencilsData.map(data => {
            if (data.id === productid) {
                name = data.name;
                imageUrl = data.imageurl;
                price = data.price;
                description = data.description;
                descriptionTitle = data.descriptionTitle;

            }
        })
    }
    else if (productid.includes('m')) {
        markersData.map(data => {
            if (data.id === productid) {
                name = data.name;
                imageUrl = data.imageurl;
                price = data.price;
                description = data.description;
                descriptionTitle = data.descriptionTitle;

            }
        })
    }




    return (
        <>
        <div className="selected-product-container">
            <div className="selected-product-left">
                <img src={imageUrl} />
            </div>
            <div className="selected-product-right">
                <div className="selected-product-title">
                    <h2>{name}</h2>
                    <div className="review-line">
                        <div className="rating-box">4.8</div>
                        <p>52 reviews</p>
                    </div>

                </div>

                <div className="product-price-container">
                    <p className="price-title">Price</p>
                    <p className="price product">{price}</p>
                </div>


                <div className="selected-product-description">
                    <p>{descriptionTitle}</p>
                    <p>{description}</p>
                </div>

                <form>
                    <input />
                    <button>Add to Cart</button>
                </form>
            </div>
        </div>

        </>
    )
}
