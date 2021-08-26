import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import HomeScreen from "./components/HomeScreen";
import Resources from "./components/Resources";
// import { LOGGED_IN } from "./components/LoginPage";


window.url = "http://localhost:3000/"


const PublicRoute = ({component: Component, restricted, isLogged}) => {
    return (
        <Route render={props => (
            isLogged && restricted ? <Redirect to="/" /> : <Component /> 
        )} />
    )
}

const PrivateRoute = ({component: Component, path, isLogged}) => {
    return (
        <Route path={path} render={props => (
        isLogged ?
            <Component />
        : <Redirect to="/" />
    )} />
    )
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const changeLog = () => {
        setIsLoggedIn(false)
    }
  return (
      <main>

          <BrowserRouter>
              <Switch>
                  {/* <Route path = "/" exact component = {() => <LoginPage/>}/>
                  <Route path = "/home" exact component = {() => <HomeScreen/>}/>
                  <Route path = "/resources" exact component = {() =><Resources/>}/> */}
                  <PrivateRoute component={HomeScreen} isLogged={isLoggedIn} path = "/home"  />
                  <PrivateRoute component={Resources} isLogged={isLoggedIn} path = "/resources"  />
                  <PublicRoute restricted = {false} isLogged={isLoggedIn} setLogged={() => changeLog()} component={LoginPage} exact path = "/"  />
                  

              </Switch>
          </BrowserRouter>
      </main>
  );
}

export default App;
