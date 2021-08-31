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
            <div>
                <NavBar/>
                <div id="homePage">
                {/*<div>*/}
                {/*    <img src={physicsTeam} className="physTeamImg" alt = "Conant physics team"/>*/}
                {/* </div>*/}
                <div className="pageTop">
                    <div className="pagePicture"></div>
                    <div className="pageContent">
                        <div className="centered">Resources</div>
                        <div className="centered2">Study. Grow. Achieve</div>
                    </div>
                </div>

                <div>
                    <div className="infoDiv">
                        <div className="infoBoxSmall">
                            <a href="https://quest.cns.utexas.edu/">
                                <br></br>
                                <div className="infoTitle">Quest</div>
                                <div className="questLogoImg"></div>
                            </a>
                        </div>
                        <div className="infoBoxSmall">
                            <a href="https://www.simbucket.com/">
                                <div className="infoTitle">SimBucket</div>
                                <div className="simbucketLogoImg"></div>
                            </a>
                        </div>

                        <div className="infoBoxSmall">
                            <a href="https://www.physicsclassroom.com/">
                                <br></br>
                                <div className="infoTitle">Physics Classroom</div>
                                <div className="physclassLogoImg"></div>
                            </a>
                        </div>
                    </div>
                    <div className="infoDiv">
                        <div className="infoBoxSmall">
                            <a href="https://www.scirra.com/construct2">
                                <div className="infoTitle">Construct 2</div>
                                <div className="constructLogoImg"></div>
                            </a>
                        </div>

                        <div className="infoBoxSmall">
                            <a href="https://quizevolved.com/">
                                <div className="infoTitle">Quiz Evolved</div>
                                <div className="quizevolvedLogoImg"></div>
                            </a>
                        </div>
                    </div>
                </div>
                


            </div>
            </div>
        );
    }
}