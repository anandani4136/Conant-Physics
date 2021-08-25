import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import HomeScreen from "./components/HomeScreen";
import Resources from "./components/Resources";
import { LOGGED_IN } from "./components/LoginPage";


window.url = "http://localhost:3000/"

const PublicRoute = ({component: Component, restricted}) => {
    return (
        <Route render={props => (
            LOGGED_IN && restricted ? <Redirect to="/" /> : <Component /> 
        )} />
    )
}

const PrivateRoute = ({component: Component}) => {
    <Route render={props => (
        LOGGED_IN ?
            <Component />
        : <Redirect to="/" />
    )} />
}

function App() {
  return (
      <main>

          <BrowserRouter>
              <Switch>
                  {/* <Route path = "/" exact component = {() => <LoginPage/>}/>
                  <Route path = "/home" exact component = {() => <HomeScreen/>}/>
                  <Route path = "/resources" exact component = {() =><Resources/>}/> */}
                  <PublicRoute restricted = {false} component={LoginPage} path = "/" exact />
                  <PublicRoute restricted = {true} component={HomeScreen} path = "/home" exact />
                  <PublicRoute restricted = {true} component={Resources} path = "/resources" exact />

              </Switch>
          </BrowserRouter>
      </main>
  );
}

export default App;
