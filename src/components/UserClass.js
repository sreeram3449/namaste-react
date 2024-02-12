import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    console.log("Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sreeram3449");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Child Component didMount");
  }

  componentDidUpdate() {
    console.log("Child Component didUpdate");
  }

  componentWillUnmount() {
    console.log("Child Component willUnMount");
  }

  render() {
    console.log("Child Render");
    const { name, location } = this.props;

    return (
      <div className="m-4 p-4 bg-gray-200 rounded-lg">
        <h1>Class Component</h1>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
      </div>
    );
  }
}

export default UserClass;
