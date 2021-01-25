import React, { Component } from "react";

class QuoteBox extends Component {
  render() {
    return (
      <div id="quote-box" className="card align-self-center container-md">
        <h3 id="text" className="card-title mt-2 p-3">
          {this.formatQuote()}
        </h3>
        <h5 id="author" className="card-subtitle mb-5 px-3 text-muted text-end">
          {this.formatAuthor()}
        </h5>
        <button
          id="new-quote"
          className="btn btn-primary align-self-center"
          style={{ width: "8rem" }}
          onClick={() => this.props.onGenerate()}
        >
          Generate New
        </button>
        <a
          href="twitter.com/intent/tweet"
          target="_blank"
          id="tweet-quote"
          className="card-link align-self-center p-3"
        >
          tweet this
        </a>
      </div>
    );
  }

  formatQuote() {
    return "“" + this.props.quote.quote + "”";
  }
  formatAuthor() {
    return "~" + this.props.quote.author;
  }
}

export default QuoteBox;
