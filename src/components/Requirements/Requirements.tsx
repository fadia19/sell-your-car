import React from "react";
import "./Requirements.scss";

const Requirements = (): JSX.Element => {
  return (
    <div className="Requirements">
      <div className="Requirements__Title">
        <h2>Required Documentation</h2>
      </div>
      <div className="Requirements__Section">
        <div className="Requirements__Section__Document">
          <h5>Emirates ID</h5>
        </div>
        <div className="Requirements__Section__Document">
          <h5>Possession certificate</h5>
          <h6>(Dubai certificate or transfer to Dubai)</h6>
        </div>
        <div className="Requirements__Section__Document">
          <h5>Bank account details</h5>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
