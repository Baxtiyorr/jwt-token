import { useEffect } from 'react'
import {fetchData} from '../redux/slice/fetchData'
import { useDispatch, useSelector } from 'react-redux'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


import './PeopleTalking.scss'
import stars from '../../assets/icons/stars.svg'








const PeopleTalking = () => {

    const dispatch = useDispatch()
    const mainData = useSelector(state => state.getData) 

    const {data} = mainData
    console.log(mainData);
    useEffect(() =>{
        dispatch(fetchData('https://fakestoreapi.com/products'))
    },[])
  return (
    <section>
        <div className="container people-talking-section">
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {
            data.map((products, index) =>(

                <SwiperSlide key={index}>
                    <div className="product-card">
                        <div className="product-card-content">
                            <h4>People Are Talking</h4>
                            <img src={stars} alt="stars" />
                            <h2>{products.description}</h2>
                            <h5>-- JonSnSF, <span>The Heavyweight Overshirt-- JonSnSF, The Heavyweight Overshirt</span></h5>
                        </div>
                        <img className='product-card-img' src={products.image} alt={products.title} />
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
        </div>
      
    </section>
  )
}

export default PeopleTalking
