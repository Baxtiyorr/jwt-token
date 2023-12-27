import './ShopByCategorie.scss'
import shirts from '../../assets/images/image-1.png'
import denim from '../../assets/images/denim.png'
import tees from '../../assets/images/tees.png'
import pants from '../../assets/images/pants.png'
import sweaters from '../../assets/images/sweaters.png'
import outwears from '../../assets/images/outwears.png'
const ShopByCategorie = () => {
  return (
    <section>
      <div className="container">
        <h2 className="title">Shop by Category</h2>
        <div className="card-wrapper">
            <div className="card">
                <img src={shirts} alt="" />
                <h3>SHIRTS </h3>
            </div>
            <div className="card">
                <img src={denim} alt="" />
                <h3>denim </h3>
            </div> <div className="card">
                <img src={tees} alt="" />
                <h3>tees </h3>
            </div> <div className="card">
                <img src={pants} alt="" />
                <h3>pants </h3>
            </div> <div className="card">
                <img src={sweaters} alt="" />
                <h3>sweaters </h3>
            </div> <div className="card">
                <img src={outwears} alt="" />
                <h3>outwears </h3>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ShopByCategorie
