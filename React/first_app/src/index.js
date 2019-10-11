import React, { Component } from "react";
import ReactDOM from "react-dom";

// const element = React.createElement('h1', null, 'hello world!!!');
// hello world code

// const element = React.createElement('ul', null,
//     React.createElement('li', null, 'Todo1'),
//     React.createElement('li', null, 'Todo2')
// );
// But in this way it becomes quite tedious to do React.createElement() again and again

// So we made an array
// const tasks = ['todo1', 'todo2', 'todo3'];

// const element = <ul>
// {tasks.map((task, index)=>{return <li key={index}>{task}</li>})}
// </ul>
// const element = React.createElement('ul', null,
//     tasks.map((task, index) => {
//     return React.createElement('li', null, task);
// }));

// But it also became tedious this way so we started using JSX....

//JSX

// const element = <ul>
//   <li>{tasks[0]}</li>
//   <li>{tasks[1]}</li>
//   <li>{tasks[2]}</li>
// </ul>
// This is using JSX

// const element = <ol>
// {tasks.map((task, index)=>{return <li value={index}>{task}</li>})}
// </ol>
// This is same as above with only change i.e. taking data from array






// Using Components

// Remember component class name should always start with a capital letter
// class List extends Component {
//   render() {
//     return (
//       <ul>
//         <li>Todo1</li>
//         <li>Todo1</li>
//         <li>Todo3</li>
//         <li>Todo4</li>
//       </ul>
//     );
//   }
// }

// class Title extends Component {
//   render() {
//     return "Hello";
//   }
// }

// class Main extends Component {
//   render() {
//     return (
//       <div>
//         <Title />
//         <List />
//         <List />
//       </div>
//     );
//   }
// }
//Here we used components twice, this depicts reusability of components
//But still a problem exists i.e. though list is rendered twice but content is same which will be solved by props

// ReactDOM.render(<Main/>, document.getElementById("root"));


class List extends Component {
  render() {
    return (
      <ol>
        {this.props.tasks.map((task, index)=>{return <li value={index}>{task}</li>})}
      </ol>
    );
  }
}

class Title extends Component {
  render() {
    return "Hello";
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Title />
        <List tasks={['todo1', 'todo2', 'todo3']} />
        <List tasks={['todo4', 'todo5', 'todo6']} />
      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById("root"));
