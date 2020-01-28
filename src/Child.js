import React from 'react';
import './App.css';
class Child extends React.Component{
	constructor(props){
		super(props)
		this.state=({
			count:1,
		})
	}
	increment=()=>{
		this .setState({
			count:this.state.count+2,
		})
	}
	componentDidMount() {
		console.log("child-class---componentDidMount");
  }
	
  UNSAFE_componentWillMount() {
		console.log("child-class---componentWillMount");
	}
	shouldComponentUpdate(){
		console.log("child-class---shouldComponentUpdate");
    // return a boolean value
    return true;
	}
	UNSAFE_componentWillUpdate(){
		console.log("child-class---componentWillUpdate");
    // perform any preparations for an upcoming update
	}
	componentDidUpdate(){
		console.log("child-class---componentDidUpdate");
    // 
	}
	render(){
		console.log("child-class------render")
		let {count}=this.state; 
		return(
			<div className="App">
				<p onClick={this.increment}> Child - count increment:{count}</p>
			</div>
		);
	}
}
export default Child;