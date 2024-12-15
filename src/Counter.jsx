import React from "react";
export default function Counter() {
    let Count = 0;

    function incCount() {
        Count += 1;
        console.log(Count);
    }

    return (
        <div>
        <h3>Count = {Count}</h3>
        <button onClick={incCount}>Increase Count</button>
        </div>
    )
}
