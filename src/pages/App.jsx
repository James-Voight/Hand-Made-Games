import React from "react";
import Navbar from "../components/navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Games from "./games";
import LPS from "./lps"
import Connect from "./connect"
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/games" element={<Games />} />
                <Route path="/LPS" element={<LPS />} />
                <Route path="/Connect" element={<Connect />} />
            </Routes>
        </Router>
    );
}
 
export default App;