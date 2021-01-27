import React from "react"


import User from "./components/user.jsx";
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello World</h1>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      
      </div>
      
    )
  }
}

export default App;
