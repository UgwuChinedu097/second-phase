import styled from "@emotion/styled";
import {FaAngleDown} from "react-icons/fa"
import UtiviaLogo from "../assets/utivacolored.7364336b.svg"
import Button from "../Ui/GlobaButton"
const Header = () => {
  return (
    <Container>
      <LogoHolder>
        <Logo src={UtiviaLogo} />
      </LogoHolder>
      <Navholder>
        <Nav>
          Schools <FaAngleDown style={{ marginLeft: "10px" }} />
        </Nav>
        <Nav>
          Corporate <FaAngleDown style={{ marginLeft: "10px" }} />
        </Nav>
        <Nav>
          Company <FaAngleDown style={{ marginLeft: "10px" }} />
        </Nav>
      </Navholder>

      <ButtonHolder>
        <Button bd="none" bg="rgb(251,175,27)">
          Get Started
        </Button>
        <Button ml="20px" color="black" bg="transparent">Login</Button>
      </ButtonHolder>
    </Container>
  );
};

export default Header;


const ButtonHolder = styled.div`
margin-right: 20px;
`


const Logo = styled.img`
width: 120%;
`

const Nav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
margin-left: 40px;
cursor: pointer;
`

const Navholder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const LogoHolder = styled.div`
margin-left: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
