import React, { CSSProperties } from 'react'
import { Hover } from '../components/Hover'

export const AppRenderProp = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <h2>Render Props (con render)</h2>
                <Hover render={(over: boolean) => <Label text="Prova" over={over} />} />
                <Hover render={(over: boolean) => <Button text="Prova" over={over} />} />
            </div>
            <div className='col-6'>
                <h2>Render Props (con children)</h2>
            </div>
        </div>
    </div>
  )
}

const Label: React.FC<{ text: string, over: boolean }> = (props) => (<div>
    <div style={{ width: "100%", textAlign: "center"}}>
        {props.text} [{ props.over ? "O" : ""}]
    </div>
</div>);

const Button: React.FC<{ text: string, over: boolean }> = (props) => {
    const buttonStyle: CSSProperties = {
        border: "3px solid navy",
        backgroundColor: props.over ? "red" : "navy",
        color: "white",
        width: "100%"
    };

    return (<div>
        <button style={buttonStyle}>{props.text}</button>
    </div>);
};