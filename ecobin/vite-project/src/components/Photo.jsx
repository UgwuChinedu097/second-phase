import "./Photo.css"
import landing1 from "../assets/landingPic1.ddb0a90e42e10a08bbde.jpg"
import landing2 from "../assets/landingPic2.64f2dba4b9c1f5cee078.jpg"
import landing3 from "../assets/landingPic3.331d6284e6dbde3f5729.jpg"
import landing4 from "../assets/landingPic4.2116974a93e09e0fc7b3.jpg"


const Photos = () => {
  return (
    <div className="p_container">
      <img className="photos" src={landing1} />
      <img className="photos" src={landing2} />
      <img className="photos" src={landing3} />
      <img className="photos" src={landing4} />
    </div>
  )
}

export default Photos