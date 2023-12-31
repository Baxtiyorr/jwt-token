import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Everlane.scss'

import frame14 from '../../assets/images/Frame-14.png'
import frame19 from '../../assets/images/Frame-19.png'
import frame20 from '../../assets/images/Frame-20.png'
import frame21 from '../../assets/images/Frame-21.png'
import frame22 from '../../assets/images/Frame-22.png'
import box from '../../assets/icons/box.svg'
import create from '../../assets/icons/create.svg'
import location from '../../assets/icons/location.svg'


const Everlane = () => {
  return (
    <section>
      <div className="container">
        <div className="everlane-title">
        <h2>Everlane On You</h2>
        <p>Share your latest look with #EverlaneOnYou for a chance to be featured.</p>
        <a href="#">Add Your Photo</a>
        </div>
        <div className="everlane__swiper">
        <Swiper
        cssMode={true}
        navigation={true}
        slidesPerView= {5}
        spaceBetween= {18}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='everlane__card'>
                <img src={frame14} alt="#" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='everlane__card'>
                <img src={frame20} alt="#" />
            </div>
        </SwiperSlide> <SwiperSlide>
            <div className='everlane__card'>
                <img src={frame21} alt="#" />
            </div>
        </SwiperSlide> <SwiperSlide>
            <div className='everlane__card'>
                <img src={frame19} alt="#" />
            </div>
        </SwiperSlide> <SwiperSlide>
            <div className='everlane__card'>
                <img src={frame22} alt="#" />
            </div>
        </SwiperSlide> <SwiperSlide>
            <div className='everlane__card'>
                <img src={frame14} alt="#" />
            </div>
        </SwiperSlide>

      </Swiper>
        </div>
        <div className="everlane__service">
            <div className="everlane__service-card">
                <img src={box} alt="box" />
                <h3>Complimentary Shipping</h3>
                <p>Enjoy free shipping on U.S. orders over $100.</p>
            </div>
            <div className="everlane__service-card">
                <img src={create} alt="box" />
                <h3>Consciously Crafted</h3>
                <p>Designed with you and the planet in mind.</p>
            </div> <div className="everlane__service-card">
                <img src={location} alt="box" />
                <h3>Come Say Hi</h3>
                <p>We have 11 stores across the U.S.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Everlane
