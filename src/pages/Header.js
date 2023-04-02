import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar className='text-white' >
        <Container>
          <Navbar.Brand href="#home">FMOVIEX</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movies Lists</Nav.Link>
            <Nav.Link href="#pricing">Add Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )};

  export default Header;