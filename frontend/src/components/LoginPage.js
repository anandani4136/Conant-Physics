import React from 'react'
import "./componentsCSS/LoginPageCSS.css"

export default function LoginPage() {
    return (
        <div>
            <br></br>
            {/*<div>*/}
            {/*</div>*/}
            <div id="loginform">

                <LoginLogo/>
                {/*<FormHeader title="Login" />*/}
                <Form />
            </div>
        </div>
    )
}
const LoginLogo = props => (
    <div className="alignRow">
        <h2 id="loginTitle1">CONANT</h2>
        <h2 id="loginTitle2">PHYSICS</h2>
    </div>
    
);

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
    <div>
        <FormInput description="Email" placeholder="Enter your school email" type="text" />
        <FormInput description="Password" placeholder="Enter your password" type="password"/>
        <FormButton title="Log in"/>
    </div>
);

const FormButton = props => (
    <div id="button" className="row">
        <button>{props.title}</button>
    </div>
);

const FormInput = props => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder}/>
    </div>
);

