import cpOne from './images/colored-pencils/cp3.jpg'
import pOne from './images/paint/p1.jpg'
import mOne from './images/markers/m4.jpg'
import mFive from './images/markers/m5.jpg'
import pb6 from './images/paint-brushes/pb6.jpg'
import pb4 from './images/paint-brushes/pb4.jpg'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                <button>Shop Now</button>

            </div>

            <div className='carousel'>
                <h2>Super Top Deals</h2>

                <Slider {...settings}>
                    <div className='card'>
                        <div className='image-container'>
                            <img src={cpOne}/>
                        </div>
                        <div className='card-description'>
                            <div className='top-card'>
                                <p className='price-description'>Now Only From</p>
                                <p className='price'>$12.99 to $5.99</p>
                            </div>
                            <p className='description'>Crayola Long Lasting 50 Colored Pencils</p>
                            <button>View Deal</button>

                        </div>

                    </div>
                    <div className='card'>
                        <div className='image-container'>
                            <img src={mOne}/>
                        </div>
                        <div className='card-description'>
                            <div className='top-card'>
                                <p className='price-description'>Now Only From</p>
                                <p className='price'>$12.99 to $5.99</p>
                            </div>
                            <p className='description'>Sharpie The Ultimate LA Collection Ultime</p>
                            <button>View Deal</button>

                        </div>

                    </div>
                    <div className='card'>
                        <div className='image-container'>
                            <img src={pOne}/>
                        </div>
                        <div className='card-description'>
                            <div className='top-card'>
                                <p className='price-description'>Now Only From</p>
                                <p className='price'>$12.99 to $5.99</p>
                            </div>
                            <p className='description'>Craft Smart Arcylic Paint 59 ml, 16 Sets</p>
                            <button>View Deal</button>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='image-container'>
                            <img src={pb6}/>
                        </div>
                        <div className='card-description'>
                            <div className='top-card'>
                                <p className='price-description'>Now Only From</p>
                                <p className='price'>$12.99 to $5.99</p>
                            </div>
                            <p className='description'>Blend Puffer Fine Brittle Brush For Oil Paint</p>
                            <button>View Deal</button>

                        </div>

                    </div>
                    <div className='card'>
                        <div className='image-container'>
                            <img src={mFive}/>
                        </div>
                        <div className='card-description'>
                            <div className='top-card'>
                                <p className='price-description'>Now Only From</p>
                                <p className='price'>$12.99 to $5.99</p>
                            </div>
                            <p className='description'>Crazy Art Classic Markers, 10 Colors</p>
                            <button>View Deal</button>

                        </div>

                    </div>
                    <div className='card'>
                        <div className='image-container'>
                            <img src={pb4}/>
                        </div>
                        <div className='card-description'>
                            <div className='top-card'>
                                <p className='price-description'>Now Only From</p>
                                <p className='price'>$12.99 to $5.99</p>
                            </div>
                            <p className='description'>ARTEZA Durable Synthetic Hair Brush, Acrylic and Oil</p>
                            <button>View Deal</button>

                        </div>

                    </div>
                </Slider>
            </div>


        </>

    )
}
