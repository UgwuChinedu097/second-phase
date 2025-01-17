/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import tv from "../assets/electronics.png";
import arr from "../assets/7.gif"
import cl from "../assets/clearance.png"
import ph from "../assets/phones.png"
import ap from "../assets/appliances.png"
import bv from "../assets/groceries.png"


const Card = () => {
  return (
    <div css={cardContainer}>
      <div css={cardWrapper}>
        <div css={cards}>
          <div css={imgHolder}>
            <img
              src={tv}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
          <div>
            <p style={{ marginTop: "7px" }}>Tv Audio & Deal</p>
          </div>
        </div>
        <div css={cards}>
          <div css={imgHolder}>
            <img
              src={arr}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
          <div>
            <p style={{ marginTop: "7px" }}>New Arrival</p>
          </div>
        </div>
        <div css={cards}>
          <div css={imgHolder}>
            <img
              src={cl}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
          <div>
            <p style={{ marginTop: "7px" }}>Clearance Sale</p>
          </div>
        </div>
        <div css={cards}>
          <div css={imgHolder}>
            <img
              src={ph}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
          <div>
            <p style={{ marginTop: "7px" }}>Phones & Tablet Deals</p>
          </div>
        </div>
        <div css={cards}>
          <div css={imgHolder}>
            <img
              src={ap}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
          <div>
            <p style={{ marginTop: "7px" }}>Appliances Deals</p>
          </div>
        </div>
        <div css={cards}>
          <div css={imgHolder}>
            <img
              src={bv}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            />
          </div>
          <div>
            <p style={{ marginTop: "7px" }}>Beverages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

const imgHolder = css`
  width: 100%;
  height: 80%;
  border-radius: 5px;
`;

const cards = css`
  width: 16%;
  height: 90%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const cardWrapper = css`
  width: 74%;
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  background-color: white;
`;

const cardContainer = css`
  width: 100%;
  height: 250px;
  background-color: rgb(241, 241, 242);
  display: flex;
  justify-content: center;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, sans-serif;
`;
