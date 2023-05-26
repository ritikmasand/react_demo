import React from "react";

function Hello(props) {
  console.log(props.response.title);
  return (
    <div>
      {props.response.title}
      {props.response.description}
      <h1>this is day {props.value} of bootcamp</h1>
    </div>
  );
}

export default Hello;
