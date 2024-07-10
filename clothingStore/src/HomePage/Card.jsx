import { Link } from "react-router-dom"

export const Card = (props) => {

    return (
        <>
            <div className='card'>
                        <div className='image-container'>
                            <img src={props.image}/>
                        </div>
                        <div className='card-description'>
                            <div className='top-card'>
                                <p className='price-description'>Now Only From</p>
                                <p className='price'>{props.originalPrice} to {props.price}</p>
                            </div>
                            <p className='description'>{props.name}</p>
                            <Link key={props.id} to={`/Store/product/${props.id}`}>
                                    <button>View Deal</button>
                            </Link>

                        </div>

                </div>


        </>
    )
}
