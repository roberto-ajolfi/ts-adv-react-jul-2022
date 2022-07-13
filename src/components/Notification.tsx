import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export interface INotificationProps {
    message: string;
    onClose: () => void;
}

export default class Notification extends Component<INotificationProps> {
    state = { open: false }
    render() {
        const notificationRoot = document.getElementById('notification-root');
        return ReactDOM.createPortal(
            this.renderWidget(), 
            notificationRoot as HTMLElement
        );
    }

    handleClose = (e: any) => {
        e.preventDefault();
        this.props.onClose();
    }

    static getDerivedStateFromProps(nextProps: any) {
        return { open: nextProps.message.length > 0 };
    }

    renderWidget = () => {
        return(<>{ this.state.open && 
            <div className='notificationWindow'>
            <header className='notificationHeader'>
                <button className='notificationClose' onClick={this.handleClose}>X</button>
            </header>
            <div className='notificationMessage'>
                {this.props.message}
            </div>
        </div>}</>);
    }
}
