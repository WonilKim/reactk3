import { useState, useEffect, useRef } from "react";

const CntInput = (probs) => {
    console.log("-- CntInput(probs)");

    const count = probs.count;
    const setCount = probs.setCount;
    
    const txtRef = useRef();

    const minusClicked = (e) => {
        console.log("-- minusClicked()");
        if (0 < count) {
            setCount(count - 1);
        }
    }

    const plusClicked = (e) => {
        console.log("-- plusClicked()");
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("-- useEffect() count");
        txtRef.current.value = count;
    }, [count]);


    return(
        <article>
        <div className="grid">
            <div></div>
            <button onClick={minusClicked}>-</button>
            <input ref={txtRef} type="text" id="txt1" name="txt1" readOnly></input>
            <button onClick={plusClicked}>+</button>
            <div></div>
        </div>
    </article>
    );
}

export default CntInput;