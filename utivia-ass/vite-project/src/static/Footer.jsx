/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logo from "../assets/utivacolored.7364336b.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {CiMail} from "react-icons/ci"

const Footer = () => {
  return (
    <div css={footer_con}>
      <div css={left_footer}>
        <img
          src={logo}
          style={{ marginLeft: "20px", marginTop: "100px", width: "20%" }}
        />
        <p css={left_footer_p}>
          We are the leading TECH EDUCATION <br /> company with students from
          over 30 countries <br />
          and a leading UK accreditation to deliver the <br /> best digital
          workforce training.
        </p>
        <div css={social_wrapper}>
          <FaFacebook css={socialMedia1} />
          <FaInstagram css={socialMedia} />
          <FaLinkedin css={socialMedia} />
          <FaYoutube css={socialMedia} />
          <FaTwitter css={socialMedia} />
        </div>
      </div>
      <div css={right_footer}>
        <div css={right_wrapper}>
          <h1 css={right_h1}>Top Courses</h1>
          <p css={right_p}>Data Analytics Bootcamp</p>
          <p css={right_p}>Data Science Bootcamp</p>
          <p css={right_p}>Product Accelerator</p>
          <p css={right_p}>Design Bootcamp</p>
          <p css={right_p}>Tech Sales Bootcamp</p>
          <p css={right_p}>HR Analytics Bootcamp</p>
          <h1 css={right_h1_under} style={{ marginTop: "120px" }}>
            Resources
          </h1>
          <p css={right_p}>Blog</p>
          <p css={right_p}>FAQs</p>
          <p css={right_p}>Events</p>
          <p css={right_p}>Success Stories</p>
          <p css={right_p}>Masterclass</p>
          <p css={right_p}>Consulting Practice</p>
          <p css={right_p}>Scholarship</p>
        </div>

        <div css={right_wrapper}>
          <h1 css={right_h1}>Grow with Utivia</h1>
          <p css={right_p}>Individual</p>
          <p css={right_p}>Business</p>
          <p css={right_p}>Impact</p>
          <p css={right_p}>Utivia Kids</p>
          <p css={right_p}>The Nucleus</p>
          <p css={right_p}>Ubuntu</p>
          <p css={right_p}>Utivia Hire</p>
          <p css={right_p}>Utivia Migrate</p>
          <h1 css={right_h1_under}>Policies</h1>
          <p css={right_p}>Terms and Condition</p>
          <p css={right_p}>Refund Policy</p>
          <p css={right_p}>Our Partners</p>
          <p css={right_p}>Privacy Policy</p>
        </div>

        <div css={right_wrapper}>
          <h1 css={right_h1}>School</h1>
          <p css={right_p}>Data School</p>
          <p css={right_p}>Design School</p>
          <p css={right_p}>Product School</p>
          <p css={right_p}>Progarmming School</p>
          <p css={right_p}>Cloud Computing School</p>
          <p css={right_p}>BlockChina Dev. School</p>
          <p css={right_p}>Marketing School</p>
          <h1 css={right_h1} style={{ marginTop: "80px" }}>
            Contact
          </h1>
          <div css={contact_wrapper}>
            <CiMail />
            <p css={contact_p}>info@utivia.io</p>
          </div>
          <div css={contact_wrapper}>
            <FaMobileAlt />
            <p css={contact_p}>+234 803 515 2982</p>
          </div>
          <div css={contact_wrapper}>
            <FaMobileAlt />
            <p css={contact_p}>+44 7492 589196</p>
          </div>
          <div css={contact_wrapper}>
            <FaMobileAlt />
            <p css={contact_p}>01 229 7777</p>
          </div>
        </div>

        <div css={right_wrapper}>
          <h1 css={right_h1}>Company</h1>
          <p css={right_p}>About Us</p>
          <p css={right_p}>Learning Champions</p>
          <p css={right_p}>Our Partners</p>
          <p css={right_p}>Become a Trainer</p>
          <p css={right_p}>Alumni</p>
          <p css={right_p}>Careers</p>
          <p css={right_p}>Business Network</p>
          <p css={right_p}>Podcast</p>
        </div>
      </div>

      <p style={{marginTop: "130px", marginBottom: "100px", fontSize: "14px", color: "rgb(30, 32, 39)"}}>© 2024 Utiva. All right reserved.</p>
    </div>
  );
};

export default Footer;

const contact_p = css`
  margin-left: 10px;
  color: rgb(30, 32, 39);
`;



const contact_wrapper = css`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: rgb(30, 32, 39);
  &:hover {
    color: rgb(251, 175, 27);
    cursor: pointer;
  }
`;


const right_h1_under = css`
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 50px;
  color: black;
  margin-bottom: 15px;
`;

const right_p = css`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(30, 32, 39);
  &:hover {
    color: rgb(251, 175, 27);
    cursor: pointer;
  }
`;

const right_wrapper = css`
  display: flex;
  flex-direction: column;
  padding-right: 100px;
`;

const right_h1 = css`
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 100px;
  margin-bottom: 15px;
`;

const right_footer = css`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
`;

const socialMedia = css`
  cursor: pointer;
  font-size: 20px;
  cursor: pointer;
  color: rgb(5, 7, 148);
  margin-left: 10px;
`;
const socialMedia1 = css`
  color: rgb(5, 7, 148);
  cursor: pointer;
  font-size: 20px;
`;

const social_wrapper = css`
  margin-top: 30px;
  margin-left: 20px;
`;

const left_footer_p = css`
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 20px;
  margin-top: 20px;
`;

const left_footer = css`
  width: 30%;
`;

const footer_con = css`
  width: 100%;
  background-color: rgb(240, 245, 255);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
