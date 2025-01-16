/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Body = () => {
  return <div css={hero}>
    <div css={herowrapper}></div>
  </div>;
};

export default Body;

const herowrapper = css`
width: 74%;
height: 90%;
border: 1px solid red;
`

const hero = css`
  width: 100%;
  height: 80vh;
  background-color: rgb(241, 241, 242);
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
