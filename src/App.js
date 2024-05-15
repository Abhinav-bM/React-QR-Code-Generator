// App.js
import React from "react";
import { QRCodeProvider } from "./context/QRCodeContext";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <QRCodeProvider>
        <Home />
      </QRCodeProvider>
    </>
  );
};

export default App;
