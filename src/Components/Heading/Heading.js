import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../../image/logo.jpg'
import './Heading.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';


const Heading = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home"> <img
            src={logo}
            className="d-inline-block logo align-top"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link className='bar-link' href="/home">Home</Nav.Link>
            <Nav.Link className='bar-link' href="/features">Features</Nav.Link>
            <Nav.Link className='bar-link' href="/pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="home#slide">
                Slide
              </NavDropdown.Item>
              <NavDropdown.Item href="home#service">Service</NavDropdown.Item>

              <NavDropdown.Item href="home#machine">Machines</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
         {
         user?
         <div> {user.displayName}
          <button className='sign-out mx-2'  bg="primary" onClick={handleSignOut}>SignOut</button>
          </div> 
         :
         <Nav.Link className='login-btn' href="/login">Login</Nav.Link>}
             
          </Form>
        </Container>
      </Navbar>
    </div>

  );
};

export default Heading;