import React from "react";

export const Book = (props) => {
  const { imgURL, title, author, children } = props;
  return (
    <article className="book">
      <img src={imgURL} alt="" />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4
        style={{
          color: "red",
          textDecoration: "underline",
          padding: "10px 0",
        }}
      >
        {author.toUpperCase()}
      </h4>
      {children}
    </article>
  );
};
