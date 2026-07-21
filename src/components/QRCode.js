'use client';

import { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Button from './Button.js';

export default function Code({ value }) {

  const wrapperRef = useRef(null);

  function download() {
    const canvas = wrapperRef.current?.querySelector('canvas');
    if (!canvas) return;

    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qr-koda.png';
    link.click();
  }

  return (
    value ? (
      <div ref={wrapperRef}>
        <div className="
          inline-block 
          rounded-lg 
          border border-gray-200 
          p-4 bg-white">
          <QRCodeCanvas value={value} size={200}/>
        </div>
        <Button onClick={download}>Prenesi PNG</Button>
      </div>
      ) : (
      <p>Vpiši besedilo in ustvari kodo.</p>
    )
  );
}

