import React, { Component } from 'react'
import DetailsPage from './Components/DetailsPage'
import "./App.css"
export class App extends Component {
  state = {
    data : [{
      "_id": "1",
      "title": "Nike Shoes",
      "src": [
        "/image/img2.jpg",
        "/image/img1.jpg",
        "/image/img3.jpg",
        "/image/img4.jpg",
        ],
      "description": "UI/UX designing, html css tutorials",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "price": 23,
      "colors":["red","black","crimson","teal"],
      "count": 1
      }],
  }


  render() {
    const {data} = this.state;
    return (
      <div className="app">
        <DetailsPage data = {data}/>
      </div>
    )
  }
}

export default App

