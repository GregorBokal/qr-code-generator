'use client';

import { QRCodeCanvas } from 'qrcode.react';

export default function Code({ value }) {
  return (
    value ? (
      <div className="
          inline-block 
          rounded-lg 
          border border-gray-200 
          p-4 bg-white">
        <QRCodeCanvas value={value} size={200}/>
      </div>
      ) : (
      <p>Vpiši besedilo in ustvari kodo.</p>
    )
  );
}

