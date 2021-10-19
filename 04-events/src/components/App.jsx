import React, {useState} from "react";

function App() {
    const [state,setState] = useState("Hello");

    function eventFunction(){
        setState("Submitted");
    }

    const [clr,setClr] = useState(false)

    function eventColor1(){
        setClr(true);
    }

    function eventColor2(){
        setClr(false);
    }


    return (
    <div className="container">
      <h1>{state}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: clr ? "white" : "black" }}
              onClick={eventFunction}
              onMouseOver={eventColor1}
              onMouseOut={eventColor2}
      >Submit</button>
    </div>
  );
}

export default App;
