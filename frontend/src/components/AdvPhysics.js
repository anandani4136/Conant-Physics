import React from 'react'
import "./componentsCSS/HomeScreenCSS.css"
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
// import "./componentsCSS/navbar.css"
// import userAuth from '../static/documents/userAuth';
import NavBar from "./NavBar";


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <>
                <NavBar/>

                <h1>Advanced Physics</h1>
            </>
        );
    }
}