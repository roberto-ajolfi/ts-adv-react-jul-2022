import * as React from 'react'

const BronzeMedal: React.FC<{ name: string }> = 
        (props: { name: string }) => {

    const goldStyle: React.CSSProperties = {
        backgroundColor: "darkgoldenrod",
        border: "2px solid black",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        color: "black"
    };

    const labelStyle: React.CSSProperties = {
        width: "150px",
        textAlign: "center",
        fontSize: "2em",
        fontWeight: "bold",
        backgroundColor: "darkgray",
        color: "black",
        marginTop: "5px"
    };

    return (<React.Fragment>
        <div style={goldStyle}>&nbsp;</div>
        <div style={labelStyle}>{props.name}</div>
        </React.Fragment>);
}

export default BronzeMedal;