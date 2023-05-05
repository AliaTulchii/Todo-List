import React, { Component } from 'react';
import css from './TodoEditor.module.css'

class TodoEditor extends Component {
    state = {
        message:''
    }

    handleChange = e => {
        this.setState({ message: e.currentTarget.value })
    };

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state);

        this.props.onSubmit(this.state.message);

        this.setState({ message: '' });
    }

    render() {
        return (
            <form className={css.TodoEditor} onSubmit={this.handleSubmit}>
                <textarea className={css.TodoEditor__text} value={this.state.message} onChange={this.handleChange}></textarea>
            
            <button type="submit" className={css.TodoEditor__button}>Save</button>
            </form>
        )
    }
}

export default TodoEditor;