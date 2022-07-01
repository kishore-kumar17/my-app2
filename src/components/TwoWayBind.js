import React, { useState } from "react";

const TwoWayBind = () => {
  const [data, setdata] = useState("");
  const change = (e) => {
    setdata(e.target.getname.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={change}>
        <h3>HELLO WORLD!!!</h3>
        <br></br>
        <br></br>
        <h4>2 way binding</h4>
        <input type="text" name="getname" placeholder="enter your name" />
        <input type="submit" value="submit"></input>
      </form>
      <h1>{data}</h1>
    </div>
  );
};

export default TwoWayBind;
