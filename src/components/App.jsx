import React, {Component} from 'react';
import Todo from './TodoList/Todo';
import css from './App.module.css';
// import Modal from './Modal/Modal';




class App extends Component {
  // state = {
  //   showModal: false,
  // }

  toggleModal = () => {

    this.setState(state => ({
      showModal: !state.showModal
    }))
  }

  formSubmitHandler = data => {
    console.log(data);
    
  }

  render() {
    

    return (
      <div className={css.App}>    
      {/* {this.state.showModal && <Modal/>} */}
      <Todo />      
   
      </div>
    )
  }
}

export default App;