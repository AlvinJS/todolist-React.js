import React from "react";
import ListItem from "./ListItem";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class List extends React.Component{


  constructor(props){
      super(props);
      this.state={
          items:[],
          currentItem:{
             text:'',
             key:'' 
          }
      }

      this.handleInput = this.handleInput.bind(this);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
  }  

  handleInput(e){
      this.setState({
          currentItem:{
              text: e.target.value,
              key:Date.now()
          }
      })
  }

  addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if(newItem.text!==""){
          const newItems =[...this.state.items, newItem];
          this.setState({
              items:newItems,
              currentItem:{
                text: '',
                key:''
              }
            
         })
      }

  }

  deleteItem(key){
    const filteredItems = this.state.items.filter( item =>
        item.key!==key);
        this.setState({
          items:filteredItems
          
        })
  }

  render(){
    return (
     <div class="m-10 justify-center p-10 bg-gray-300 shadow-lg rounded-lg"> 
       <h1 className="text-4xl text-gray-400 text-center mb-10">ToDo List</h1>
       <form onSubmit={this.addItem}>  
        <input className="m-5 p-3 rounded-lg w-3/4" type="text" placeholder="Enter a todo"
         value={this.state.currentItem.text}
         onChange={this.handleInput}/>
        <button className="py-3 px-7 m-5 rounded-lg bg-green-300 hover:bg-green-400" type="submit">Add</button>
       </form> 
     <ListItem items = {this.state.items} deleteItem={this.deleteItem}/>
      </div>  
      
  );
 }
}

export default List;