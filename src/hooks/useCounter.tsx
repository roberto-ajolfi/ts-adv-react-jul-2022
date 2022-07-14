import { useState } from "react";

const useCounter = (initialValue: number = 0) => {
    const [value, setValue] = useState(initialValue);

    const valueComponent = (
        <div style={{ fontSize: "1.5em", color: "crimson", backgroundColor: "darkgray"}}>
            {value}
        </div>
    );

    return {
        value,
        increment: () => setValue(value + 1),
        decrement: () => setValue(value - 1),
        zero: () => setValue(0),
        valueComponent
    };
}

export default useCounter;