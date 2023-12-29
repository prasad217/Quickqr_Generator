import React from "react";

function Header() {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
        <span style={{ color: "#ffffff" }}>QuickQR</span>
        <span style={{ color: "#ff9900" }}> Generator</span>
      </h1>
    </div>
  );
}

export default Header;
