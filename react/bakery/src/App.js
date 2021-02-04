import React from "react";

import "./App.css";
import Button from './components/button'

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {

      activeTabs: 'add',
      items: []
    }
    this.selectAdd=this.selectAdd.bind(this)
    this.selectList=this.selectList.bind(this)
    this.selectPay=this.selectPay.bind(this)
  }
  
  selectAdd() {
    console.log()
    this.setState({
      activeTabs : 'add'
    })
      
    }
    selectList(){
      console.log()
      this.setState({
        activeTabs : 'list'
      })
    }
    selectPay(){
      console.log()
      this.setState({
        activeTabs : 'pay'
      })
    }
  renderContent = () => {
   switch(this.state.activeTabs)  {
     case 'add':
     return<Add></Add>
     case 'list':
     return<List></List>
     case 'pay':
     return<Pay></Pay>
   }
  }
  render() {
    return (
      <div className="App">

        <h1>Bakery</h1>
        <Button onClick={this.selectAdd} isSelected={this.state.activeTabs==='add' ? true : false}>Add</Button>
        <Button  onClick={this.selectList} isSelected={this.state.activeTabs==='list' ? true : false}>List</Button>
        <Button onClick={this.selectPay} isSelected={this.state.activeTabs==='pay' ? true : false}>Pay</Button>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;