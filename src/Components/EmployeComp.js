import React from "react";
import EmployeeGrid from "./EmployeeGrid";

function EmployeComp() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <EmployeeGrid />
          </div>
          <div className="col-sm-6 col-md-3">
            <EmployeeGrid />
          </div>
          <div className="col-sm-6 col-md-3">
            <EmployeeGrid />
          </div>
          <div className="col-sm-6 col-md-3">
            <EmployeeGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeComp;
