import React from 'react'
import "./componentsCSS/LoginPageCSS.css"
import loginInfo from "../static/documents/loginInfo.js"
import loginCheck from '../static/documents/userAuth.js'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        // userAuth.userLoggedIn(false);
        // const fs = require('fs')
        // fs.readFile("\frontend\src\static\documents\userLoggedIn.txt", "utf-8", (err, data) => {
        //     if (err) throw (err);
        //     console.log(data);
        // })
        // alert("SDFSDOFISDOFIUSDFOi")

        // userAuth.value = false;



        this.state = {
            email: "",
            password: "",
        }
    }

    

    setLoginInfo = e => {
        // this.setState({
        //     email: document.getElementById("emailInput").value,
        //     password: document.getElementById("pwInput").value});
        alert(this.state.email + " , " + this.state.password);

        var correctInfo = true;
        //get the string of email from textfile
        const emSuf = this.state.email.substring(this.state.email.indexOf("@") + 1);
        if (emSuf===loginInfo[0]) {
            alert("email good")
        } else {
            correctInfo = false;
        }
        //get the password from textfile and check
        if(this.state.password === loginInfo[1]) {
            alert("password good")
        } else {
            correctInfo = false;
        }

        if(!correctInfo) {
            alert("STOP TRYING TO HACK CONANT PHYSICS")
            window.$signedIn = true;

        } else {

            // const fs = require('fs')
            // let text = "true"
            // fs.writeFile("userLoggedIn.txt", text, (err) => {
            //     if (err) throw err;
            // })
            // set fso = CreateObject()
            window.location.href = window.url + "home"


            // alert("BEFORE SETTING IT TO TRUE AFTER LOGIN IT IS " + userAuth.value)
            // userAuth.value = true;
            //
            // userAuth.userLoggedIn(true)
            // alert("AFTER SETTING IT TO TRUE AFTER LOGIN IT IS " + userAuth.value)
            // Object.freeze(userAuth.value)

            // userAuth = true
            // window.signedIn = true;
            // userAuth.getuserAuth()
            // userAuth.userLoggedIn(true)
            // userLoggedIn(true);
        }
        //global state logged in thing
    }


    // handleChangeValue = e => this.setState({email: e.target.email, password: e.target.password})
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        })
    };

    render() {


        return (
        <div id="loginPage" >
            <br/>
            {/*<div>*/}
            {/*</div>*/}
            <div id="loginform">

                {/*<LoginLogo/>*/}
                <div className="alignRow">
                    <h2 id="loginTitle1">CONANT</h2>
                    <h2 id="loginTitle2">PHYSICS</h2>
                </div>
                {/*<FormHeader title="Login" />*/}
                {/*<Form />*/}
                <div>
                    {/*<FormInput description="Email" placeholder="Enter your school email" type="text" />*/}
                    <div className="row">
                        <label>Email</label>
                        <input id="emailInput" name = "email" type="text" placeholder="Enter your school email"  onChange={this.handleChange}/>
                    </div>
                    {/*<FormInput description="Password" placeholder="Enter your password" type="password"/>*/}
                    <div className="row">
                        <label>Code</label>
                        <input id="pwInput" name = "password" type="password" placeholder="Enter the code" onChange={this.handleChange}/>
                    </div>
                    {/*<FormButton title="Log in"/>*/}
                    <div id="button" className="row">
                        <button onClick={this.setLoginInfo}>Log in</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}