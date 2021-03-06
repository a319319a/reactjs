import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
        </div>
        <div className="metadata">
          <span className="date">today at 6.00pm</span>
        </div>
        <div className="text">Nice Blog</div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
