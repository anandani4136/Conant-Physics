import React from 'react'
import "./componentsCSS/HomeScreenCSS.css"
import NavBar from "./NavBar"
// import "./componentsCSS/navbar.css"
// import userAuth from '../static/documents/userAuth';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {BrowserRouter, Route} from "react-router-dom";
import Switch from "react-bootstrap/Switch";

import Home from "./Home";
import Resources from "./Resources";
import About from "./About";


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     email: "",
        //     password: "",
        // }
        // alert(userAuth)
        // console.log(userAuth)
        // alert(userAuth.auth)
        // if (!window.signedIn) {
        // console.log(userAuth.userAuth)
        // alert(userAuth.value)
        
        // if (!userAuth.value)  {
        //     window.location.href = window.url;
        // } else {
        //     // alert("WELCOME")
        // }
    }


    render() {
        return (
            <>
                {/*    <Navbar className="navBarBlue" variant="dark">*/}
                {/*    <Container>*/}
                {/*    <Navbar.Brand href="/home">*/}
                {/*        <div className="alignRow">*/}
                {/*            <h2 id="loginTitle3">CONANT</h2>*/}
                {/*            <h2 id="loginTitle4">PHYSICS</h2>*/}
                {/*        </div>*/}
                {/*    </Navbar.Brand>*/}
                {/*    <Nav className="me-auto">*/}
                {/*        <Nav.Link className = "color-navlink" href="/about">About</Nav.Link>*/}
                {/*        <Nav.Link className = "color-navlink" href="/resources">Resources</Nav.Link>*/}
                {/*        <NavDropdown id = "color-dropdown" title="Classes" >*/}

                {/*        </NavDropdown>*/}
                {/*    </Nav>*/}
                {/*    </Container>*/}
                {/*</Navbar>*/}

                <NavBar/>
                <h1>HOME</h1>
            </>
        );
    }
}