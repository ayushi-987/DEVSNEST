import React, { Component } from 'react'

export class Button extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
      }
  }
  
  increament(){
    this.setState({
      count:this.state.count + 1
    })
    console.log(this.state.count)
  }

  render() {
    return (
      <div>
       <button onClick={()=> this.increament()}>{this.state.count}</button> 
      </div>
    )
  }
}

export default Button
