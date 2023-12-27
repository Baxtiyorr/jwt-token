import Favorites from "../Favorites/Favorites"
import Industry from "../Industry/Industry"
import Navbar from "../Navbar/Navbar"
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
    </main>
    </>
  )
}

export default Home
