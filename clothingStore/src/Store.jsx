
import { Product } from './Product'
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react'
import { coloredPencilsData } from './data/product-data'
import { markersData } from './data/product-data';

export const Store = () => {
    // State to check when side options are clicked
    const [paintActive, setPaintActive] = useState(false);
    const [paintBrushActive, setPaintBrushActive] = useState(false);
    const [coloredPencilActive, setColoredPencilActive] = useState(false);
    const [markersActive, setMarkersActive] = useState(false);

    // Functions to set each option active
    function paintClicked() {
        console.log('paint clicked');
        setPaintActive(true);
        setMarkersActive(false);
        setColoredPencilActive(false);
        setPaintBrushActive(false);
    }

    function coloredPencilsClicked() {
        console.log('colored pencil clicked');
        setPaintActive(false);
        setMarkersActive(false);
        setColoredPencilActive(true);
        setPaintBrushActive(false);
    }
    function paintBrushClicked() {
        console.log('colored pencil clicked');
        setPaintActive(false);
        setMarkersActive(false);
        setColoredPencilActive(false);
        setPaintBrushActive(true);
    }
    function markersClicked() {
        console.log('colored pencil clicked');
        setPaintActive(false);
        setMarkersActive(true);
        setColoredPencilActive(false);
        setPaintBrushActive(false);
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
                            <Link key={data.id} to={`/Store/product/${data.id}`}>
                                <Product title={data.name} price={data.price} image={data.imageurl}/>
                            </Link>
                        ))}

                        {markersActive && markersData.map(data => (
                            <Link key={data.id} to={`/Store/product/${data.id}`}>
                                <Product title={data.name} price={data.price} image={data.imageurl}/>
                            </Link>
                        ))}


                    </div>
                </div>

        </div>
    )
}
