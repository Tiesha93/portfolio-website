import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
   <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="bg">Tiesha</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Skills">Experience</Nav.Link>
            <Nav.Link as={Link} to="/Projects">Portfolio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/Skills" element={<Skills/>}/>
         <Route path="/Projects" element={<Projects/>}/>
       </Routes>
       <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead">Copyright</p>
        </div>
       </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
