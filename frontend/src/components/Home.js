import React from 'react'
import "./componentsCSS/HomeScreenCSS.css"
// import "./componentsCSS/navbar.css"
// import userAuth from '../static/documents/userAuth';
import physicsTeam from "../static/images/conantphysicsteam.png";
import teacher from "../static/images/flower-frame.png";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

    }




    render() {
        return (
            <div id="homePage">
                <div>
                    <img src={physicsTeam} classname="homeImg" alt = "Conant physics team"/>
                 </div>
            </div>
            
        );
    }
}