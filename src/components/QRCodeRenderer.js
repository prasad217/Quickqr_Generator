import React, { useEffect, useRef } from "react";
import QRCode from "qrcode.react";

const QRCodeRenderer = ({ value }) => {
  const canvasRef = useRef();

  useEffect(() => {
    if (value && canvasRef.current) {
      new QRCode(canvasRef.current, value);
    }
  }, [value]);

  return <canvas ref={canvasRef} />;
};

export default QRCodeRenderer;
