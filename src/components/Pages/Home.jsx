import Everlane from "../Everlane/Everlane"
import Favorites from "../Favorites/Favorites"
import Footer from "../Footer/Footer"
import Industry from "../Industry/Industry"
import Navbar from "../Navbar/Navbar"
import Packs from "../Packs/Packs"
import PeopleTalking from "../PeopleTalking/PeopleTalking"
import Shop from "../Shop/Shop"
import ShopByCategorie from "../ShopByCategorie/ShopByCategorie"
import './Home.scss'

const Home = () => {
  return (
    <>
    <header>
      <Navbar/>
    <div className="hero">
    </div>
    </header>
    <main>
      <ShopByCategorie/>
      <Shop/>
      <Industry/>
      <Favorites/>
      <PeopleTalking/>
      <Packs/>
      <Everlane/>
    </main>
    <Footer/>
    </>
  )
}

export default Home
