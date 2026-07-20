'use client';

import { useState } from 'react';
import QRCode from '@/components/QRCode';
import BARCode from '@/components/BARCode'

export default function Home() {
  
  const [text, setText] = useState('https://veleum.pro')
  const [kind, setKind] = useState('qr')

  return (
    <main className="max-w-md mx-auto my-10 p-6">
      <h1 className="text-2xl font-bold mb-5">Generator</h1>
      <label className="flex items-center gap-2">
        <input 
          type="radio"
          name="vrsta"
          value="qr"
          checked={kind === 'qr'}
          onChange={(e) => setKind(e.target.value)}
          className="accent-blue-600"
        />
        <span>QR koda</span>
      </label>
      <label className="flex items-center gap-2">
        <input 
          type="radio"
          name="vrsta"
          value="bar"
          checked={kind === 'bar'}
          onChange={(e) => setKind(e.target.value)}
          className="accent-blue-600"
        />
        <span>BAR koda</span>
      </label>
      <label className="block mb-4">
       <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="URL"
        className="
          rounded-lg 
          border border-gray-300 px-3 py-2
          focus:border-blue-500 
          focus:ring-2
          focus:ring-blue-500
          focus:outline-none"
        />
      </label>
      {kind === 'qr' ? (
        <QRCode value={text}/>
      ) : (
        <BARCode value={text}/>  
      )}
    </main>
  )
}
