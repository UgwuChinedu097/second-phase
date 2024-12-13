import "./Andela.css"
import { CgProfile } from "react-icons/cg"
import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/andela_logo.svg"

const Andela = () => {
  return(
    <header className="first">
      <div className="parent">
      <div className="firstname">
        <img src={logo}/>
      </div>
      <div className="secondname">
        <nav>Why Andela?</nav>
        <nav>Adaptive Hiring</nav>
        <nav>Solution</nav>
        <nav>Platform</nav>
        <nav>Resources</nav>
        <nav>Talent</nav>
        <nav>About</nav>
      </div>
      </div>

      <div className="thirdname">
        <CgProfile className="profile"/>
        <IoSearchOutline className="search"/>
        <button>Hire Talent</button>
      </div>
    </header>
  )
}

export default Andela