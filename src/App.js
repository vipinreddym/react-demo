import React from "react";
import GeeksforGeeks from "./components/geeksforgeeks";

import About from "./components/about";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { SignUp } from "./components/signup";

export default function App() {
    return (
        <div className="App">

            <nav>
                <Link to="/"> Home </Link> ||
                <Link to="/About"> About </Link> ||
                <Link to="/SignUp"> Signup </Link>
            </nav>


            <Routes>
                <Route path="/" element={<GeeksforGeeks />} />
                <Route path="/About" element={<About />} />
                <Route path="/SignUp" element={<SignUp />} />
            </Routes>

        </div>
    );
}