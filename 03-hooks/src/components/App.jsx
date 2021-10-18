import React,{useState} from "react";

function App(){
    const [count,setCount] = useState(0);

    function increase(){
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return(
        <div className="container">
            <h1>{count}</h1>
            <button onClick={increase}>Increase by 1</button>

            <button onClick={decrease}>Decrease by 1</button>
        </div>
    );
}

export default App;
