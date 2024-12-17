import "./Join.css"
import join_one from "../assets/one.4d68efa38081a90b4bac62bb11af471a.svg"
import join_two from "../assets/two.406c993ff905612b937baf55c63cd579.svg"
import join_three from "../assets/three.ba4a86240a816646e42d1f0456b6a1fb.svg"
import join_img from "../assets/tour.202224d918feddce1a3a.png"
import join_four from "../assets/four.275198b8be4e7001a573d655b828904a.svg"
import blue_img from "../assets/img2.9f4674cec577bb7f0f3f.png"



const Join = () => {
  return (
    <div className="join_con">
      <div className="join_wrapper">
        <div className="join">
          <h1>Joining Us Is <br />Very Easy!</h1>
          <p>Get Started in few easy steps</p>
        </div>
        <div className="join_one">
          <img src={join_one}/>
          <h2>Create account</h2>
          <p>Create an account with your valid details</p>
        </div>
        <div className="join_one">
          <img src={join_two} />
          <h2>Fund account</h2>
          <p>Credit your account to be able to make trash pick up request right in the app</p>
        </div>
        <div className="join_img">
          <img src={join_img} />
        </div>
        <div className="join_one">
          <img src={join_three} />
          <h2>Make a request</h2>
          <p>Request for your trash pick up at a time convenient for you.</p>
        </div>
        <div className="join_one">
          <img src={join_four} />
          <h2>Close a request</h2>
          <p>After trash pick up, you can close the request to show that your trash has been picked up</p>
        </div>
      </div>
      <div className="blue_con">
        <div className="left_blue">
          <img src={blue_img} />
        </div>
        <div className="right_blue">
          <p>together we can! <br />
            encourage proper waste disposal & Promote <br />Recycling, For A Greener Future! ♻️🌍</p>
          <button className="join_btn">
            Join Now!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Join