import React from "react";
import ReactDOM from "react-dom";
import { books } from "./books.js";
import { Book } from "./Book.js";

// CSS
import "./index.css";

const output = books.map((book) => {
  const { imgURL, title, author, objectId } = book;
  const clickHandler = () => {
    alert("Hello world, item-" + objectId + "!");
  };
  const complexExample = (e) => {
    alert(title);
  };

  return (
    <div key={objectId}>
      <Book imgURL={imgURL} title={title} author={author}>
        <button type="button" className="btn" onClick={clickHandler}>
          Salva
        </button>
        <button type="button" className="btn cmplx" onClick={complexExample}>
          More complex example
        </button>
      </Book>
    </div>
  );
});

function BookList() {
  return <section className="booklist">{output}</section>;
}

ReactDOM.render(<BookList />, document.getElementById("root"));
