import React, { Component } from "react";
import ReactDOM from "react-dom";
import Person from "./person";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: [
        {
          name: "Raghav",
          id: 1
        },
        {
          name: "Raman",
          id: 2
        },
        {
          name: "Rishabh",
          id: 3
        }
      ]
    };

    this.switchName = this.switchName.bind(this);
  }

  switchName() {
    this.setState({
      person: [
        {
          name: "Raman",
          id: 1
        },
        {
          name: "Raghav",
          id: 2
        }
      ]
    });
  }

  render() {
    return (
      // To return only name and id of User at index 0 in a single line..
      // <Person name = {person[0].name} and id = {person[0].id} />

      // To return all users that are in array of objects defined above, use Map..
      <div>
        <p>
          {this.state.person.map((user, index) => {
            return <Person key={index} name={user.name} id={user.id} />;
          })}
        </p>
        <button onClick={this.switchName}>Click Me!!</button>
      </div>
    );
  }
}

export default App;
