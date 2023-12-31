import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
import Sidebar from '../Sidebar/Sidebar'
import { CategoryProvider } from '../useContext/CtategoryContext'

const Listing = () => {
  return (
    <>
    <CategoryProvider>
        
    <header>
        <Navbar/>
    </header>
    <main style={{marginBottom:'30px', display:'flex',columnGap:'16px', justifyContent:'center'}}>
        <Sidebar/>
        <Products/>
    </main>
    <Footer/>
    </CategoryProvider>
      
    </>
  )
}

export default Listing
