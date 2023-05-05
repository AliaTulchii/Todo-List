import React, { Component } from 'react'
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');

        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            console.log('Click ESC, need to close window');
            
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        console.log('Click on backdrop');
        
        if (e.currentTarget === e.target) {
            this.props.onClose();   
        }
    }

    render() {
        return createPortal(
            <div className={css.Modal__backdrop} onClick={this.handleBackdropClick}>
                <div className={css.Modal__content}>{this.props.children}</div>
            </div>,
            modalRoot,
        )
    }
}


