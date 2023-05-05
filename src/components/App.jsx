import React, {Component} from 'react';
import Todo from './TodoList/Todo';
import css from './App.module.css';



class App extends Component {

  formSubmitHandler = data => {
    console.log(data);
    
  }

  render() {
    

    return (
      <div className={css.App}>
                  
      <Todo />      
   
      </div>
    )
  }
}

export default App;