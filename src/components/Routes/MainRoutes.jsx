import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"

import Listing from "../Pages/Listing"


const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Listing" element={<Listing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
