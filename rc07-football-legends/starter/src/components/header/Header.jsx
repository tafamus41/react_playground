import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <Image src={logo} width={"200px"}/>
    </Container>
  );
};
export default Header;
