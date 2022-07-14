import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    const [toggle, setToggle] = useState(true);
    const [sndToggle, setSndToggle] = useState(true);

    useEffect(() => {
        console.log("[useEffect] on mount");

        return () => console.log("[useEffect] on unmount BYE!");
    }, [])

    useEffect(() => {
        console.log("[useEffect] on mount / change Second");
    }, [ sndToggle ])

    useEffect(() => {
        console.log("[useEffect] on mount / change always");
    })
    
    return (
        <div style={{ padding:"5px", border: "2px dashed goldenrod"}}>
            <div>UseEffectDemo Component</div>
            <button className='bnt btn-dark' 
                onClick={() => setToggle(!toggle)}>Change State
            </button>
            <button className='bnt btn-danger' 
                onClick={() => setSndToggle(!sndToggle)}>Change State (2)
            </button>
        </div>
    )
}
