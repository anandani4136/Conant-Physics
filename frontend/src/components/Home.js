import React from 'react'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import "./componentsCSS/Home.css"
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
                {/*<div>*/}
                {/*    <img src={physicsTeam} className="physTeamImg" alt = "Conant physics team"/>*/}
                {/* </div>*/}
                <div className="pageTop">
                    <div className="pagePicture"></div>
                    <div className="pageContent">
                        <div className="centered">Physics for everyone</div>
                        <div className="centered2">Study. Grow. Achieve</div>
                    </div>
                </div>

                <div>
                    <div className="infoDiv">

                        <div className="infoBox">
                            <div className="infoTitle">About Us</div>
                            <div className="infoText">Conant Physics is comprised of four teachers at James B. Conant High School in Hoffman Estates, Illinois. <strong>Chris Bruce</strong>, <strong>Martin Kulak</strong>, and <strong>Dave Torpe</strong> have worked together for years to create a series of comprehensive courses in physics.</div>
                            <div className="infoText">Through careful trial and error, the Conant Physics teachers have become leaders in the education community in introducing technology in the classroom to increase student achievement. Through labs, simulations, interactive lectures, hands on experiences, and other classroom techniques, Conant students are able to discover how exciting it is to learn physics.</div>
                            <div className="infoText">With unmatched passion, the teachers of Conant Physics work to create a community of students who not only love physics, but love to learn about physics.</div>
                        </div>
                        <div className="infoBox">
                            <div className="infoTitle">Contact</div>
                                <MDBCardBody>
                                    <MDBRow className="text-md-left">
                                        <MDBCol lg="15" md="15" className="mb-1">
                                            <div className="infoDiv">
                                                <MDBCol md="2" lg="5" className="float-left">
                                                    <div className="teacherImg"></div>
                                                {/* <MDBAvatar
                                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                                                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                                    tag="img"
                                                    alt="Sample avatar"
                                                /> */}
                                                </MDBCol>
                                                <MDBCol md="20" lg="10" className="float-right">
                                                    <h4 className="font-weight-bold mb-3">Chris Bruce</h4>
                                                    <h6 className="font-weight-bold grey-text mb-3">
                                                        <a href="mailto:cbruce@d211.org">Email</a> | 224-653-3403
                                                    </h6>
                                                    <p className="grey-text">
                                                        Hello! I teach AP Physics C and Physics!
                                                    </p>
                                                    <a href="#!" className="p-2 fa-lg fb-ic">
                                                        <MDBIcon fab icon="facebook-f" />
                                                    </a>
                                                    <a href="#!" className="p-2 fa-lg tw-ic">
                                                        <MDBIcon fab icon="twitter" />
                                                    </a>
                                                    <a href="#!" className="p-2 fa-lg dribbble-ic">
                                                        <MDBIcon fab icon="dribbble" />
                                                    </a>
                                                </MDBCol>
                                                </div>
                                        </MDBCol>

                                        <MDBCol lg="15" md="15" className="mb-1">
                                            <div className="infoDiv">
                                                <MDBCol md="2" lg="5" className="float-left">
                                                    <div className="teacherImg"></div>
                                                {/* <MDBAvatar
                                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                                                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                                    tag="img"
                                                    alt="Sample avatar"
                                                /> */}
                                                </MDBCol>
                                                <MDBCol md="20" lg="10" className="float-right">
                                                    <h4 className="font-weight-bold mb-3">Caleb Cochrum</h4>
                                                    <h6 className="font-weight-bold grey-text mb-3">
                                                        <a href="mailto:ccochrum@d211.org">Email</a> | 224-653-3402
                                                    </h6>
                                                    <p className="grey-text">
                                                        Hello! I teach AP Physics 1 & 2, Physical Science, and Physics!
                                                    </p>
                                                    <a href="#!" className="p-2 fa-lg fb-ic">
                                                        <MDBIcon fab icon="facebook-f" />
                                                    </a>
                                                    <a href="#!" className="p-2 fa-lg tw-ic">
                                                        <MDBIcon fab icon="twitter" />
                                                    </a>
                                                    <a href="#!" className="p-2 fa-lg dribbble-ic">
                                                        <MDBIcon fab icon="dribbble" />
                                                    </a>
                                                </MDBCol>
                                                </div>
                                        </MDBCol>

                                        <MDBCol lg="15" md="15" className="mb-1">
                                            <div className="infoDiv">
                                                <MDBCol md="2" lg="5" className="float-left">
                                                    <div className="teacherImg"></div>
                                                {/* <MDBAvatar
                                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                                                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                                    tag="img"
                                                    alt="Sample avatar"
                                                /> */}
                                                </MDBCol>
                                                <MDBCol md="20" lg="10" className="float-right">
                                                    <h4 className="font-weight-bold mb-3">Martin Kulak</h4>
                                                    <h6 className="font-weight-bold grey-text mb-3">
                                                        <a href="mailto:mkulak@d211.org">Email</a> | 224-653-3407
                                                    </h6>
                                                    <p className="grey-text">
                                                        Hello! I teach AP Physics 1!
                                                    </p>
                                                    <a href="#!" className="p-2 fa-lg fb-ic">
                                                        <MDBIcon fab icon="facebook-f" />
                                                    </a>
                                                    <a href="#!" className="p-2 fa-lg tw-ic">
                                                        <MDBIcon fab icon="twitter" />
                                                    </a>
                                                    <a href="#!" className="p-2 fa-lg dribbble-ic">
                                                        <MDBIcon fab icon="dribbble" />
                                                    </a>
                                                </MDBCol>
                                                </div>
                                        </MDBCol>

                                        <MDBCol lg="15" md="15" className="mb-1">
                                            <div className="infoDiv">
                                                <MDBCol md="2" lg="5" className="float-left">
                                                    <div className="teacherImg"></div>
                                                {/* <MDBAvatar
                                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                                                    className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                                    tag="img"
                                                    alt="Sample avatar"
                                                /> */}
                                                </MDBCol>
                                                <MDBCol md="20" lg="10" className="float-right">
                                                    <h4 className="font-weight-bold mb-3">Dave Torpe</h4>
                                                    <h6 className="font-weight-bold grey-text mb-3">
                                                        <a href="mailto:dtorpe@d211.org">Email</a> | 224-653-3421
                                                    </h6>
                                                    <p className="grey-text">
                                                        Hello! I teach AP Physics 1!
                                                    </p>
                                                    <a href="#!" className="p-2 fa-lg fb-ic">
                                                        <MDBIcon fab icon="facebook-f" />
                                                    </a>
                                                    <a href="#!" className="p-2 fa-lg tw-ic">
                                                        <MDBIcon fab icon="twitter" />
                                                    </a>
                                                    <a href="#!" className="p-2 fa-lg dribbble-ic">
                                                        <MDBIcon fab icon="dribbble" />
                                                    </a>
                                                </MDBCol>
                                                </div>
                                        </MDBCol>
                                        
                                </MDBRow>
                            </MDBCardBody>
                        </div>
                    </div>
                </div>
                


            </div>
            
        );
    }
}