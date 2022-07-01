import React from "react";
const Keys = () => {
  const names = [
    { id: 1, dt: "Kishore" },
    { id: 2, dt: "David" },
    { id: 3, dt: "Harish" },
    { id: 4, dt: "Suresh" },
  ];
  return (
    <div>
      <h2>KEYs..</h2>
      <ul>
        {names.map((data) => {
          return(
          <div>
           <h1><li key={data.id}>I am mr.{data.dt}</li></h1> 
            </div> 
       ) })}
      </ul>
    </div>
  );
};
export default Keys;
