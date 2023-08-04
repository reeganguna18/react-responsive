import React from "react";

function EmployeeGrid() {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" src="https://blog.hubspot.com/hs-fs/hubfs/how%20to%20be%20a%20good%20employee.jpg?width=595&height=400&name=how%20to%20be%20a%20good%20employee.jpg" alt="Card  cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default EmployeeGrid;
