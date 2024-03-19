import React from "react";

const Description = ({ title, text }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
    </>
  );
};

export default Description;