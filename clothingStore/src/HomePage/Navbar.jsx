import magnify from '../images/magnify.svg';
import cart from '../images/cart.svg';
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
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
                <li><Link to="/Likes"><img src={magnify} className="search"/></Link>

                </li>
                <li><Link to="/Cart"> <img src={cart} className="cart" /></Link></li>
            </ul>


        </nav>
    )
}
