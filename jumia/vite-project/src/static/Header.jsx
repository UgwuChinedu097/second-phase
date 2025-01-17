/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import jumiaLogo from "../assets/jumia.svg";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";


const Header = () => {
  return (
    <div css={header}>
      <div css={wrapperHeaderBottom}>
        <div css={headerWrapperLeft}>
          <img src={jumiaLogo} css={jumialogo} />
          <h5 css={headerH2}>Sell On Jumia</h5>
        </div>
        <div css={headerWrapperright}>
          <h5 css={headerH5}>Jumia</h5>
          <img src={jumiaLogo} css={jumialogos} />
        </div>
      </div>
      <div css={wrapperheader}>
        <div css={jumiaLogoHolder}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 css={jumiaH1}>Jumia</h1>
            <img src={jumiaLogo} css={logos} />
          </div>
        </div>
        <div css={navsearchHolder}>
          <div css={searchHolder}>
            <input
              type={"search"}
              css={searchbar}
              placeholder="             Search product, brand and categories"
            />
            <MdOutlineSearch style={{fontSize: "25px", color: "grey", position: "absolute", bottom: "24px", left: "10px"}} />
            <button css={searchBtn}>Search</button>
          </div>
          <div css={navHolder}>
            <div css={navWrapper}>
              <MdOutlinePerson
                style={{
                  marginRight: "5px",
                  fontSize: "25px",
                }}
              />
              <nav css={nav}>Account</nav>
              <FaAngleDown
                style={{
                  marginLeft: "10px",
                  fontSize: "14px",
                  fontWeight: "bolder",
                }}
              />
            </div>
            <div css={navWrapper}>
              <AiOutlineQuestionCircle
                style={{
                  marginRight: "5px",
                  fontSize: "25px",
                }}
              />
              <nav css={nav}>Help</nav>
              <FaAngleDown
                style={{
                  marginLeft: "10px",
                  fontSize: "14px",
                  fontWeight: "bolder",
                }}
              />
            </div>
            <div css={navWrapper}>
              <IoCartOutline
                style={{ fontSize: "25px", marginRight: "5px" }}
              />
              <nav css={nav}>Cart</nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const navWrapper = css`
display: flex;
justify-content: center;
align-items: center;
`

const nav = css`
align-self: center;
font-size: 16px;
font-weight: 400;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const navHolder = css`
  height: 100%;
  width: 30%;
  background-color: transparent;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;

const searchBtn = css`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: rgb(246, 139, 30);
  color: white;
  border: none;
`;

const searchHolder = css`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  position: relative;
`;

const searchbar = css`
  width: 85%;
  height: 50%;
  border: 1px solid black;
  border-radius: 5px;
`;

const jumiaH1 = css`
  font-size: 40px;
  font-family: Segoe UI;
  text-transform: capitalize;
`;

const logos = css`
  width: 30px;
`;

const navsearchHolder = css`
  width: 62%;
  height: 100%;
  display: flex;
  ${'' /* border: 2px solid yellow; */}
`;

const jumiaLogoHolder = css`
  width: 12%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const jumialogos = css`
  width: 10px;
`;

const headerH5 = css`
  color: black;
  font-family: Segoe UI;
`;

const headerH2 = css`
  font-size: 12px;
  color: rgb(245, 158, 50);
  font-family: Segoe UI;
  margin-left: 2px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const jumialogo = css`
  width: 18px;
`;

const wrapperHeaderBottom = css`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 30%;
  background-color: rgb(241, 241, 242);
`;

const wrapperheader = css`
  width: 100%;
  background-color: rgb(255, 255, 255);
  height: 70%;
  display: flex;
  justify-content: center;
`;

const headerWrapperright = css`
  width: 37%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const headerWrapperLeft = css`
  width: 37%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const header = css`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
