import { useState } from "react";

const Counter = () => {
const [counterValue, setCounterValue] = useState(0);
const increament = () =>{
    setCounterValue( counterValue + 1);
}
const decreament = () =>{
    let checkCounter = counterValue - 1;
    if(checkCounter < 0){
        checkCounter = 0;
    }
    setCounterValue(checkCounter);
}

const resetCounter = () =>{
    setCounterValue(0);
}
    return <section className="max-w-md flex justify-between mx-auto">
        <div className="flex justify-between gap-5 items-center">
            
            <button onClick={decreament}>-</button>
                <span>{counterValue}</span>
            <button onClick={increament}>+</button>
            
        </div>
        <button onClick={resetCounter}>Reset</button>
    </section>
}
export default Counter;