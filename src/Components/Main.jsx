import React from "react";
import {Route, Routes} from 'react-router-dom';
import Navigation from "./Navigation";
import ToDo from "./toDo";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Main (){
    return(
        <div className="flex justify-around px-7 py-5 bg-white shadow-b-lg">
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/todo-list" element={<ToDo/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}

export default Main;