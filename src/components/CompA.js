import React from "react";
import CompB from "./CompB";
//functional components using props...
const CompA = (props) => {
  return (
    <>
      <p> My name is {props.name}</p>
      <CompB age2={props.age} place={props.place} />
    </>
  );
};

export default CompA
