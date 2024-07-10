import { useParams } from "react-router-dom"
import { coloredPencilsData, paintData, paintbrushData, markersData } from './data/product-data'
import { useState, useEffect } from "react";

export const SelectedProduct = ({cart, setCart}) => {
    const {productid} = useParams();

    const [productData, setProductData] = useState(null);

    useEffect(() => {
        let data = null;
        if (productid.includes('cp')) {
            data = coloredPencilsData.find(item => item.id === productid);
        } else if (productid.includes('m')) {
            data = markersData.find(item => item.id === productid);
        } else if (productid.includes('pb')) {
            data = paintbrushData.find(item => item.id === productid);
        } else if (productid.includes('p')) {
            data = paintData.find(item => item.id === productid);
        }
        setProductData(data);
    }, [productid]);

    const addToCart = () => {
        event.preventDefault();
        setCart([...cart, productData]);

    };

    if (!productData) {
        return <div>Loading...</div>;
    }


    return (
        <>
        <div className="selected-product-container">
            <div className="selected-product-left">
                <img src={productData.imageurl} />
            </div>
            <div className="selected-product-right">
                <div className="selected-product-title">
                    <h2>{productData.name}</h2>
                    <div className="review-line">
                        <div className="rating-box">4.8</div>
                        <p>52 reviews</p>
                    </div>

                </div>

                <div className="product-price-container">
                    <p className="price-title">Price</p>
                    <p className="price product">{productData.price}</p>
                </div>

                <div className="selected-product-description">
                    <p>{productData.descriptionTitle}</p>
                    <p>{productData.description}</p>
                </div>


                <form>
                    <button onClick={(event) => addToCart(event)}>Add to Cart</button>
                </form>


            </div>
        </div>

        </>
    )
}
