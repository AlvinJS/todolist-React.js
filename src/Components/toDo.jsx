import React, {useState} from "react";
import SingleTodo from "./singleTodo";
import TodoForm from "./todoForm";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

function ToDo (){
    const todosData = [
        // {
        // key : Math.floor(Math.random()*1000),    
        // description: "Finish Project",
        // time: Date()
        // },
        // {
        //     key : Math.floor(Math.random()*1000),
        //     description: "Clean the room",
        //     time: Date()
        // }
    ];

    const [todos, setTodo] = useState(todosData);

    const addItem = (newTodo) => {
        
        setTodo([...todos, newTodo]);
    }

    const deleteItem=(key)=>{

        setTodo(todos.filter(todo => todo.key !== key))
        
    }
    

    return(
        <div class="m-10 justify-center p-10 bg-gray-300 shadow-lg rounded-lg"> 
       <h1 className="text-4xl text-gray-400 text-center mb-10">ToDo List</h1>
       
       <TodoForm  save={addItem}/>

        <ul>
            {todos.map( (item) => ( 
            <SingleTodo todo = {item} deleteItem={deleteItem} /> 
            ))}

        </ul>
      </div> 
    )

}

export default ToDo;

 