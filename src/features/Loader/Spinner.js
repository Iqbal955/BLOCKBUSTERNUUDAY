import * as React from "react";

const Spinner = () => (
  <div className="center-screen">
    <div
      style={{
        animation: "400ms linear infinite spinner",
        borderBottom: "2px solid transparent",
        borderLeft: "2px solid #29d",
        borderRadius: "50%",
        borderRight: "2px solid transparent",
        borderTop: "2px solid #29d",
        boxSizing: "border-box",
        height: 200,
        width: 200,
      }}
    />
  </div>
);

export default Spinner;
