import "./App.css"
import { Component } from 'react';

const images = [
  {
    src: "https://images.pexels.com/photos/6272/wood-free-wooden-home.jpg?auto=compress&cs=tinysrgb&w=600",
    name: "keboompics"
  },
  {
    src: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "piccing"
  },
  {
    src: "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Abdullah"
  },
  {
    src: "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Athena"
  },
  {
    src: "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Leeloo"
  },
  {
    src: "https://images.pexels.com/photos/3550651/pexels-photo-3550651.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "vlda"
  },
  {
    src: "https://images.pexels.com/photos/7600367/pexels-photo-7600367.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Toodo"
  },
  {
    src: "https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Cluster"
  },
  {
    src: "https://images.pexels.com/photos/7219067/pexels-photo-7219067.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Medium"
  },
  {
    src: "https://images.pexels.com/photos/5586315/pexels-photo-5586315.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "cocktail"
  },
]

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  add() {
    this.setState({ count: (this.state.count + 1) % images.length })
  }

  sub() {
    const count = (this.state.count - 1)
    this.setState({ count: count < 0 ? 0 : count })
  }

  render() {
    let count = 20;
    return (
      <div className='main'>
        <div className='photo'>
          <img src={images[this.state.count].src} alt=''></img>
          <p>{this.state.count + 1} {images[this.state.count].name}</p>
        </div>
        <div className='box'>
          <div className='put'>
            <button onClick={this.sub.bind(this)}>&lang;</button>
            <h1>{this.state.count}</h1>
            <button onClick={this.add.bind(this)}>&rang;</button>
          </div>
        </div>
        <div className="imageCards">
          {
            images.map((image, index) => {
              return <div className="cards">
                <img src={image.src} alt={image.name}/>
                <p>{index + 1} {image.name}</p>                
              </div>
            })
          }
        </div>
      </div>
    );
  }
}
