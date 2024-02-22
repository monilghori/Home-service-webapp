import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Component/Register/Register";
import AboutUs from "./Component/About Us/AboutUs";
import Services from "./Component/Service/Services";
import ServiceProvider from "./Component/ServiceProvider/ServiceProvider"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/servicesprovider" element={<Services />} />
          <Route path="/servicesprovider/:id" element={<ServiceProvider />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
