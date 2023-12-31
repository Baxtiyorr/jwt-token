import './Navbar.scss'
import { FaArrowRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import logo from '../../assets//icons/Logo-1.svg'
import h_outfit from '../../assets/images/Frame1.jpg'
import sweaters from '../../assets/images/Frame3.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AjaxCart from '../Ajax-cart/Ajaxcart';


const Navbar = () => {

  const [navsShow, setNavShow] = useState(false);

  const handleShow = () => setNavShow(true);

  const [deactiv, setDeactive] = useState('display')
  
  const toggleModal = ()=>{
      if(deactiv){
    setDeactive('')
  }else{
    setDeactive('display')
  }

  } 



  return (
    <div className='main-nav'>
    
      <nav>
      <div className='offers'><h3>Get early access on launches and offers.<a href="#"> Sign Up For Texts <FaArrowRight/></a></h3></div>
      <div className="container">
        <div className="navbar">
          <ul className='navbar__menu'>
            <li><a href="#" className='navbar__menu-link'>Women</a></li>
            <li><a href="#" className='navbar__menu-link'>Men</a></li>
            <li><a href="#" className='navbar__menu-link'>About</a></li>
            <li><Link to={'/Listing'} className='navbar__menu-link'>Everworld Stories</Link></li>
          </ul>
          <a href="/"><img src={logo} alt="Everlane" /></a>
          <div className='icons'>
            <IoSearch size={19}/>
            <GoPerson size={19}/>
            <FiShoppingCart size={19} onClick={handleShow}/>
          </div>
        </div>
        
      </div>
      
    </nav>
    <div className="container">
      <div className="categories">
          <ul className='categories__menu'>
            <li className='categories__btn'>Holiday Gifting</li>
            <li className='categories__btn'>New Arrivals</li>
            <li className='categories__btn'>Best-Sellers</li>
            <li className='categories__btn'>Clothing</li>
            <li className='categories__btn'>Tops & Sweaters</li>
            <li className='categories__btn'>Pants & Jeans</li>
            <li className='categories__btn'>Outerwear</li>
            <li className='categories__btn'>Shoes & Bags</li>
            <li className='categories__btn' onClick={toggleModal}>Sale 
              
            </li>
          </ul>
         
          </div>
    </div>
     <div className={`modal ${deactiv}`}>
                <div className="section-1">
                  <ul>
                    <li><h5>HIGHLIGHTS</h5></li>
                    <li><h3>Shop All New Arrivals</h3></li>
                    <li><h3>The Gift Guide</h3></li>
                    <li><h3>New Bottoms</h3></li>
                    <li><h3>New Tops</h3></li>
                    <li><h3>T-Shirt Bundles</h3></li>
                    <li><h3>Under $100</h3></li>
                  </ul>
                </div>
                <div className="section-2">
                  <ul>
                    <li><h5>FEATURED SHOPS</h5></li>
                    <li><h3>The Holiday Outfit Edit</h3></li>
                    <li><h3>Giftable Sweaters</h3></li>
                    <li><h3>Uniform & Capsule</h3></li>
                    <li><h3>The Performance Chino Shop</h3></li>
                    <li><h3>Top Rated Men’s Clothing</h3></li>                    
                  </ul>

                </div>
                <img src={h_outfit} alt="outfit" />
                <img src={sweaters} alt="sweaters" />
              </div>
              <AjaxCart navShow={navsShow}/>
    </div>
  
  )
}

export default Navbar
