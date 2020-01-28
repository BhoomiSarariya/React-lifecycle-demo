import React from 'react';
import './App.css';
import Child from './Child';

class App extends React.Component{
	state = {count: 0}
	increment=()=>{
		this.setState({ 
			count:this.state.count+1
		});
	}
	componentDidMount() {
		console.log("parent-class---componentDidMount");
  }
	
  UNSAFE_componentWillMount() {
		console.log("parent-class---componentWillMount");
	}
	shouldComponentUpdate(){
		console.log("parent-class---shouldComponentUpdate");
    // return a boolean value
    return true;
	}
	UNSAFE_componentWillUpdate(){
		console.log("parent-class---componentWillUpdate");
    // perform any preparations for an upcoming update
	}
	componentDidUpdate(){
		console.log("parent-class---componentDidUpdate");
    // 
	}
  render(){
		let {count} = this.state;
		console.log("parent-class---Render");
    return(
      <div className="App">
				<p onClick={this.increment}>count increment:{count}</p>
				<Child increment={this.increment} count={this.state.count} />
      </div>
    );
  }
}
export default App;
