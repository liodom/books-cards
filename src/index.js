import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

const data = [
  {
    title: "Room on the Broom",
    author: "Julia Donaldson",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/A1XyS0D1S-L._AC_UL200_SR200,200_.jpg",
    objectId: 1,
  },
  {
    title: "Spooky Pookie (Little Pookie)",
    author: "Sandra Boynton",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/71rZvKObxUL._AC_UL200_SR200,200_.jpg",
    objectId: 2,
  },
  {
    title: "A Time for Mercy (Jake Brigance)",
    author: "John Grisham",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/A1UItsEWNWL._AC_UL200_SR200,200_.jpg",
    objectId: 3,
  },
  {
    title: "Midnight Sun",
    author: "Jeff Kinney",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/81zBVMvSjNL._AC_UL200_SR200,200_.jpg",
    objectId: 4,
  },
  {
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    objectId: 5,
  },
  {
    title: "Untamed",
    author: "Glennon Doyle",
    imgURL:
      "https://images-na.ssl-images-amazon.com/images/I/91AQs6qv9ML._AC_UL200_SR200,200_.jpg",
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
