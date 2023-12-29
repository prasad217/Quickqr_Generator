import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import Header from "./Header";
import Footer from "./Footer";

function QRGenerator() {
  const [url, setUrl] = useState("");
  const [history, setHistory] = useState([]);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const generateQRCode = () => {
    const generatedUrl = url.trim();
    if (generatedUrl) {
      const updatedHistory = [...history, { url: generatedUrl }];
      localStorage.setItem("qrHistory", JSON.stringify(updatedHistory));
      setHistory(updatedHistory);
    }
  };

  const regenerateQRCode = (index) => {
    const regeneratedUrl = history[index].url;
    setUrl(regeneratedUrl);
    generateQRCode(); // Trigger QR code generation
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-code-canvas");
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  const clearHistory = () => {
    localStorage.removeItem("qrHistory");
    setHistory([]);
  };

  useEffect(() => {
    const storedHistory = localStorage.getItem("qrHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ textAlign: "center", margin: "20px" }}>
        <label style={{ fontSize: "20px", marginRight: "10px" }}>
          Enter URL:
        </label>
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="https://example.com"
          style={{ fontSize: "16px", padding: "8px" }}
        />
        <button
          onClick={generateQRCode}
          style={{
            fontSize: "16px",
            marginLeft: "10px",
            padding: "8px",
          }}
        >
          Generate QR Code
        </button>
      </div>

      {url && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h3>Generated QR Code:</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <QRCode value={url} id="qr-code-canvas" />
            <button
              style={{
                backgroundColor: "green",
                marginTop: "10px",
                fontSize: "16px",
                padding: "8px",
              }}
              onClick={downloadQRCode}
            >
              Download QR Code
            </button>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div style={{ margin: "20px" }}>
          <h3>History:</h3>
          <table style={{ margin: "auto" }}>
            <thead>
              <tr>
                <th style={{ fontSize: "18px" }}>URL</th>
                <th style={{ fontSize: "18px", paddingLeft: "20px" }}>
                  Regenerate
                </th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: "16px" }}>{item.url}</td>
                  <td>
                    <button
                      style={{
                        fontSize: "16px",
                        padding: "8px",
                        backgroundColor: "#5dbea3",
                        borderRadius: "10px",
                        marginLeft: "10px",
                      }}
                      onClick={() => regenerateQRCode(index)}
                    >
                      Regenerate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: "20px" }}>
            <button
              style={{
                fontSize: "16px",
                padding: "8px",
                backgroundColor: "red",
                color: "white",
              }}
              onClick={clearHistory}
            >
              Clear History
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default QRGenerator;
