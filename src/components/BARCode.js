'use client';

import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import Button from './Button.js'

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
  
  function download() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = 'bar-koda.png';
      link.click();
    }  

  return (
    <div>
      <div className="inline-block rounded-lg border border-gray-200 p-4 bg-white">
        <canvas ref={canvasRef} />
      </div>
      <Button onClick={download}>Prenesi PNG</Button>
    </div>
  );
}
