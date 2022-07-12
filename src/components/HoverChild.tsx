import React from 'react'

export interface IHoverChildProps { 
    children: (over: boolean) => JSX.Element;
}

export const HoverChild: React.FC<IHoverChildProps> = (props) => {
    const [over, setOver] = React.useState(false);

    const handleOver = () => {
        console.log("handleHovering() invoked");
        setOver(true);
        return true;
    };

    const handleOut = () => {
        console.log("handleLeave() invoked");
        setOver(false);
        return true;
    };

    return (<div
            onMouseEnter={handleOver} onMouseLeave={handleOut}
            style={{ border: "2px solid crimson", padding: "5px" }}>
        {props.children(over)}
    </div>);
}
