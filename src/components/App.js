import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
		<button id="click" onClick={()=>this.setState({is:true})}>Click</button>
				{this.state.is?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:null}

    		</div>
    	);
    }
}


export default App;

