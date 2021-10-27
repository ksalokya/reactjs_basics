import React, {Component} from "react";

//--------------------LESSON - 1--------------------------
// class Greet extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             count:0
//         }
//     }
//
//     //Not update multiple states
//     // changeMessage() {
//     //     this.setState({
//     //         count: this.state.count + 1
//     //     }, () => console.log(this.state.count))
//     // }
//
//     changeMessage() {
//         this.setState(prevState => ({
//                 count: prevState.count + 1
//             }), () => console.log("Callback : ", this.state.count)
//         )
//     }
//
//     //react make single state update for multiple update calls
//     changeTest() {
//         this.changeMessage();
//         this.changeMessage();
//         this.changeMessage()
//     }
//
//     render(){
//         return(
//             <div>
//                 <h2>Count - {this.state.count}</h2>
//                 <button
//                 onClick={()=>this.changeTest()}
//                 >Add</button>

//            ------OR-----

//                 <button
//                 onClick={this.changeTest.bind(this)}
//                 >Add</button>
//             </div>
//         )
//     }
//
// }




//----------------LESSON-2-------------------
// class Greet extends Component{
//
//     constructor() {
//         super();
//         this.state = {
//             mess : "Hello"
//         }
//     }
//
//     handleChange = () => {
//         this.setState({
//             mess:"Hello state"
//     })
//     }
//
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.mess}</h1>
//                 <button onClick={this.handleChange}>
//                     BTN
//                 </button>
//             </div>
//         )
//     }
// }




//----------------LESSON - 3-----------------

//*********************APP*****************
// class App extends Component{
//     constructor() {
//         super();
//         this.state = {
//             message : "hello from App"
//         }
//     }
//
//     render(){
//         return(
//             <Greet
//                 testFun={this.testFun}
//                 name="salokya"
//             ></Greet>
//         );
//     }
//
//     testFun = () =>{
//         alert(`Hello ${this.state.message}`)
//     }
// }



// class Greet extends Component{
//
//     constructor() {
//         super();
//     }
//
//     render(){
//         return(
//             <div>
//                 <h1 onClick={this.props.testFun}
//                 >Hello </h1>
//             </div>
//         )
//     }
// }





//---------------  LESSON - 4-------------
// class Greet extends Component{
//
//     render(){
//         return(
//             // import './App.css'
//             // <div className='testClass testText'>
//             //     <h1>{this.props.name}</h1>
//             // </div>
//
//
//             //import styles from './App.module.css'
//             // <div className={styles.testClass}>
//             //     {console.log(styles)}
//             //     <h1>{this.props.name}</h1>
//             // </div>
//         )
//     }
// }


//---------------  LESSON - 5-------------

//********************MOUNT*********************
// class Greet extends Component{
//
//     constructor() {
//         super();
//         this.state = {
//             name:"DJsk"
//         }
//         console.log("1-Constructor")
//     }
//
//     static getDerivedStateFromProps(props,state){
//         console.log("2-getDerivedState");
//         return null;
//     }
//
//     componentDidMount() {
//         console.log("4-Did mount")
//     }
//
//     render(){
//         console.log("3-Render")
//         return(
//             <div>
//                 <h1>{this.props.name}</h1>
//             </div>
//         )
//     }
// }


//***************UPDATE****************
// class Greet extends Component{
//
//     constructor() {
//         super();
//         this.state = {
//             name:"DJsk"
//         }
//         console.log("1-Constructor")
//     }
//
//     static getDerivedStateFromProps(props,state){
//         console.log("2-getDerivedState");
//         return null;
//     }
//
//
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         console.log("3-should component update")
//         return true;
//     }
//
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log("4-snapshot");
//         return null;
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log("5-component did update")
//     }
//
//     changeState = () =>{
//         this.setState({
//             name:"update djsk"
//         })
//     }
//
//     render(){
//         console.log("3-Render")
//         return(
//             <div>
//                 <h1>{this.props.name}</h1>
//                 <button onClick={this.changeState}>change state</button>
//             </div>
//         )
//     }
// }
export default Greet;