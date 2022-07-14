import React, { Component, CSSProperties, RefObject, useRef } from 'react'

export default class ClassRef extends Component {
    msgBoxRef: RefObject<MessageBox> = React.createRef();

    boxStyle: CSSProperties = {
        border: "1px solid red",
        backgroundColor: "gray",
        color: "darkred",
        padding: "5px",
        width: "100%",
        textAlign: "center"
    };
    
    handleClick = (e: any) => {
        e.preventDefault();

        this.msgBoxRef.current?.changeMessage("CAMBIATO!");
    };

    render() {
        return (
        <div style={this.boxStyle}>
            <MessageBox ref={this.msgBoxRef}/>
            <button className='btn btn-primary' onClick={this.handleClick}>Change Message</button>
        </div>
        )
    }
}

export const FunctionRef: React.FC = () => {
    const boxStyle: CSSProperties = {
        border: "1px solid red",
        backgroundColor: "gray",
        color: "darkred",
        padding: "5px",
        width: "100%",
        textAlign: "center"
    };
    
    const handleClick = (e: any) => {
        e.preventDefault();

        msgBoxRef.current?.changeMessage("CAMBIATO!");
    };

    const msgBoxRef = useRef<MessageBox>(null);

    return(<div style={boxStyle}>
        <MessageBox ref={msgBoxRef}/>
        <button className='btn btn-primary' onClick={handleClick}>Change Message</button>
    </div>);
};

export class MessageBox extends Component {
    state = { message: 'Hello!' };

    changeMessage = (message: string) => this.setState({ message });

    render(): JSX.Element {
        return (<div>{this.state.message}</div>);
    }
}