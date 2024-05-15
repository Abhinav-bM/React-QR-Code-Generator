import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");

  return (
    <div className="qr-generator">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for QR code"
      />
      {text && <QRCode value={text} size={128} />}
    </div>
  );
};

export default QRCodeGenerator;
