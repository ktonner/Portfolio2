import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navbar'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
      <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/p" exact component={Projects} />
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
