import React from "react";
import CompC from "./CompC";

const CompB = (props) => {
  console.log();
  return (
    <>
      <p> And my age is{props.age2}</p>
      <CompC place={props.place}/>
    </>
  )
};

export default CompB
