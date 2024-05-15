import React from "react";
import QRCodeGenerator from "../components/QRCodeGenerator";
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <h1>QR Code Generator</h1>
      <div className="qr-section">
        <QRCodeGenerator />
      </div>
    </div>
  );
};

export default Home;
