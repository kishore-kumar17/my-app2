import React from "react";
const abcd = [
  { id: 1, name: "Kishore", age: "21", work: "Dorustree" },
  { id: 2, name: "Hari", age: "22", work: "10-D" },
  { id: 3, name: "David", age: "23", work: "Dorustree" },
  { id: 4, name: "Jeni", age: "24", work: "10-D" },
  { id: 5, name: "Kumar", age: "25", work: "Dorustree" },
  { id: 6, name: "Suresh", age: "26", work: "10-D" },
  { id: 7, name: "Sathis", age: "27", work: "Dorustree" },
  { id: 8, name: "Kiran", age: "28", work: "10-D" },
  { id: 9, name: "Krish", age: "29", work: "Dorustree" },
  { id: 10, name: "Kannan", age: "31", work: "10-D" },
];
const valdata = ["ID", "NAME", "AGE", "WORK"];
const Example = () => {
  return (
    <div>
      <h3>Table using</h3>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            {valdata.map((change) => {
              return (
                <React.Fragment key={change.id}>
                  <th>{change}</th>
                </React.Fragment>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {abcd.map((office) => {
            return (
              <tr>
                <td>{office.id}</td>
                <td>{office.name}</td>
                <td>{office.age}</td>
                <td>{office.work}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Example;
