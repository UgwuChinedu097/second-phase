/** @jsxImportSource @emotion/react  */
import { css } from "@emotion/react";
import { FaAngleDown } from "react-icons/fa";
import img from "../assets/utivacolored.7364336b.svg";
import {NavLink} from "react-router"

const Header = () => {
  return (
    <header css={headerContainer}>
      <img css={imgStyle} src={img} />

      <div css={navWrapper}>
        <NavLink to="/" css={NavLinkStyle}>
          <nav css={nav}>
            Home
            <FaAngleDown style={{ marginLeft: "5px" }} />
          </nav>
        </NavLink>

        <NavLink to="/about" css={NavLinkStyle}>
          <nav css={nav}>
            About
            <FaAngleDown style={{ marginLeft: "5px" }} />
          </nav>
        </NavLink>

        <NavLink to="/contact" css={NavLinkStyle}>
          <nav css={nav}>
            Contact
            <FaAngleDown style={{ marginLeft: "5px" }} />
          </nav>
        </NavLink>
      </div>

      <div css={buttonWrapper}>
        <button css={getStarted}>get started</button>
        <button css={loginButton}>login</button>
      </div>
    </header>
  );
};

export default Header;

const headerContainer = css`
  padding: 13px;
  height: 80px;
  background-color: rgb(249, 249, 242);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const imgStyle = css`
  width: 100px;
`;

const navWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const nav = css`
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

const buttonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loginButton = css`
  font-size: 16px;
  border: 1px solid blue;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  text-transform: capitalize;
  border-radius: 5px;
  color: rgb(0, 0, 0, 0.7);
`;

const getStarted = css`
  font-size: 16px;
  padding: 13px 20px;
  cursor: pointer;
  outline: none;
  background-color: rgb(251, 175, 27);
  text-transform: capitalize;
  border-radius: 5px;
  margin-right: 14px;
  border: 0;
  color: white;
`;


const NavLinkStyle = css`
 text-decoration: none;
`