// QRCodeContext.js
import React, { createContext, useContext, useState } from 'react';

const QRCodeContext = createContext();

export const useQRCode = () => useContext(QRCodeContext);

export const QRCodeProvider = ({ children }) => {
  const [qrCodeData, setQRCodeData] = useState('');

  return (
    <QRCodeContext.Provider value={{ qrCodeData, setQRCodeData }}>
      {children}
    </QRCodeContext.Provider>
  );
};
