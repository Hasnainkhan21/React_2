import { useState } from "react";
import './App.css'
export default function Counter() {
    
    let [Count, setCount] = useState(0o3)
    let incCount = () => {
        setCount(Count + 1)
    }
    
    return (
        <div className="container mx-auto mt-5 text-center text-3xl">
        <h3 className=" text-blue-500">Count = {Count}</h3>
        <button onClick={incCount}>Increase Count</button>
        </div>
    )
}
