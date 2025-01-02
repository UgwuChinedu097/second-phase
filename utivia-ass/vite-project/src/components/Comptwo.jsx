/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaArrowRight } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const Comptwo = () => {
  return (
    <div css={program_con}>
      <h1 css={question_header}>
        What is the Best Learning Program <br />
        for You?
      </h1>
      <div css={program_left}>
        <button css={program_btn}>
          Bootcamps
          <HiLightningBolt
            style={{ color: "rgb(255,130,45)", marginLeft: "5px" }}
          />
        </button>
        <h2 style={{ marginLeft: "20px", fontSize: "30px", marginTop: "20px" }}>
          Intensive BOOTCAMPS Designed To Help <br /> You Get Into Tech
        </h2>
        <p
          style={{
            marginTop: "30px",
            fontSize: "18px",
            marginLeft: "20px",
            width: "80%",
            lineHeight: "30px",
          }}
        >
          Learn tech with others in virtual classes, work on projects, and build
          your portfolio.
        </p>
        <p css={program_p}>
          View Programs
          <FaArrowRight
            style={{ color: "rgb(22,23,155)", marginLeft: "20px" }}
          />
        </p>
      </div>
      <div css={program_right}>
        <button css={program_btn}>
          Bootcamps
          <HiLightningBolt
            style={{ color: "rgb(255,130,45)", marginLeft: "5px" }}
          />
        </button>
        <h2 style={{ marginLeft: "20px", fontSize: "30px", marginTop: "20px" }}>
          Utivia 1 Month TECH School
        </h2>
        <p
          style={{
            marginTop: "30px",
            fontSize: "18px",
            marginLeft: "20px",
            width: "80%",
            lineHeight: "30px",
          }}
        >
          Learn More Than 20 Techology Tool to unlock your career potential.{" "}
          <br />
          Gain the confidence and skill needed to thrive in any business <br />{" "}
          environment
        </p>
        <p css={program_p}>
          View Programs
          <FaArrowRight
            style={{ color: "rgb(22,23,155)", marginLeft: "20px" }}
          />
        </p>
      </div>
    </div>
  );
};

export default Comptwo;


const program_p = css`
  color: rgb(22, 23, 155);
  margin-left: 20px;
  margin-top: 50px;
`;

const program_right = css`
  width: 48%;
  box-shadow: 0px 5px 10px 0px rgb(196, 196, 194), 0px 7px 21px -4px rgb(244, 244, 242);
  margin-top: 20px;
  height: 350px;
  &:hover {
    background-color: rgb(249, 249, 243);
    border: 1px solid orange;
    cursor: pointer;
  }
`;

const program_btn = css`
  padding: 10px 15px;
  border-radius: 50px;
  border: none;
  background-color: rgb(16, 166, 98);
  text-transform: uppercase;
  color: white;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const program_left = css`
  width: 48%;
  margin-top: 20px;
  box-shadow: 0px 5px 10px 0px rgb(196, 196, 194),
    0px 7px 21px -4px rgb(244, 244, 242);
  height: 350px;
  &:hover {
    background-color: rgb(249, 249, 243);
    border: 1px solid orange;
    cursor: pointer;
  }
`;

const question_header = css`
  font-size: 50px;
  margin-left: 20px;
  width: 100%;
  margin-top: 100px;
  color: rgb(22, 23, 155);
`;

const program_con = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 700px;
`;
