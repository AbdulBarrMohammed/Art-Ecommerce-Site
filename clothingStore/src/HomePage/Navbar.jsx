import magnify from '../images/magnify.svg';
import cartImg from '../images/cart.svg';
import heart from '../images/heart-outline.svg';
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';

export const Navbar = ({ cart }) => {
    const [showCounter, setShowCounter] = useState(false);
    useEffect(() => {
        if (cart.length > 0) {
            setShowCounter(true);
        }
        else {
            setShowCounter(false);
        }
    }, [cart]);

    return (
        <nav>

            <h1>Art<span className="red">.</span>Depot<span className='blue'>.</span></h1>

            <ul className="nav_links">
                <li>
                    <Link to="/Store">Store</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="/Likes"><img src={heart} className="search"/></Link>

                </li>
                <li><Link to="/Cart">
                    { showCounter && <span className='cart-count'>{cart.length}</span> }
                    <img src={cartImg} className="cart" />
                </Link></li>
            </ul>


        </nav>
    )
}
