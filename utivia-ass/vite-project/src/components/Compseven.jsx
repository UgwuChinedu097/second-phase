/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GoArrowRight } from "react-icons/go";
import impact_img1 from "../assets/impact1.586cab30.webp"
import impact_img2 from "../assets/impact2.e990c819.webp";
import impact_img3 from "../assets/impact3.806984b1.webp"
import impact_img4 from "../assets/impact4.bbb0b17b.webp";

const Compseven = () => {
  return (
    <div css={impact_con}>
      <h2 css={impact_con_h2}>
        Impact is the reason <br />
        we exist!
      </h2>
      <p css={impact_con_p}>
        Utiva.impact is an impact project of Utiva, a tech company that is{" "}
        <br />
        powering the tech side of learning for people of colour and minorities{" "}
        <br />
        across Africa and the world.
      </p>
      <div css={getStarted_con} style={{cursor: "pointer"}}>
        <p style={{ marginLeft: "20px" }}>Learn more</p>
        <GoArrowRight style={{ marginLeft: "20px" }} />
      </div>
      <div css={impact_four_con_holder}>
        <div css={impact_wrapper}>
          <img src={impact_img1} style={{ width: "100%", height: "100%" }} />
        </div>
        <div css={impact_wrapper}>
          <img src={impact_img2} style={{ width: "100%", height: "100%" }} />
        </div>
        <div css={impact_wrapper}>
          <img src={impact_img3} style={{ width: "100%", height: "100%" }} />
        </div>
        <div css={impact_wrapper}>
          <img src={impact_img4} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Compseven;



const impact_wrapper = css`
  width: 24.5%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

const impact_four_con_holder = css`
  width: 100%;
  height: 370px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  justify-content: center;
  margin-bottom: 100px;
`;


const getStarted_con = css`
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: rgb(5, 7, 148);
`;

const impact_con_p = css`
  margin-top: 40px;
  margin-left: 20px;
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
`;

const impact_con_h2 = css`
  margin-top: 100px;
  margin-left: 20px;
  font-size: 96px;
  line-height: 96px;
  font-weight: 500;
  background: linear-gradient(
    to left,
    rgb(11, 54, 111),
    rgb(9, 138, 96),
    rgb(251, 175, 27),
    rgb(9, 138, 96),
    rgb(11, 54, 111)
  );
  -webkit-background-clip: text;
  color: transparent;
  opacity: 1;
  font-family: sans-serif;
`;

const impact_con = css`
  width: 100%;
`;
