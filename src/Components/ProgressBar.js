import React from "react";

const ProgressBar = ({ percentage }) => {
  const Parentdiv = {
    margin: "10px auto",
    display: "flex",
    height: "30px",
    width: "50%",
    alignItems: "center",
    boxShadow: "0 0 5px #2c3e50",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
  };

  const Childdiv = {
    color: "white",
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: "#2c3e50",
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    color: "white",
    fontWeight: 900,
    display: "inline-block",
    margin: "5px",
  };

  return (
    <>
      Score
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${percentage}/100`}</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
