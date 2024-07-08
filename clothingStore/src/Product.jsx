
import heart from './images/heart-outline.svg';

export const Product = (props) => {
    return (
        <>
             <div className="product-card">
                            <img src={props.image} className='prod-img'/>
                            <img src={heart} className='heart' id='heart'/>
                            <div className='product-card-bottom'>
                                <h3>{props.title}</h3>
                                <p>Starting At: <span>{props.price}</span></p>
                                <button>Shop Now</button>

                </div>
            </div>
        </>

    )
}
