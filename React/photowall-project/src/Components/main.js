import React, { Component } from "react";
import ReactDOM from "react-dom";
import images from "./images";
import Title from "./title";
import PhotoWall from "./photowall";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          image: images[0],
          description: "Image of lotus flower"
        },
        {
          id: 2,
          image: images[1],
          description: "Image of daisy flower"
        },
        {
          id: 3,
          image: images[2],
          description: "Image of rose flower"
        }
      ]
    };
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
  }
  render() {
    return (
      <div>
        <Title data="Photowall App" />
        <PhotoWall posts={this.state.posts} onRemove={this.remove} onAdd={this.add} />
      </div>
    );
  }

  // otherwise remove = ( ) =>  { if otthe arrow function use kitta then no need to bind okok.....

  // je bind kitta te dujje passe normal onclick then this type ....
  remove() {
    this.setState({
      posts: [
        {
          id: 2,
          image: images[1],
          description: "Image of daisy flower"
        },
        {
          id: 3,
          image: images[2],
          description: "Image of rose flower"
        }
      ]
    })
    // alert('hello');
  }

  add() {
    this.setState({
      posts: [
        {
          id: 2,
          image: images[1],
          description: "Image of daisy flower"
        },
        {
          id: 3,
          image: images[2],
          description: "Image of rose flower"
        },
        {
          id: 1,
          image: images[0],
          description: "Image of lotus flower"
        }
      ]
    })
  }

}

export default Main;
