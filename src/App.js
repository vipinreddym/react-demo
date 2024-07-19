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
import PopupMenu from "./components/popup";
import SimplePopup from "./components/simplePopup";
import { useState } from 'react';



export default function App() {

    
  
    


    return (
        <div className="App">

            <nav>
                <Link to="/"> Home </Link> ||
                <Link to="/About"> About </Link> ||
                <Link to="/SignUp"> Signup </Link> ||
                <Link to="/popup"> popup </Link>||
                <Link to="/SimplePopup"> simple popup </Link>
                
            </nav>


            <Routes>
                <Route path="/" element={<GeeksforGeeks />} />
                <Route path="/About" element={<About />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/popup" element={<PopupMenu />} />
                <Route path="/SimplePopup" element={<SimplePopup />} />
            </Routes>

        </div>
    );
}