import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import HomeScreen from "./components/HomeScreen";

window.signedIn = false;
window.url = "http://localhost:3000/"

function App() {
  return (
      <main>

          <BrowserRouter>
              <Switch>
                  <Route path = "/" exact component = {() => <LoginPage/>}/>
                  <Route path = "/home" exact component = {() => <HomeScreen/>}/>
              </Switch>
          </BrowserRouter>
      </main>
  );
}

export default App;
