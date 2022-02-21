/* eslint-disable react/prop-types */
import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 10,
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    border: "2px solid #00D28F",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
