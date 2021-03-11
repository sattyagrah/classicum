import React from "react";

const Title = () => {
  return (
    <div className="title">
      <h1
        style={{
          fontFamily: "'Akaya Telivigala', cursive",
          fontSize: "1.5em",
          color: "red",
        }}
      >
        Classicum
      </h1>
      <h2
        style={{
          fontFamily: "'Akaya Telivigala', cursive",
          fontSize: "2em",
        }}
      >
        My Album
      </h2>
      <p
        style={{
          fontFamily: "'Akaya Telivigala', cursive",
          fontSize: "1.5em",
        }}
      >
        This is a personal photo album.
      </p>
    </div>
  );
};

export default Title;
