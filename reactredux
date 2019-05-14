import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { createStore } from "redux";  
import {connect} from 'react-redux'
import { Provider } from 'react-redux';


const initialState = { tech: "React 2.0.1" };

const reducer=(state)=> state

const store = createStore(reducer, initialState);  


function HelloWorld(props){

  return(
    <p>hello {props.tech}</p>
  )

}

class App extends Component {


 render() {

  //return <HelloWorld tech={"store"}/>
   return <HelloWorld tech={this.props.tech}/>
 }
}


 const mapStateToProps = function(state) {
  return {
    tech: state.tech,
  }
}

const ContainerComponent=connect(mapStateToProps)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><ContainerComponent /></Provider>, rootElement);
