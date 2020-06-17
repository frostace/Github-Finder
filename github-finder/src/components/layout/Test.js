import React, { useRef } from "react";

function myFunction() {
    const inputEl = useRef(null);
    console.log(inputEl);
    // {current: null}
    const onButtonClick = () => {
        console.log(inputEl);
        // {current: input}
        inputEl.current.focus();
    };
    return (
        <div>
            <>
                <input ref={inputEl} type="text" />
                <button onClick={onButtonClick}>Focus the input</button>
            </>
        </div>
    );
}

export default myFunction;
