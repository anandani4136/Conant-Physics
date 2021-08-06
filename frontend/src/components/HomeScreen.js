import React from 'react'
import "./componentsCSS/HomeScreenCSS.css"
import userAuth from '../static/documents/userAuth';

// export default function LoginPage() {
//     return (
//         <div>
//             <LoginLogo/>
//             <h1>Home</h1>
//         </div>
//     )
// }

// const LoginLogo = props => (
//     <div className="alignRow">
//         <h2 id="loginTitle1">CONANT</h2>
//         <h2 id="loginTitle2">PHYSICS</h2>
//     </div>
    
// );

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
        alert(userAuth.value)
        
        if (!userAuth.value)  {   
            window.location.href = window.url;
        } else {
            alert("WELCOME")
        }
    }


    render() {
        return (
            <h1>HE</h1>
        );
    }
}