import React, {useRef} from "react";

function TodoForm({save}){
   
    const descRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    const formRef = useRef();

    const saveItem =(event) =>{

        event.preventDefault();
        const desc = descRef.current.value;
        const dt = dateRef.current.value;
        let newTodo = {
            key : Math.floor(Math.random()*1000),
            description : desc,
            time : dt,
            t: timeRef.current.value
        }
        

        save(newTodo);

        formRef.current.reset();
        
    }


    return(
        
        <form onSubmit={saveItem} ref={formRef}>  
        <input className="m-5 p-3 rounded-lg w-3/4" id="tod" type="text" placeholder="Enter a todo" ref={descRef} required/>
        <input type="date" id="tim" className="m-5 p-3 rounded-lg w-3/4" ref={dateRef} required/>
        <input type="time" id="ok"  className="m-5 p-3 rounded-lg w-3/4" ref={timeRef} required/>
        <button className="py-3 px-7 m-5 rounded-lg bg-green-300 hover:bg-green-400" type="submit">Add</button>
       </form>

        
    )
}

export default TodoForm;