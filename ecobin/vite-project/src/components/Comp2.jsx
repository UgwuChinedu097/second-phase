import "./Comp2.css"
import { GoArrowUpRight } from "react-icons/go"
import Dash_img from "../assets/ecobin_dash.c7928fb481b376b2fd7d.png"

const Comp2 = () => {
  return (
    <div className="dash_c">
        <div className="dash_left">
          <p>Personalized Dashboard</p>
          <h1>A Personalized <br /> Dashboard for every <br />user, whether a shop  <br />owner or resident.</h1>
        </div>
        <div className="dash_right">
          <p>Doesn't really matter whether you are a new or <br /> returning user, you get your own dashboard.</p>
          <button>Get Started <GoArrowUpRight className="arrow"/></button>
        </div>
        <div className="img_con"><img src={Dash_img}/></div>
    </div>
  )
}

export default Comp2