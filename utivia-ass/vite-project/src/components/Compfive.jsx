/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import business_img from "../assets/love.4e24b9a9.svg";
import { FaArrowRight } from "react-icons/fa";
import hire_img from "../assets/impact.96c4c843.webp";

const Compfive = () => {
  return (
    <div css={hire_con}>
      <div css={hire_top_wrapper}>
        <p css={hire_top_p1}>
          Digital Transformation for <br /> Individuals and Businesses.
        </p>
        <p css={hire_top_p2}>
          We are a Technology Workforce Development company that helps people
          learn <br /> premium technology skills virtually and partners with
          companies to hire the best talents <br /> and invest in workforce
          development. Currently with learners from 19 countries.
        </p>
      </div>

      <div css={hire_bottom_wrapper}>
        <div css={hire_first}>
          <img src={business_img} style={{ marginLeft: "20px" }} />
          <p css={hire_bottom_p1}>For Impact</p>
          <p css={hire_bottom_p2}>
            Working with some of the top social impact funding partners <br />{" "}
            like HP, Act Foundation, we have taken talent development <br /> to
            over 60 new cities and locations
          </p>
          <div style={{ display: "flex", marginTop: "70px" }}>
            {" "}
            <p css={hire_bottom_p3}>Get Started</p>
            <FaArrowRight
              style={{ marginLeft: "20px", color: "rgb(5,7,148)" , cursor: "pointer"}}
            />
          </div>
          <div css={line}></div>
        </div>
        <div css={hire_img_con}>
          <img src={hire_img} style={{ width: "58%" }} />
          <div css={hire_con_right}>
            <div css={hire_right_child}>
              <p css={hire_right_p}>
                <span
                  style={{
                    color: "white",
                    fontSize: "36px",
                    fontWeight: "600",
                  }}
                >
                  25k
                </span>{" "}
                <br /> student trained
              </p>
            </div>
            <div css={hire_right_child}>
              <p css={hire_right_p}>
                <span
                  style={{
                    color: "white",
                    fontSize: "36px",
                    fontWeight: "600",
                  }}
                >
                  95%
                </span>{" "}
                <br /> Training <br /> Completed
              </p>
            </div>
            <div css={hire_right_child}>
              <p css={hire_right_p}>
                <span
                  style={{
                    color: "white",
                    fontSize: "36px",
                    fontWeight: "600",
                  }}
                >
                  35
                </span>{" "}
                <br /> Major Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compfive;

const hire_right_p = css`
font-size: 15px;
font-weight: 400;
`


const hire_right_child = css`
  padding-right: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const hire_con_right = css`
  width: 58%;
  height: 130px;
  border: 2px solid green;
  position: absolute;
  bottom: 5px;
  left: 360px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  background-color: rgb(16, 166, 98);
  border: none;
`;

const line = css`
  border-left: 1px solid rgb(16, 166, 98);
  margin-left: 20px;
  margin-top: 20px;
  width: 100%;
  height: 120px;
`;

const hire_img_con = css`
  width: 60%;
  height: 100%;
  display: flex;
  position: relative;
`;

const hire_bottom_p3 = css`
  margin-left: 20px;
  color: rgb(5,7,148);
  &:hover {
    cursor: pointer;
    color: rgb(251, 175, 27);
  }
`;

const hire_bottom_p2 = css`
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  margin-left: 20px;
  color: rgb(30, 32, 39);
  margin-top: 30px;
`;

const hire_bottom_p1 = css`
  font-size: 30px;
  line-height: 36px;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 30px;
`;

const hire_first = css`
  width: 40%;
  padding-top: 70px;
`;

const hire_bottom_wrapper = css`
  width: 100%;
  display: flex;
`;

const hire_top_p2 = css`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  margin-left: 20px;
`;

const hire_top_p1 = css`
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  color: rgb(30, 32, 39);
  margin-left: 20px;
`;

const hire_top_wrapper = css`
  width: 100%;
  height: 350px;
  background-color: rgb(245, 245, 252);
  padding-top: 100px;
  margin-bottom: 100px;
`;

const hire_con = css`
  width: 100%;
  height: 1300px;
`;
