import React from "react";
import "animate.css/animate.css";
class Snake extends React.Component {
  moveCircle = () => {
    setInterval(function() {
      let leftDim = this.state.MyStyle.left;
      let leftVal = parseInt(leftDim.substring(0, 2), 3);
      let myStyleCopy = JSON.parse(JSON.stringify(this.state.MyStyle));
      myStyleCopy.left = leftVal + 10 + "px";
      this.setState({ recipes: myStyleCopy });
    }, 3000);
  };

  componentDidMount = () => {
    this.moveCircle();
  };

  constructor(props) {
    super(props);
    this.state = {
      MyStyle: {
        left: "10px",
        top: "10px",
        width: "12px",
        height: "12px",
        "background-color": "yellow",
        border: "1px ridge red",
        "border-radius": "40%",
        position: "relative"
      }
    };
  }
  render() {
    return <div className="SnakeDiv" style={this.state.MyStyle} />;
  }
}
export default Snake;
