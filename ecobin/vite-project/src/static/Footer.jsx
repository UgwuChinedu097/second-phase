import "./Footer.css"
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="foot_con">
      <div className="foot_wrapper">
        <div className="foot_left">
          <h2>ecoBin</h2>
          <p>reduce waste, promote recycling, and <br /> proper waste disposal.</p>
        </div>
        <div className="foot_right">
          <h1>Connect with Us</h1>
          <p><FaFacebook className="icon" /> Facebook</p>
          <p><FaTwitter className="icon" /> Twitter</p>
          <p><FaInstagram className="icon" /> Instagram</p>
          <p><FaLinkedin className="icon" /> Linkedin</p>
        </div>
      </div>
      <div className="copy">
        <p>copyright © 2024 ecoBin ♻️🌍</p>
      </div>
    </div>
  )
}

export default Footer