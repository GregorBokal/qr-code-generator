'use client';

import { QRCodeCanvas } from 'qrcode.react';

export default function Home() {
  return (
    <main className="max-w-md mx-auto my-10 p-6">
      <h1 className="text-2xl font-bold mb-5">Generator</h1>
      <p className="text-grey-600">Juhuhu!</p>
      <QRCodeCanvas value="https://veleum.pro" size={200}/>
    </main>
  )
}
