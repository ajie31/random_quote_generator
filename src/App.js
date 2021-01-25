import React, { Component } from "react";
import QuoteBox from "./components/quoteBox";

class App extends Component {
  state = {
    index: 0,
    quotes: [
      {
        quote: "The most beautiful experience we can have is the mysterious.",
        author: "Albert Einstein",
      },
      {
        quote:
          "The surface of the sea is a gleam that cannot be reached. And the bottom is a darkness impenetrable. And between the two are great fishes, which are to be feared.",
        author: "Niffari",
      },
      {
        quote:
          "The concept of a clock enfolds all succession in time.  In the concept the sixth hour is not earlier than the seventh or eighth, although the clock never strikes the hour, save when the concept biddeth.",
        author: "Nicholas of Cusa",
      },
      {
        quote:
          "These hearts were woven of human joys and cares, Washed marvellously with sorrow, swift to mirth.The years had given them kindness. Dawn was theirs, And sunset, and the colours of the earth.",
        author: "Rupert Brooke",
      },
      {
        quote:
          "Look at it from this perspective! Look at that! What’s important?",
        author: "russell schweickart",
      },
      {
        quote:
          "Just choose silence. Don’t even choose love. Choose silence, and love is apparent. If we choose love we already have an idea of what love is.",
        author: "Gangaji",
      },
    ],
  };
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log("mount time");
  }
  handleGenerateQuote = () => {
    const index = Math.floor(Math.random() * 6);
    console.log(index);
    this.setState({
      index,
    });
  };

  render() {
    return (
      <React.Fragment>
        <QuoteBox
          quote={this.state.quotes[this.state.index]}
          onGenerate={this.handleGenerateQuote}
        />
      </React.Fragment>
    );
  }
}

export default App;
