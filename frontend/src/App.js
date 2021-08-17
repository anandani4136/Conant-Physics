import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import HomeScreen from "./components/HomeScreen";
import Resources from "./components/Resources";
import About from "./components/About";


window.url = "http://localhost:3000/"

function App() {
  return (
      <main>

          <BrowserRouter>
              <Switch>
                  <Route path = "/" exact component = {() => <LoginPage/>}/>
                  <Route path = "/home" exact component = {() => <HomeScreen/>}/>
                  <Route path = "/about" exact component = {() =><About/>}/>
                  <Route path = "/resources" exact component = {() =><Resources/>}/>
              </Switch>
          </BrowserRouter>
      </main>
  );
}

export default App;
