import React from 'react'

export interface IHoverProps { 
    render: (over: boolean) => JSX.Element;
}

export const Hover: React.FC<IHoverProps> = (props) => {
    const [over, setOver] = React.useState(false);
    const elementId = React.useId();    // <== NEW HOOK (v.18)

    React.useEffect(() => {
        const hoverElement = document.getElementById(`hover-${elementId}`);
        hoverElement?.addEventListener("mouseover", handleEnter);
        hoverElement?.addEventListener("mouseout", handleLeave);
        return () => {
            hoverElement?.removeEventListener("mouseover", handleEnter);
            hoverElement?.removeEventListener("mouseout", handleLeave);
        }
    }, []);

    const handleEnter = () => {
        console.log("handleHovering() invoked");
        setOver(true);
        return true;
    };

    const handleLeave = () => {
        console.log("handleLeave() invoked");
        setOver(false);
        return true;
    };

    return (<div id={`hover-${elementId}`}
            // onMouseEnter={handleEnter} onMouseLeave={handleLeave}    // <== GONZO ...
            style={{ border: "2px solid crimson", padding: "5px" }}>
        {props.render(over)}
    </div>);
}
