import React from "react";

import "./App.css";
import Button from './components/button'

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      activeTab: 'Add',
      items: []
    }}
  
  render() {
    return (
      <div>
        <h1>Bakery</h1>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        
      </div>
    );
  }
}

export default App;