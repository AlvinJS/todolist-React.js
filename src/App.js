import React from "react";

import ToDo from "./Components/toDo";
import {Route, Routes} from 'react-router-dom';
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
class App extends React.Component{
  render(){
    return (
    // <ToDo /> 
      <Main/>
  //     <div className="flex justify-around px-7 py-5 bg-white shadow-b-lg">
  //     <Navigation/>
  //     <Routes>
  //         <Route path="/" element={<Home/>}/>
  //         <Route path="/about" element={<About/>}/>
  //         <Route path="/todo-list" element={<ToDo/>}/>
  //         <Route path="/contact" element={<Contact/>}/>
  //     </Routes>
  // </div> 
  )
 }
}

export default App;
