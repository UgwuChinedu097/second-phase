/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaArrowRight } from "react-icons/fa";
import Efamena from "../assets/efemena.d1b18001.jpeg";
import Victoria from "../assets/victoria.48b6f6df.jpg";
import John from "../assets/john.748c486b.jpeg";
import Joy from "../assets/joy.20549c45.jpg";
import terragon from "../assets/download.png";
import Land from "../assets/landwey.76d73f82.png"
import Analyst from "../assets/10alytics.2ff66bd6.png"
import Eden from "../assets/eden.771c40ea.png"

const Compfour = () => {
  return (
    <div css={about_con}>
      <div css={about_h1_con}>
        <h1 css={about_h1}>
          Our Alumni <span style={{ color: "rgb(251, 175, 27)"}}>Stories</span>
        </h1>
        <div css={view_con}>
          <p css={about_view_text}>View All Programs</p>
          <FaArrowRight
            style={{
              marginleft: "50px",
              marginRight: "40px",
              marginTop: "80px",
              color: " rgb(251, 175, 27)",
            }}
          />
        </div>
      </div>
      <div css={about_main_wrapper}>
        <div css={about_wrapper}>
          <div css={about_wrapper_top_con}>
            <img src={Efamena} css={background} />
            <button css={about_btn}>Data Science</button>
          </div>
          <div css={about_wrapper_bottom_con}>
            <p css={about_text}>
              Efemena Ikpro <br />
              <span css={span_text}>Co-Founder, 10Alytics</span>
            </p>
            <img src={Analyst} css={company} style={{ marginTop: "25px" }} />
            <br />
            <button css={read_more_btn} style={{marginTop: "25px"}}>Read More</button>
          </div>
        </div>

        <div css={about_wrapper}>
          <div css={about_wrapper_top_con}>
            <img src={Victoria} css={background} />
            <button css={about_btn}>Product Management</button>
          </div>
          <div css={about_wrapper_bottom_con}>
            <p css={about_text}>
              Victoria Ubak <br />
              <span css={span_text}>COO, LandWey</span>
            </p>
            <img src={Land} css={company} /> <br />
            <button css={read_more_btn}>Read More</button>
          </div>
        </div>

        <div css={about_wrapper}>
          <div css={about_wrapper_top_con}>
            <img src={John} css={background} />
            <button css={about_btn}>Data Science</button>
          </div>
          <div css={about_wrapper_bottom_con}>
            <p css={about_text}>
              John Analoh <br />
              <span css={span_text}>Data Analyst, Eden Life Inc.</span>
            </p>
            <img src={Eden} css={company} style={{ marginTop: "30px" }} />{" "}
            <br />
            <button css={read_more_btn} style={{ marginTop: "18px" }}>
              Read More
            </button>
          </div>
        </div>

        <div css={about_wrapper}>
          <div css={about_wrapper_top_con}>
            <img src={Joy} css={background} />
            <button css={about_btn}>Product Management</button>
          </div>
          <div css={about_wrapper_bottom_con}>
            <p css={about_text}>
              Joy Areola <br />
              <span css={span_text}>Product Manager, Terragon Group</span>
            </p>
            <img src={terragon} css={company} style={{ marginTop: "42px" }} />{" "}
            <br />
            <button css={read_more_btn}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compfour;

const read_more_btn = css`
  padding: 20px 120px;
  border: 1px solid rgb(0, 2, 105);
  margin-left: 15px;
  margin-top: 40px;
  border-radius: 10px;
  color: rgb(0, 2, 105);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: rgb(255, 255, 242);
    background-color: orange;
  }
`;

const view_con = css`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const company = css`
  width: 15%;
  margin-left: 20px;
  margin-top: 50px;
`;

const about_view_text = css`
  font-size: 18px;
  font-weight: 400;
  margin-top: 80px;
  color: rgb(255, 255, 255);
  margin-right: 30px;
  color: rgb(251, 175, 27);
`;

const span_text = css`
  font-size: 14px;
  font-weight: 400;
  color: rgb(86, 68, 86);
`;

const about_text = css`
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 20px;
  color: rgb(0, 0, 0);
`;

const about_wrapper_bottom_con = css`
  width: 100%;
  position: absolute;
  height: 50%;
  bottom: 0;
  border-radius: 0px 0px 15px 15px;
  border: none;
  background-color: rgb(255, 255, 255);
`;

const background = css`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 15px 15px 0px 0px;
`;

const about_wrapper_top_con = css`
  width: 100%;
  height: 50%;
  background-size: contain;
  border-radius: 15px 15px 0px 0px;
`;

const about_btn = css`
  padding: 5px 7px;
  border-radius: 50px;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  margin-right: 15px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 11px;
  line-height: 17px;
  font-weight: 500;
  font: 500, 13px;
  position: absolute;
  border: none;
  right: 0;
  font-family: Matter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
`;

const about_wrapper = css`
  width: 350px;
  height: 500px;
  margin-left: 10px;
  border-radius: 15px;
  margin-right: 10px;
  position: relative;
  margin-top: 35px;
  cursor: pointer;
`;

const about_main_wrapper = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 700px;
  justify-content: center;
`;

const about_h1 = css`
  font-size: 48px;
  line-height: 60px;
  font-weight: 600;
  margin-left: 20px;
  color: rgb(255, 255, 255);
  margin-top: 80px;
  font-family: "TT Firs Neue", monospace;
`;

const about_h1_con = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 50px;
`;

const about_con = css`
  width: 100%;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(0, 2, 105);
`;
