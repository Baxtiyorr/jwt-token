

import './Packs.scss'

import giftPack from '../../assets/images/giftPack.png'
import cleanerFashion from '../../assets/images/CleanerFashion.png'


const Packs = () => {


  return (
    <section>
      <div className="container packs-section">
        <div className="packs__card-wrapper">
            <div className="packs__card">
                <h2>Our Holiday Gift Picks</h2>
                <img src={giftPack} alt="gift pack" />
                <div className="packs__card-content">
                    <h3>The best presents for everyone on your list.</h3>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="packs__card">
                <h2>Cleaner Fashion</h2>
                <img src={cleanerFashion} alt="gift pack" />
                <div className="packs__card-content">
                    <h3>See the sustainability efforts behind each of our products.</h3>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Packs
