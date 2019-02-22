import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    image: "",
    imageIsReady: false,
    quote: ""
  };

  componentDidMount() {
    const img = new Image();
    const viewPortWidth = window.innerWidth;
    const viewPortHeight = window.innerHeight;
    img.src = `https://source.unsplash.com/${viewPortWidth}x${viewPortHeight}/?nature`; // by setting an src, you trigger browser download
    img.setAttribute("crossOrigin", "anonymous"); // works for me
    img.onload = () => {
      console.log("img loaded...");
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      var dataURL = canvas.toDataURL("image/jpg", 0.8);
      // when it finishes loading, update the component state
      console.log("setting background...");
      this.setState({
        image: dataURL,
        imageIsReady: true
      });
      this.getRandomQuote();
    };
  }

  getRandomQuote = () => {
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
      "I'm driven by gratitude and compassion, but I'm also a competitor.",
      "Nobody knows anybody that's successful at all that hasn't put in serious amounts of work.",
      "Go do your thing. You're gonna die.",
      "It's very very simple, put yourself in a position to succeed.",
      "You can't be heard if you're not communicating.",
      "If you live for the weekends and vacations, your shit is broken.",
      "Stop whining. Start hustling.",
      "If you want to be anomaly, you gotta act like one.",
      "It‘s not about how much sleep you get. It’s About what you do when you are awake.",
      "I Lose on the daily basis but I am winning on the decade basis",
      "Don’t dwell on your weakness everyone else is already doing that for you.",
      "If it was so damn easy, don’t you think everyone would be a millionaire.",
      `“I Wish” is a dangerous way to start a sentence.`,
      "You can market your ass off, but if your product sucks, you’re dead.",
      "Whether you’re 9 or 90, stop trying to fix the things you’re bad at, and focus on the things you’re good at."
    ];

    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)]
    });
  }

  render() {
    const { image, imageIsReady, quote } = this.state;
    return (
      <div>
        <div className="header"> GVQ </div>

        <div className="App" style={{ backgroundImage: `url(${image})` }}>
          {imageIsReady ? (
            <React.Fragment>
              <div className="content">{quote}</div>
              <div className="newQuote" onClick={this.getRandomQuote}>
                Next quote!
              </div>
            </React.Fragment>
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
