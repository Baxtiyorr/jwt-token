import './Shop.scss'
import arrivals from '../../assets/images/arrivals.png'
import sellers from '../../assets/images/sellers.png'
import holiday_out from '../../assets/images/holiday-out.png'



const Shop = () => {
  return (
    <section>
      <div className="container">
        <div className="shop-card-wrapper">
            <div className="shop-card">
                <img src={arrivals} alt="arrival" />
            </div>
            <div className="shop-card">
                <img src={sellers} alt="sellers" />
            </div> <div className="shop-card">
                <img src={holiday_out} alt="holiday_out" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
