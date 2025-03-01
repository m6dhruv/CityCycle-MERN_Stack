import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./Index"
import Nav from "./Nav"
import Footer from "./Footer"
import Sain from "./Sain"
import Station from "./Station"

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/station" element={<Station/>}/>
      {/* <Route path="" element={}/> */}
      {/* <Route path="" element={}/> */}
      {/* <Route path="" element={}/> */}
      <Route path="/sain" element={<Sain/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
     
    </>
  )
}

export default App
