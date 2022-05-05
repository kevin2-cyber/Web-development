import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Interest from "./pages/Interest";
import NavBar from "./components/NavBar";

function App() {
    return ( <
        div >
        <
        BrowserRouter >
        <
        NavBar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/blogs"
        element = { < Contact / > }
        /> <
        Route path = "/settings"
        element = { < Interest / > }
        /> <
        /Routes> <
        /BrowserRouter> <
        /div>
    );
}

export default App;