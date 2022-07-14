import React, { Component, CSSProperties, RefObject } from 'react'

export default class SimpleRef extends Component {
    divRef: RefObject<HTMLDivElement>;

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
        this.divRef = React.createRef();
    }

    toggle = (e: any) => {
        e.preventDefault();
        if(this.divRef.current) {
            this.divRef.current.style.backgroundColor =
            this.divRef.current.style.backgroundColor === 'gray' ? "orange" : "gray";
        }
    };

    render() {
        return (
            <div style={this.boxStyle} ref={this.divRef}>
                <div style={{ marginBottom: "5px" }}>SIMPLE REF</div>
                <button className='btn btn-small btn-warning'
                    onClick={this.toggle}>Toggle BKColor</button>
            </div>
        );
    }
}
