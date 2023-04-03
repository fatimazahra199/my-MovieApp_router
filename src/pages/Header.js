import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiMovie2Fill } from "react-icons/ri";


function Header() {
  return (
    <>
      <Navbar className="text-white">
        <Container>
          <div href="#home"><RiMovie2Fill className='icon'/> FMOVIEX</div>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movies Lists</Nav.Link>
            <Nav.Link href="#pricing">Add Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );};

  export default Header;