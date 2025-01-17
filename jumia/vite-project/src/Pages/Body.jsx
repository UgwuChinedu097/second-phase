/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GiCookingPot } from "react-icons/gi";
import { PiDeviceMobile, PiBabyLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { MdOutlineLiveTv } from "react-icons/md";
import { CiApple } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuGamepad2 } from "react-icons/lu";
import middleimg from "../assets/712X384.png";
import phoneimg from "../assets/phone-icon-1.png";
import homeimg from "../assets/icone-seller-1.png"
import returnimg from "../assets/icone-2-return.png"
import gift from "../assets/Untitled-3.gif"

const Body = () => {
  return (
    <div css={hero}>
      <div css={herowrapper}>
        <div css={leftHero}>
          <div css={Applli}>
            <GiCookingPot style={{ marginRight: "5px", fontSize: "20px" }} />
            <p css={leftHeroP}>Appliances</p>
          </div>
          <div css={Applli}>
            <PiDeviceMobile style={{ marginRight: "5px", fontSize: "20px" }} />
            <p css={leftHeroP}>Phone & Tablets</p>
          </div>
          <div css={Applli}>
            <PiDeviceMobile style={{ marginRight: "5px", fontSize: "20px" }} />
            <p css={leftHeroP}>Health & Bueaty</p>
          </div>
          <div css={Applli}>
            <GoHome style={{ marginRight: "5px", fontSize: "20px" }} />
            <p css={leftHeroP}>Home & Office</p>
          </div>
          <div css={Applli}>
            <MdOutlineLiveTv style={{ marginRight: "5px", fontSize: "20px" }} />
            <p css={leftHeroP}>Electronic</p>
          </div>
          <div css={Applli}>
            <PiDeviceMobile style={{ marginRight: "5px", fontSize: "20px" }} />
            <p css={leftHeroP}>Fashion</p>
          </div>
          <div css={Applli}>
            <CiApple style={{ marginRight: "5px", fontSize: "20px" }} />
            <p css={leftHeroP}>SuperMarket</p>
          </div>
          <div css={Applli}>
            <HiOutlineComputerDesktop
              style={{ marginRight: "5px", fontSize: "20px" }}
            />
            <p css={leftHeroP}>Computing</p>
          </div>
          <div css={Applli}>
            <PiBabyLight style={{ marginRight: "5px", fontSize: "20px", }} />
            <p css={leftHeroP}>Baby Products</p>
          </div>
          <div css={Applli}>
            <LuGamepad2 style={{ marginRight: "5px", fontSize: "20px" }} />
            <p css={leftHeroP}>Gaming</p>
          </div>
          <div css={Applli}>
            <p css={leftHeroP}>Musical Instrument</p>
          </div>
          <div css={Applli}>
            <PiDeviceMobile style={{ marginRight: "5px", fontSize: "20px" }} />
            <p css={leftHeroP}>Other categories</p>
          </div>
        </div>
        <div css={middleHero}>
          <img src={middleimg} css={middimg} style={{borderRadius: "5px"}} />
          <div css={dotcontainer}>
            <div css={dot}></div>
            <div css={dot}></div>
            <div css={dot}></div>
            <div css={dot}></div>
            <div css={dot}></div>
            <div css={dot}></div>
            <div css={dot}></div>
            <div css={dot}></div>
          </div>
        </div>
        <div css={rigthHero}>
          <div css={rigthHeroTop}>
            <div css={callHeroWrapper}>
              <img src={phoneimg} style={{ width: "35px", height: "35px", marginLeft: "10px"}} />
              <div css={callholder}>
                <h4 style={{fontSize: "15px"}}>CALL To ORDER</h4>
                <p style={{fontSize: "11.5px"}}>0700-600-0000, 0201888...</p>
              </div>
            </div>
            <div css={callHeroWrapper}>
              <img src={homeimg} style={{ width: "35px", height: "35px", marginLeft: "10px"}} />
              <div css={callholder}>
                <h4>Sell on Jumia</h4>
              </div>
            </div>
            <div css={callHeroWrapper}>
              <img src={returnimg} style={{ width: "35px", height: "35px", marginLeft: "10px"}} />
              <div css={callholder}>
                <h4>Best Deals</h4>
              </div>
            </div>
          </div>
          <div css={rigthHeroTop2}>
            <img src={gift} style={{width: "100%", height: "100%", borderRadius: "5px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

const dot = css`
  width: 8px;
  height: 40%;
  border: none;
  border-radius: 50%;
  background-color: grey;
`

const dotcontainer = css`
  width: 20%;
  height: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 300px;
`



const callholder = css`
  width: 60%;
  margin-left: 10px;
`;

const rigthHeroTop2 = css`
  width: 100%;
  height: 47%;
  border-radius: 5px;
`;

const callHeroWrapper = css`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;

`;

const rigthHeroTop = css`
  width: 100%;
  height: 47%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
`;

const middimg = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const rigthHero = css`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const middleHero = css`
  width: 59%;
  height: 100%;
  border-radius: 5px;
  position: relative;
`;

const leftHeroP = css`
  font-size: 12px;
  font-weight: 400;
`;

const Applli = css`
  width: 90%;
  display: flex;
  margin-top: 10px;
  align-items: center;
  & :hover{
    color: orangered;
    cursor: pointer;
  }
`;

const leftHero = css`
  width: 18%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const herowrapper = css`
  width: 74%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const hero = css`
  width: 100%;
  height: 380px;
  background-color: rgb(241, 241, 242);
  display: flex;
  justify-content: center;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, sans-serif;
`;
