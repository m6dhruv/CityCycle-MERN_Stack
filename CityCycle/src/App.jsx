import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./Index"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Sain from "./components/Sain"
import Station from "./components/Station"
import FindBikes from "./components/FindBikes"
import BikeDetails from "./components/BikeDetails"
import RentalProcess from "./components/RentalProcess"
import UserProfile from "./components/UserProfile"
import Price from "./components/Price"
function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/station" element={<Station/>}/>
      <Route path="/find-bikes" element={<FindBikes/>}/>
      <Route path="/bike/:id" element={<BikeDetails/>}/>
      <Route path="/rent/:id" element={<RentalProcess/>}/>
      <Route path="/profile" element={<UserProfile/>}/>
      <Route path="/sain" element={<Sain/>}/>
      <Route path="/price" element={<Price/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
     
    </>
  )
}

export default App
