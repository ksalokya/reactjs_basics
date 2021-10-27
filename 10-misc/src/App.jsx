import React, {Component} from "react";
import Greet from "./Greet";

class App extends Component{
    constructor() {
        super();
        this.state = {
            message : "hello from App"
        }
    }

    render(){
        return(
            <Greet
                testFun={this.testFun}
                name="salokyaOP"
            ></Greet>
        );
    }

    testFun = () =>{
        alert(`Hello ${this.state.message}`)
    }
}

export default App;