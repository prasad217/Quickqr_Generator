import React from "react";

function Footer() {
  const githubProfileUrl = "https://github.com/prasad217";
  const githubLogoUrl = "https://cdn-icons-png.flaticon.com/128/733/733553.png";

  return (
    <div
      style={{
        marginTop: "auto",
        padding: "10px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "12px", margin: "5px", color: "white" }}>
        © {new Date().getFullYear()} All rights reserved.
      </p>
      <img
        src={githubLogoUrl}
        alt="GitHub Logo"
        style={{ width: "20px", height: "20px", margin: "5px" }}
      />
      <p style={{ fontSize: "12px", margin: "5px", color: "yellow" }}>
        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "yellow", textDecoration: "none" }}
        >
          GitHub: prasad217
        </a>
      </p>
    </div>
  );
}

export default Footer;
