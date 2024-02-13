import Header from "./Component/Header";
import Home from "./Component/Home";
import Login from "./Component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Component/Register";
import AboutUs from "./Component/AboutUs";
import './App.css'

function App() {

  return (
    <>
              <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/services" element={<h1>Services</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
