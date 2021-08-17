import React, {useState, useEffect} from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
// import {db} from "./firebase"
import "../components/componentsCSS/navbar.css"

export default function TopNavbar() {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     db.collection('years').onSnapshot(snapshot => {
    //         setData(snapshot.docs.map(doc => ({
    //             year: doc.id,
    //         })))
    //     })
    // }, []);


    return (
        //CAN USE TRANSPARENT
        // <Navbar className = "color-nav" variant="light" expand="lg" fixed="top">
        //     <Navbar.Brand  href="/"><img
        //       src={CHCLogo}
        //       height="70px" ></img></Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link className = "color-navlink" href="/">Home</Nav.Link>
        //             <Nav.Link className = "color-navlink" href="/about">Team</Nav.Link>
        //             <Nav.Link className = "color-navlink" href="/resources">Resources</Nav.Link>
        //             <NavDropdown id = "color-dropdown" title="Projects" >
        //             {
        //                 data.map(({year}) => (
        //                     <NavDropdown.Item id = "color-dropdown2" key={year} href={"/projects/" + year}>{year}</NavDropdown.Item>
        //                 ))
        //             }
        //         </NavDropdown>
        //         </Nav>
        //
        //     </Navbar.Collapse>
        // </Navbar>
        <Navbar className="navBarBlue" variant="dark">
            <Container>
                <Navbar.Brand href="/home">
                    <div className="alignRow">
                        <h2 id="loginTitle3">CONANT</h2>
                        <h2 id="loginTitle4">PHYSICS</h2>
                    </div>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className = "color-navlink" href="/about">About</Nav.Link>
                    <Nav.Link className = "color-navlink" href="/resources">Resources</Nav.Link>
                    <NavDropdown id = "color-dropdown" title="Classes" >

                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>

    );
}