/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import globe from "../assets/map.592c2dcc.webp";
import laptop from "../assets/intensive-learning-white.9c6c05c8.svg";
import grow from "../assets/grow.77b9dac5.svg";
import briefcase from "../assets/experiment.884a709b.svg";
import people from "../assets/people.fb6e3334.svg";
import learn_img from "../assets/avatars.6597823f.webp";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import girlWithLaptop from "../assets/accelerate1.3fa8c6c0.webp";
import boyWithLaptop from "../assets/accelerate2.17c372b2.webp";
import three_img from "../assets/group-icon-white.6bb54811.svg";

const Compsix = () => {
  return (
    <div css={learn_con}>
      <div css={learn_p_wrapper}>
        <p css={learn_p}>
          How Will You <span style={{ color: "rgb(251, 175, 27)" }}>Learn</span>
        </p>
        <p css={learn_p1}>
          Premium skills learning across the entire digital product lifecycle:
          data, design,
          <br /> development, marketing, and product management.
        </p>
      </div>
      <div css={learn_img_wrapper}>
        <img src={globe} style={{ width: "60%" }} />
      </div>

      <div css={learn_content_con}>
        <div css={learn_content_wrapper}>
          <img src={laptop} style={{ marginLeft: "20px" }} />
          <p css={learn_content_p}>Immersive Learning</p>
          <ul css={list}>
            <li style={{ marginLeft: "20px", marginTop: "10px" }}>
              Robust content and Videos
            </li>
            <li style={{ marginLeft: "20px", marginTop: "15px" }}>
              Self-paced + Live Classes
            </li>
            <li style={{ marginLeft: "20px", marginTop: "15px" }}>
              Assessments and projects
            </li>
          </ul>
        </div>

        <div css={learn_content_wrapper}>
          <img src={people} style={{ marginLeft: "20px" }} />
          <p css={learn_content_p}>Lectures & Lab</p>
          <ul css={list}>
            <li style={{ marginLeft: "20px", marginTop: "10px" }}>
              Weekend classes
            </li>
            <li style={{ marginLeft: "20px", marginTop: "15px" }}>
              intensive Training
            </li>
            <li style={{ marginLeft: "20px", marginTop: "15px" }}>
              Focus on real business cases
            </li>
          </ul>
        </div>

        <div css={learn_content_wrapper}>
          <img src={briefcase} style={{ marginLeft: "20px" }} />
          <p css={learn_content_p}>Capstone Projects</p>
          <ul css={list}>
            <li style={{ marginLeft: "20px", marginTop: "10px" }}>
              Work on multiple projects
            </li>
            <li style={{ marginLeft: "20px", marginTop: "15px" }}>
              Get real-time feedback
            </li>
            <li style={{ marginLeft: "20px", marginTop: "15px" }}>
              Real-time mentoring
            </li>
          </ul>
        </div>

        <div css={learn_content_wrapper}>
          <img src={grow} style={{ marginLeft: "20px" }} />
          <p css={learn_content_p}>Job & Career Coaching</p>
          <ul css={list}>
            <li style={{ marginLeft: "20px", marginTop: "10px" }}>
              Learn to leverage LinkedIn
            </li>
            <li style={{ marginLeft: "20px", marginTop: "15px" }}>
              CV for tech industry
            </li>
            <li style={{ marginLeft: "20px", marginTop: "15px" }}>
              Access to job opportunities
            </li>
            <li style={{ marginLeft: "20px", marginTop: "15px" }}>
              Demo sessions on interviews
            </li>
          </ul>
        </div>
      </div>

      <div css={accele_con}>
        <div css={accele_wrapper_p}>
          <p css={accele_p} style={{ color: "white" }}>
            Accelerate Your Growth. <br />
            <span css={span_text_accele}>
              Think it, become it with <br /> Utiva
            </span>
          </p>
        </div>
        <div css={accele_wrapper_img}>
          <img src={learn_img} style={{ width: "20%" }} />
          <p
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              marginLeft: "10px",
              marginRight: "20px",
            }}
          >
            Read Testimonials
            <GoArrowUpRight
              style={{ color: "white", fontWeight: "600", fontSize: "14px" }}
            />{" "}
            <br />
            <span style={{ fontWeight: "400", fontSize: "12px" }}>
              Over 20 amazing stories
            </span>
          </p>
        </div>

        <div css={accele_four_con_holder}>
          <div css={accele_one} style={{ backgroundColor: "rgb(255,255,255)" }}>
            <p css={accele_one_p}>110k +</p>
            <p css={accele_one_p2}>Students Trained</p>
          </div>
          <div css={accele_one}>
            <img
              src={girlWithLaptop}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div css={accele_one} style={{ backgroundColor: "rgb(6,207,116)" }}>
            <p css={accele_one_p}>85%</p>
            <p css={accele_one_p2}>Hiring rate of Utiva Learners</p>
          </div>
          <div css={accele_one}>
            <img
              src={boyWithLaptop}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              marginLeft: "15px",
              marginTop: "30px",
              color: "white",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            We are a platform that helps you learn tech skills and turn projects
            into hiring visibility.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "rgb(218,152,37)",
              marginTop: "20px",
            }}
          >
            <p
              style={{
                marginLeft: "15px",

                color: "white",
                fontSize: "18px",
                fontWeight: "400",
                cursor: "pointer",
              }}
            ></p>
            Get Started
            <GoArrowRight
              style={{
                marginLeft: "15px",
                fontSize: "18px",
                fontWeight: "400",
                cursor: "pointer",
                color: "rgb(218,152,37)",
              }}
            />
          </div>
          <img
            src={three_img}
            style={{
              width: "15%",
              marginTop: "50px",
              marginLeft: "15px",
              marginBottom: "100px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Compsix;

const accele_one_p2 = css`
  margin: 10px 0 0 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const accele_one_p = css`
  margin: 150px 0px 0 40px;
  font-size: 60px;
  font-weight: 600;
  line-height: 60px;
`;

const accele_one = css`
  width: 24.5%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

const accele_four_con_holder = css`
  width: 100%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  justify-content: center;
`;

const span_text_accele = css`
  background: linear-gradient(
    to left,
    rgb(16, 166, 98),
    rgb(226, 182, 68),
    rgb(145, 188, 179)
  );
  -webkit-background-clip: text;
  color: transparent;
`;

const accele_wrapper_img = css`
  width: 30%;
  height: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;
`;

const accele_p = css`
  font-size: 60px;
  font-weight: 600;
  line-height: 75px;
  margin-top: 70px;
  margin-left: 20px;
`;

const accele_wrapper_p = css`
  width: 70%;
  height: 300px;
`;

const accele_con = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const list = css`
  list-style: disc;
  margin-left: 15px;
  color: white;
`;

const learn_content_p = css`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin-top: 15px;
  margin-left: 20px;
  color: white;
  margin-bottom: 20px;
`;

const learn_content_wrapper = css`
  width: 25%;
  height: 250px;
`;

const learn_content_con = css`
  width: 100%;
  height: 300px;
  display: flex;
`;

const learn_img_wrapper = css`
  width: 49%;
  height: 450px;
  display: flex;
  justify-content: center;
`;

const learn_p_wrapper = css`
  width: 49%;
  height: 450px;
  margin-left: 20px;
`;

const learn_p1 = css`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: white;
  margin-top: 30px;
`;

const learn_p = css`
  color: white;
  line-height: 60px;
  font-weight: 600;
  font-size: 48px;
  margin-top: 100px;
`;

const learn_con = css`
  width: 100%;
  background-color: rgb(0, 2, 105);
  display: flex;
  flex-wrap: wrap;
`;
