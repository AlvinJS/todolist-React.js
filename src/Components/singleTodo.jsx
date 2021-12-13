import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SingleTodo = ({todo,deleteItem}) => {
    
    const handleDelete = (event) => {
        event.preventDefault();
        deleteItem(todo.key);
    }
    
    return(
        <div className="m-5 p-5 w-full bg-blue-100 rounded-lg max-w-xl">
            
                <div className="m-3 pr-96">{todo.description}</div>
                <div className="m-3 pr-96">{todo.time}</div>
                <div className="m-3 pr-96">{todo.t}</div>
            <span className="m-3"><FontAwesomeIcon className="text-red-700 cursor-pointer" icon="trash" onClick={handleDelete}/></span>
           
            </div>
    );
};

export default SingleTodo;