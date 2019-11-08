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
  }

  render() {
    return (
      // To return only name and id of User at index 0 in a single line..
      // <Person name = {person[0].name} and id = {person[0].id} />

      // To return all users that are in array of objects defined above, use Map..
      this.state.person.map((user, index) => {
        return <Person key={index} name={user.name} id={user.id} />;
      })
    );
  }
}

export default App;
