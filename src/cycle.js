import React from "react";

//life cylce method

class Cycle extends React.Component {
  constructor() {
    super();
    this.state = { bike: "Rx100", watch: true };
  }
  change = () => {
    this.setState({
      bike: "Royal Enfield",
    });
  };
  shouldComponentUpdate(){
      return true ;
  }

  bikechange =() =>{
    this.setState({
      bike:"DOMINOR"
    })
  }
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("didm").innerHTML =
        "welcome to  componentDidMount";
    }, 3000);
  }

  componentDidUpdate() {
    alert("updated");
  }
  getSnapshotBeforeUpdate(prevprops, prevstate) {
    document.getElementById("update").innerHTML =
      "before the screenshot update" + " " + prevstate.bike;
  }

  Click = () => {
    this.setState({
      watch: false,
    });
  };
  render() {
    let content;
    if (this.state.watch) {
      content = <Remove />;
    }
    return (
      <div>
        <b>LIFE CYCLE METHOD </b>
        <h1> my model is BIKE</h1>
        {content}
        <p id="didm"> </p>
        <p> MY favorite bike is {this.state.bike}</p>
        <button onClick={this.change}>Click</button>
        {/* shouldComponentUpdate */}
        <button onClick={this.bikechange}>click me</button>
        <p id="update"></p>
        <p id="unmount"></p>
        <button onClick={this.Click}>Remove</button>
      </div>
    );
  }
}
//component will unmount
class Remove extends React.Component {
  componentWillUnmount() {
    alert("Are you sure cancel in this page");
    document.getElementById('unmount').innerHTML = 
     "YOUR CODE IS ERRASE IS SUCCESSFULL.......THANK U ....GO TO NEXT TOPIC";
  }
  render() {
    return (
      <div>
        <h1>Deleted files</h1>
        
      </div>
    );
  }
}

export default Cycle;
