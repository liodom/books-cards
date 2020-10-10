import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

const data = [
  {
    title: "Il nuovo Devoto-Oli junior. Il mio primo vocabolario di italiano.",
    author: "Giacomo Devoto",
    imgURL:
      "https://images-eu.ssl-images-amazon.com/images/I/71ncGHw19PL._AC_UL200_SR200,200_.jpg",
    objectId: 1,
  },
  {
    title: "Il nuovo Devoto-Oli junior. Il mio primo vocabolario di italiano.",
    author: "Giacomo Devoto",
    imgURL:
      "https://images-eu.ssl-images-amazon.com/images/I/71ncGHw19PL._AC_UL200_SR200,200_.jpg",
    objectId: 2,
  },
  {
    title: "Il nuovo Devoto-Oli junior. Il mio primo vocabolario di italiano.",
    author: "Giacomo Devoto",
    imgURL:
      "https://images-eu.ssl-images-amazon.com/images/I/71ncGHw19PL._AC_UL200_SR200,200_.jpg",
    objectId: 3,
  },
  {
    title: "Il nuovo Devoto-Oli junior. Il mio primo vocabolario di italiano.",
    author: "Giacomo Devoto",
    imgURL:
      "https://images-eu.ssl-images-amazon.com/images/I/71ncGHw19PL._AC_UL200_SR200,200_.jpg",
    objectId: 4,
  },
  {
    title: "Il nuovo Devoto-Oli junior. Il mio primo vocabolario di italiano.",
    author: "Giacomo Devoto",
    imgURL:
      "https://images-eu.ssl-images-amazon.com/images/I/71ncGHw19PL._AC_UL200_SR200,200_.jpg",
    objectId: 5,
  },
  {
    title: "Il nuovo Devoto-Oli junior. Il mio primo vocabolario di italiano.",
    author: "Giacomo Devoto",
    imgURL:
      "https://images-eu.ssl-images-amazon.com/images/I/71ncGHw19PL._AC_UL200_SR200,200_.jpg",
    objectId: 6,
  },
];

const Book = (props) => {
  console.log(props);
  return (
    <article className="book" key={props.keye}>
      <img src={props.imgURL} alt="" srcset="" />
      <h1>{props.title}</h1>
      <h4
        style={{
          color: "red",
          textDecoration: "underline",
          padding: "10px 0",
        }}
      >
        {props.author.toUpperCase()}
      </h4>
      <h5>{props.keye}</h5>
    </article>
  );
};

const output = data.map((item) => (
  <Book
    imgURL={item.imgURL}
    title={item.title}
    author={item.author}
    keye={"item-" + item.objectId}
  />
));

function BookList() {
  return <section className="booklist">{output}</section>;
}

ReactDOM.render(<BookList />, document.getElementById("root"));
