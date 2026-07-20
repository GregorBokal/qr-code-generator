'use client';

import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

export default function BARCode({ value }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!value) return;

    try {
      JsBarcode(canvasRef.current, value, {
        format: 'CODE128',
        displayValue: true,
        height: 80
      })
    } catch (error) {
      console.error(error);
    }
  }, [value]);
  
  return (
    <div className="inline-block rounded-lg border border-gray-200 p-4 bg-white">
      <canvas ref={canvasRef} />
    </div>
  );
}
