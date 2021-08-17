import React from 'react'
import "./componentsCSS/HomeScreenCSS.css"
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
                <h1>about</h1>
            </>
        );
    }
}