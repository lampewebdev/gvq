import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    imageIsReady: false
  };
  componentDidMount() {
    const img = new Image();
    const viewPortWidth = window.innerWidth;
    const viewPortHeight = window.innerHeight;
    img.src = `https://source.unsplash.com/${viewPortWidth}x${viewPortHeight}/?nature`; // by setting an src, you trigger browser download
    img.setAttribute("crossOrigin", "anonymous"); // works for me
    img.onload = () => {
      console.log('img loaded...')
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      var dataURL = canvas.toDataURL("image/jpg", 0.8);
      // when it finishes loading, update the component state
      console.log('setting background...')
      this.setState({
        image: dataURL,
        imageIsReady: true
      });
    };
  }
  getRandomQuote() {
    const quotes = [
      "The truth is that finding happiness in what you do every day is so imperative.",
      "No matter what you do, your job is to tell your story",
      "There is never a bad time to start a business – unless you want to start a mediocre one.",
      "Skills are cheap. Passion is priceless.",
      "No matter what you do, your job is to tell your story.",
      "Look yourself in the mirror and ask yourself, what do I want to do everyday for the rest of my life…do that.",
      "The truth is that finding happiness in what you do every day is so imperative.",
      "Stop hanging around people who don’t want to win.",
      "There no longer has to be a difference between who you are and what you do.",
      "A penguin cannot become a giraffe, so just be the best penguin you can be.",
      "It’s easy to dream about it … Much harder to execute it ….Work!",
      "Whether you’re 9 or 90, stop trying to fix the things you’re bad at, and focus on the things you’re good at."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  render() {
    const { image, imageIsReady } = this.state;
    return (
      <div>
        <div className="header"> GVQ </div>

        <div className="App" style={{ backgroundImage: `url(${image})` }}>
          {imageIsReady ? (
            <div className="content">{this.getRandomQuote()}</div>
          ) : (
            <div className="lds-ripple">
              <div />
              <div />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
