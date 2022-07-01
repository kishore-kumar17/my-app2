import React from "react";

export const Child = (props, changes) => {
  return (
    <div>
      <h4>passing state in parents to child components</h4>
      <h2>{props.data}</h2>
      <h1>Child</h1>
      <button onClick={() => props.changes("David")}>Click</button>
    </div>
  );
};
