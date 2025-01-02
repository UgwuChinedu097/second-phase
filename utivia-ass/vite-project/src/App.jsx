import "./App.css";
import Header from "./static/Header";
import Hero from "./components/Hero";
import Comp from "./components/Comp";
import Comptwo from "./components/Comptwo";
import Compthree from "./components/Compthree";
import Compfour from "./components/Compfour";
import Compfive from "./components/Compfive";
import Compsix from "./components/Compsix";
import Compseven from "./components/Compseven";
import Footer from "./static/Footer";
import {  FaWhatsapp } from "react-icons/fa";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Comp />
      <Comptwo />
      <Compthree />
      <Compfour />
      <Compfive />
      <Compsix />
      <Compseven />
      <Footer />
      <div className="why">
        <FaWhatsapp className="Whatsapp" />
      </div>
    </>
  );
}

export default App;



