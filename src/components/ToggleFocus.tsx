import React, { Component, CSSProperties, RefObject } from 'react'

export default class ToggleFocus extends Component {
    nomeInputRef: RefObject<HTMLInputElement>;
    cognomeInputRef: RefObject<HTMLInputElement>;

    boxStyle: CSSProperties = {
        border: "1px solid red",
        backgroundColor: "gray",
        color: "darkred",
        padding: "5px",
        width: "100%",
        textAlign: "center"
    };

    constructor(props: any) {
        super(props);
        this.nomeInputRef = React.createRef();
        this.cognomeInputRef = React.createRef();
    }

    changeFocus = (field: string) => {        
        const firstname = this.nomeInputRef.current;
        const lastName = this.cognomeInputRef.current;

        if(firstname && lastName) {
            field == 'n' ? firstname.focus() : lastName.focus();
        }
    };

    render() {
        return (<div style={this.boxStyle}>
            <div style={{ marginBottom: "5px" }}>FOCUS</div>
            <div><input type="text" placeholder='Nome' ref={this.nomeInputRef} /></div>
            <div><input type="text" placeholder='Cognome' ref={this.cognomeInputRef}/></div>
            <button className='btn btn-small btn-warning'
                onClick={(e) => { e.preventDefault(); this.changeFocus('n'); }}>Focus to Nome</button>
                <button className='btn btn-small btn-warning'
                onClick={(e) => { e.preventDefault(); this.changeFocus('c'); }}>Focus to Cognome</button>
        </div>)
    }
}
