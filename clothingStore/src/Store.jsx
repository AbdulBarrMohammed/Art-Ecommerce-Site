
import { Product } from './Product'
import { useState } from 'react'
import { coloredPencilsData, paintbrushData, markersData, paintData, productData} from './data/product-data'


export const Store = ({cart, setCart, likes, setLikes}) => {
    // State to check when side options are clicked
    const [paintActive, setPaintActive] = useState(false);
    const [paintBrushActive, setPaintBrushActive] = useState(false);
    const [coloredPencilActive, setColoredPencilActive] = useState(false);
    const [markersActive, setMarkersActive] = useState(false);
    const [allProd, setAllProd] = useState(true);

    // Flatten the productData array
    const allProducts = productData.flat();


    // Functions to set each option active
    function paintClicked() {
        setPaintActive(true);
        setMarkersActive(false);
        setColoredPencilActive(false);
        setPaintBrushActive(false);
        setAllProd(false);
    }

    function coloredPencilsClicked() {
        setPaintActive(false);
        setMarkersActive(false);
        setColoredPencilActive(true);
        setPaintBrushActive(false);
        setAllProd(false);
    }
    function paintBrushClicked() {
        setPaintActive(false);
        setMarkersActive(false);
        setColoredPencilActive(false);
        setPaintBrushActive(true);
        setAllProd(false);
    }
    function markersClicked() {
        setPaintActive(false);
        setMarkersActive(true);
        setColoredPencilActive(false);
        setPaintBrushActive(false);
        setAllProd(false);
    }


    return (
        <div className="store-container">
            <div className="sidebar">
                <h3>Categories</h3>
                <p onClick={paintClicked}>Paint</p>
                <p onClick={paintBrushClicked}>Paint Brush</p>
                <p onClick={markersClicked}>Markers</p>
                <p onClick={coloredPencilsClicked}>Colored Pencils</p>
            </div>
                <div>
                    <h3 className='product-items-title'>Product Items</h3>
                    <div className="items-container">


                        {coloredPencilActive && coloredPencilsData.map(data => (
                                <Product id={data.id} title={data.name} price={data.price} image={data.imageurl} likes={likes} setLikes={setLikes} data={data} cart={cart} setCart={setCart}/>

                        ))}

                        {markersActive && markersData.map(data => (

                                <Product id={data.id} title={data.name} price={data.price} image={data.imageurl} likes={likes} setLikes={setLikes} data={data} cart={cart} setCart={setCart}/>

                        ))}

                        {paintActive && paintData.map(data => (

                            <Product id={data.id} title={data.name} price={data.price} image={data.imageurl} likes={likes} setLikes={setLikes} data={data} cart={cart} setCart={setCart}/>

                        ))}

                        {paintBrushActive && paintbrushData.map(data => (

                            <Product id={data.id} title={data.name} price={data.price} image={data.imageurl} likes={likes} setLikes={setLikes} data={data} cart={cart} setCart={setCart}/>

                        ))}



                        {allProd && allProducts.map(data => (
                                <Product
                                    key={data.id}
                                    id={data.id}
                                    likes={likes}
                                    setLikes={setLikes}
                                    data={data}
                                    image={data.imageurl}
                                    title={data.name}
                                    price={data.price}
                                    cart={cart}
                                    setCart={setCart}
                                />
                            ))}

                    </div>
                </div>

        </div>
    )
}
