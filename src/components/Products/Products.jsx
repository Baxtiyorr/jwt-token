import {fetchData} from '../redux/slice/fetchData'
import { useDispatch, useSelector } from 'react-redux'
import  { useContext } from 'react';
import { CategoryContext } from '../useContext/CtategoryContext';
import './Products.scss'
import { useEffect } from 'react'
import { addCartProducts } from '../redux/slice/crat'




const Products = () => {
    const { selectedCategory } = useContext(CategoryContext);
    const dispatch = useDispatch()
    const mainData = useSelector(state => state.getData) 

    const {data} = mainData

    console.log(mainData);
    useEffect(() =>{
        dispatch(fetchData(`https://fakestoreapi.com/products/${selectedCategory}`))
    },[dispatch])


    const handleAddToCart = (id) => {
        const cartData = {
            userId: id,
            date: new Date().toLocaleString(),
            products: [{ productId: id, quantity: 1 }]
        };
        dispatch(addCartProducts(cartData))
        
    }


  return (
    <section>
      <div className="container">
        <div className="products-title">
             <span>Home / Men</span>
        <h1>Men’s Clothing & Apparel - New Arrivals</h1>
        <h3>Featured</h3>
        </div>
       
        <div className="products-wrapper">
            {
            data.map((product, index) =>(
                    <div className="products__cards" key={index}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <h2><span>$188</span>${product.price}</h2>
                        <button className='card-btn' onClick={() => handleAddToCart(product.id)}>Add cart</button>
                        <div className="discount">30% off</div>
                    </div>
            ))
        }
        </div>
        
      </div>
    </section>
  )
}

export default Products
