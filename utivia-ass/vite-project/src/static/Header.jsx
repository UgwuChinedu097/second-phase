/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import header_logo from "../assets/utivacolored.7364336b.svg";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <header css={con}>
      <div css={header_left_cont}>
        <img css={logostyle} src={header_logo} />
      </div>

      <div css={header_con_middle}>
        <nav css={nav_bar}>
          School
          <FaAngleDown style={{ marginLeft: "10px" }} />
        </nav>

        <nav css={nav_bar}>
          Corporate
          <FaAngleDown style={{ marginLeft: "10px" }} />
        </nav>

        <nav css={nav_bar}>
          Company
          <FaAngleDown style={{ marginLeft: "10px", textAlign: "center" }} />
        </nav>
      </div>

      <div css={header_right}>
        <button css={btn_get}>Get Started</button>
        <button css={btn_login}>Login</button>
      </div>
    </header>
  );
};

export default Header;

const btn_login = css`
  font-size: 16px;
  border: 1px solid blue;
  padding: 12px 30px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  text-transform: capitalize;
  border-radius: 5px;
  color: rgb(0, 0, 0, 0.7);
`;

const btn_get = css`
  font-size: 16px;
  padding: 12px 20px;
  cursor: pointer;
  outline: none;
  background-color: rgb(251, 175, 27);
  text-transform: capitalize;
  border-radius: 5px;
  margin-right: 14px;
  border: 0;
  color: white;
`;

const header_right = css`
  margin-right: 20px;
`;

const nav_bar = css`
  font-size: 16px;
  margin-left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
  color: rgb(0, 0, 0, 0.7);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const header_con_middle = css`
  display: flex;
  align-items: center;
  padding-left: 20px;
  justify-content: center;
`;

const logostyle = css`
  object-fit: contain;
  width: 100%;
  height: 95%;
  cursor: pointer;
`;

const header_left_cont = css`
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 100px;
  height: 70px;
`;

const con = css`
  width: 100%;
  height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(248, 249, 245);
`;
