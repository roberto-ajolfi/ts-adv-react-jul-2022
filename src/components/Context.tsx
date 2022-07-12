import React, { CSSProperties, useContext, useState } from 'react'

//  SENZA CONTEXT API

export const Red: React.FC = () => {
    const [value, setValue] = useState(10);
    
    const boxStyle = { backgroundColor: "red", border: "2px solid black", padding: "10px" };

    return (
        <div style={boxStyle}><Green value={value} onIncrement={() => setValue(value + 1)} /></div>
    )
}

export const Green: React.FC<{ value: number, onIncrement: () => void }> = (props) => {
    const boxStyle = { backgroundColor: "green", border: "2px solid black", padding: "10px" };

    return (
        <div style={boxStyle}><Blue value={props.value} onIncrement={props.onIncrement} /></div>
    )
}

export const Blue: React.FC<{ value: number, onIncrement: () => void }> = (props) => {
    const boxStyle: CSSProperties = { 
        backgroundColor: "navy", color: "white", textAlign: "center",
        border: "2px solid black", padding: "10px",
     };

    return (
      <div style={boxStyle}>
        <div>Valore: {props.value}</div>
        <button onClick={() => props.onIncrement()}>Increment</button>
      </div>
    )
}

// CON IL CONTEXT API
export interface IAppContext { value: number, onIncrement: () => void }

const AppContext = React.createContext<IAppContext>({ value: 0, onIncrement: () => {} });

export const RedCtx: React.FC = () => {
    const [value, setValue] = useState(10);
    
    const boxStyle = { backgroundColor: "red", border: "2px solid black", padding: "10px" };

    return (
        <AppContext.Provider value={{ value, onIncrement: () => { setValue(value + 1); } }}>
            <div style={boxStyle}><GreenCtx /></div>
        </AppContext.Provider>
        
    )
}

export const GreenCtx: React.FC = () => {
    const boxStyle = { backgroundColor: "green", border: "2px solid black", padding: "10px" };

    return (
        <div style={boxStyle}>
            <BlueCtx />
            <OrangeCtx />
        </div>
    )
}

export const BlueCtx: React.FC = () => {
    const boxStyle: CSSProperties = { 
        backgroundColor: "navy", color: "white", textAlign: "center",
        border: "2px solid black", padding: "10px",
     };

    return (
        <AppContext.Consumer>
            {(ctx: IAppContext) => {
                return(<div style={boxStyle}>
                    <div>Valore: {ctx.value}</div>
                    <button onClick={() => ctx.onIncrement()}>Increment</button>
                </div>);
            }}
        </AppContext.Consumer>
    )
}

export const OrangeCtx: React.FC = () => {
    const ctx = useContext<IAppContext>(AppContext);

    const boxStyle: CSSProperties = { 
        backgroundColor: "orange", color: "white", textAlign: "center",
        border: "2px solid black", padding: "10px",
    };

    return(<div style={boxStyle}>
        <div>Valore: {ctx.value}</div>
        <button onClick={() => ctx.onIncrement()}>Increment</button>
    </div>);
}