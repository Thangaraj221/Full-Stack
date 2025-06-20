import { useState } from "react";
import './State.css'
const State = () => {
    const [count, setCount] = useState(0);
    const [Dislike, setDislike] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleIncrement}>👍 {count}</button>
            <button onClick={()=>setDislike(Dislike+1)}>👎 {Dislike}</button>
        </div>
    );
};

export default State;