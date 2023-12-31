import './Footer.scss'
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__content">
          <div className="footer__content-links">
            <h2>Acount</h2>
            <h3><a href="#">Log In</a></h3>
            <h3><a href="#">Sign Up</a></h3>
            <h3><a href="#">Redeem a Gift Card</a></h3>
          </div>
          <div className="footer__content-links">
            <h2>Company</h2>
            <h3><a href="#">About</a></h3>
            <h3><a href="#">Environmental Initiatives</a></h3>
            <h3><a href="#">Factories</a></h3>
            <h3><a href="#">DEI</a></h3>
            <h3><a href="#">Careers</a></h3>
            <h3><a href="#">International</a></h3>
            <h3><a href="#">Accessibility</a></h3>
          </div> <div className="footer__content-links">
            <h2>Get Help</h2>
            <h3><a href="#">Help Center</a></h3>
            <h3><a href="#">Return Policy</a></h3>
            <h3><a href="#">Shipping Info</a></h3>
            <h3><a href="#">Bulk Orders</a></h3>
          </div> <div className="footer__content-links">
            <h2>Connect</h2>
            <h3><a href="#">Facebook</a></h3>
            <h3><a href="#">Instagram</a></h3>
            <h3><a href="#">Twitter</a></h3>
            <h3><a href="#">Affiliates</a></h3>
            <h3><a href="#">Out Stores</a></h3>
          </div>
          <div>
            <form>
            <input className='input' type="email" placeholder='Email Address' />
            <button type='button' className='form-btn'><FaArrowRight/></button>
          </form>
          </div>
          
        </div>
        <div className="footer__service">
          <h4> <a href="#">Privacy Policy</a></h4>
          <h4> <a href="#">Terms of Service</a></h4>
          <h4> <a href="#">Do Not Sell or Share My Personal Information</a></h4>
          <h4> <a href="#">CS Supply Chain Transparency</a></h4>
          <h4> <a href="#">Vendor Code of Conduct</a></h4>
          <h4> <a href="#">Sitemap Pages</a></h4>
          <h4> <a href="#">Sitemap Products</a></h4>
        </div>
        <p className='date'>© 2023 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
