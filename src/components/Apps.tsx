import React, { Component } from 'react'
interface AppState{
    theme:string,
    language:string,
}
export default class Apps extends Component<{},AppState> {
    constructor(props:any){
        super(props);
        this.state={
            theme:"yellow",
            language:"name"
        }
    }
    Change = () => {
        this.setState((prevState:AppState) => ({
            theme: prevState.theme === "yellow" ? "grey" : "yellow",
            language: prevState.language === "name" ? "Tên" : "name"
        }));
    }
  render() {
    return (
      <div>
        <button onClick={this.Change}>Change</button>
        <p style={{color:this.state.theme}}>{this.state.language}</p>
      </div>
    )
  }
}
