import React from "react";
import GeeksforGeeks from "./components/geeksforgeeks";

import About from "./components/about";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



export default function App() {
    return (
        <div className="App">
            
                <nav>
                    <Link to="/"> Home </Link> ||
                    <Link to="/About"> About </Link> ||
                </nav>

                
                <Routes>
                    <Route exact path="/" element={<GeeksforGeeks />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            
        </div>
    );
}