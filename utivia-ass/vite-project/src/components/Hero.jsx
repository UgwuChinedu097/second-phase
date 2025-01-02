/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaArrowRight } from "react-icons/fa";
import avatar_img from "../assets/avatar.b3921e9f (1).png";
import chisom from "../assets/chisom.5e1c6dcc.webp";
import gilbert from "../assets/gilbert.1cda14e9.webp";
import ruth from "../assets/ruth.64a5a834.webp";
import playbtn from "../assets/play-btn.1aab0975.svg"
import blue_wave from "../assets/overlay-gradient.ae704b9f.svg"



const Hero = () => {
  return (
    <div css={hero_con}>
      <div css={hero_con_left}>
        <h1 css={hero_h1}>
          Building Top <br />
          Tech Talents for <br />
          the World
        </h1>
        <p css={hero_p}>
          Our Bootcamps are designed to help you learn from the best industry{" "}
          <br />
          leaders from more than 19 countries
        </p>
        <div css={hero_btn_con}>
          <button css={btn_individual}>
            Individual
            <FaArrowRight style={{ marginLeft: "40px" }} />
          </button>
          <button css={btn_Business}>
            Business
            <FaArrowRight style={{ marginLeft: "40px" }} />
          </button>
        </div>
        <div css={left_img_con}>
          <img src={avatar_img} css={img_left} />
          <p css={left_text}>
            Over 110k+ professionals trained.
            <span
              style={{
                color: "rgb(5, 7, 148)",
                font: "13px",
                fontWeight: "540",
                cursor: "pointer",
              }}
            >
              Read stories
            </span>
          </p>
        </div>
      </div>

      <div css={hero_con_rigth}>
        <div css={video_container}>
          <img
            src={chisom}
            style={{
              objectFit: "fill",
              width: "90%",
              height: "100%",
              position: "absolute",
            }}
          />
          <img
            src={blue_wave}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              marginRight: "200px",
              right: "0px",
              left: "10px",
            }}
          />
          <img
            src={playbtn}
            style={{
              position: "absolute",
              width: "15%",
              height: "100%",
              marginTop: "150px",
              left: "200px"
            }}
          />
        </div>
        <div css={right_side_imgCon}>
          <img src={chisom} css={right_side_img} />
          <img src={gilbert} css={right_side_img} />
          <img src={ruth} css={right_side_img} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const right_side_img = css`
  width: 60%;
  margin-top: 20px;
  cursor: pointer;
`;

const right_side_imgCon = css`
  display: flex;
  margin-top: 70px;
  align-items: center;
  flex-direction: column;
  width: 20%;
  height: 70%;
`;

const left_text = css`
  font-size: 13px;
  margin-left: 20px;
  font-weight: 540;
`;

const img_left = css`
  width: 10%;
  margin-right: 0;
`;

const left_img_con = css`
  display: flex;
  align-items: center;
  margin-top: 65px;
`;

const video_container = css`
  width: 75%;
  height: 75%;
  border-radius: 10px 15px 50% 50%;
  margin-left: 70px;
  margin-top: 90px;
  position: relative;
`;
const hero_con_rigth = css`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const btn_Business = css`
  padding: 18px 25px;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
  background-color: white;
  border: 1px solid rgb(251, 175, 27);
  font-size: 17px;
  box-shadow: 0px 0px 50px -18px rgb(251, 175, 27);
  cursor: pointer;
`;

const btn_individual = css`
  padding: 18px 25px;
  border-radius: 10px;
  border: none;
  background-color: rgb(251, 175, 27);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: white;
  cursor: pointer;
  font-size: 17px;
`;

const hero_btn_con = css`
  display: flex;
  margin-top: 40px;
`;

const hero_p = css`
  font-family: 30px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 30px;
  margin-top: 40px;
`;

const hero_h1 = css`
  font-size: 72px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(5, 7, 148);
  margin-top: 100px;
  font-weight: 700;
  font-style: normal;
  line-height: 72px;
`;

const hero_con_left = css`
  width: 50%;
  height: 80%;
  margin-left: 20px;
`;

const hero_con = css`
  width: 100%;
  height: 750px;
  display: flex;
  background-color: rgb(249, 249, 241);
`;
