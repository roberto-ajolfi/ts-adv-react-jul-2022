import React from 'react'

export const Hello : React.FC<{ name: string }> = (props) => {
      if(props.name != '')
        return(<div>Hello {props.name}</div>)
    else
        return (<div>Hello Stranger</div>)
}
