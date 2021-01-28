import react from "react";


export class App extends react.Component {
constructor(props){
  super(props);
  this.state = {
    count: 0,
  };
}
render(){
  return (
    <div>
      <h1>Counter</h1>
      <h2>{this.state.count}</h2>
      <button style= {{color: "red"}}></button>
      <button style= {{color: "green"}}></button>

    </div>
  );
}

}

export default counter;