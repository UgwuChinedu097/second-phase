import "./Andela.css"
import logo from "../assets/andela_logo.svg"
import { CgProfile, CgSearch } from "react-icons/cg"

const Andela =() => {
  return (
    <header>
      <div className="parent">
        <div className="first">
          <img src={logo}/>
        </div>
        <div className="second">
          <nav>home</nav>
          <nav>about</nav>
          <nav>why hire?</nav>
          <nav>contact</nav>
          <nav>help</nav>
          <nav>colllection</nav>
        </div>
      </div>
      <div className="third">
        <CgProfile className="pro"/>
        <CgSearch className="src"/>
        <button>Hire me</button>
      </div>
    </header>
  )
}

export default Andela