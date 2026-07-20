'use client';

import { useState } from 'react';
// import QRCode from '@/components/QRCode';
import BARCode from '@/components/BARCode'

export default function Home() {
  
  const [text, setText] = useState('https://veleum.pro')

  return (
    <main className="max-w-md mx-auto my-10 p-6">
      <h1 className="text-2xl font-bold mb-5">Generator</h1>
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
      <BARCode value={text}/>  
    </main>
  )
}
