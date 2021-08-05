import React from 'react'
import "./componentsCSS/LoginPageCSS.css"


export default function LoginPage() {
    return (
        <div>
            <LoginLogo/>
            <h1>Home</h1>
        </div>
    )
}

const LoginLogo = props => (
    <div className="alignRow">
        <h2 id="loginTitle1">CONANT</h2>
        <h2 id="loginTitle2">PHYSICS</h2>
    </div>
    
);