import React from 'react';
import css from './TodoList.module.css'
import {FaTrashAlt} from 'react-icons/fa'

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) =>
    
    <ul className={css.TodoList}>
        {todos.map(({ id, text, completed}) =>
            <li key={id}
                className={css.TodoList__item}>
                
                <input 
                    type='checkbox'
                    className={css.TodoList__checkbox}
                    checked={completed}
                    onChange={() => onToggleCompleted(id)}
                />
                
                <p className={css.TodoList__text}>{text}</p>
                <button
                    className={css.TodoList__button}
                    onClick={() => onDeleteTodo(id)}
                ><FaTrashAlt /></button>
            </li>)}
    </ul>;


export default TodoList;