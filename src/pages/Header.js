import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiMovie2Fill } from "react-icons/ri";

function Header() {
  return (
    <>
      {/* "fm-navbar" = my design class (velvet bar + marquee light bulbs, see App.css) */}
      <Navbar className="text-white fm-navbar">
        <Container>
          {/* Logo: icon + site name */}
          <div href="#home" className="fm-brand"><RiMovie2Fill className='icon'/> FMOVIEX</div>
          {/* Links (they are still "#" anchors like in your original code) */}
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
