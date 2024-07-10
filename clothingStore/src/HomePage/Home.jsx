


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import { dealsData } from '../data/product-data'
import { Card } from './Card'

import Slider from 'react-slick';

export const Home = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>
            <div class="home">
                <div class="home-container">
                    <h2>Your one-stop destination for all your art needs</h2>
                    <p>Discover an unparalleled shopping experience with our extensive selection of art products, affordable prices, and exceptional quality. Shop now and transform your art journey with us.
                    </p>

                </div>
                <Link to="/Store">
                    <button>Shop Now</button>
                </Link>


            </div>

            <div className='carousel'>
                <h2>Super Top Deals</h2>

                <Slider {...settings}>
                    {dealsData.map((data) => (
                        <Card name={data.name} price={data.price} originalPrice={data.originalPrice} image={data.imageurl} id={data.id}/>
                    ))}
                </Slider>
            </div>


        </>

    )
}
