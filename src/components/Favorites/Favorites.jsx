import { useEffect } from 'react'
import {fetchData} from '../redux/slice/fetchData'
import { useDispatch, useSelector } from 'react-redux'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


import './Favorites.scss'



const Favorites = () => {

    const dispatch = useDispatch()
    const mainData = useSelector(state => state.getData) 

    const {data} = mainData

    useEffect(() =>{
        dispatch(fetchData('https://fakestoreapi.com/products'))
    },[])

  return (
    <section>
      <div className="container">
        <div className="favorites-title">
            <h2>Everlane Favorites</h2>
            <h4>Beautifully Functional. Purposefully Designed. Consciously Crafted.</h4>
            <Swiper
            slidesPerView= {4.5}
            spaceBetween= {20}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            style={{ alignItems:'center',}}
        
      >
        
        {
            
         data.map((data, index) =>(
             <SwiperSlide  key={index}>
                <div className='favorite-card'>
                    <img src={data.image} alt={data.title} />
                    <div className='favorite-card-content'>
                        <h3>{data.title}</h3>
                        <h3>${data.price}</h3>
                    </div>
                </div>
             </SwiperSlide>

         ))   
        }
        

      </Swiper>
            

            
        </div>

      </div>
    </section>
  )
}

export default Favorites
