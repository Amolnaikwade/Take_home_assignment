import React from "react";

const Spinner: React.FC = () => {
  return (
    <div style={spinnerContainerStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

const spinnerContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

const spinnerStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  border: "4px solid rgba(0, 0, 0, 0.1)",
  borderTop: "4px solid #0070f3",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

export default Spinner;
