'use client'
import React, { useEffect, useState } from 'react'
import api from '@/services/api'

const Modal = ({ close }: { close: () => void }) => {
  useEffect(() => {
    const data = api.get('/quotes')
    data.then((quotes) => setQuotes(quotes.data))
  }, [])
  const [quotes, setQuotes] = useState<{ text: string; author: string }[]>([])
  const randomQuotes = () => {
    const indexRandom = Math.floor(Math.random() * Number(quotes.length) - 1)
    return quotes[indexRandom]
  }
  const quote = randomQuotes()

  return (
    <div className="relative z-50 w-80 rounded-lg bg-slate-100 p-10 ">
      <button
        className="absolute right-2 top-2  cursor-pointer text-xl font-bold hover:text-slate-300"
        onClick={close}
      >
        X
      </button>

      <div className="flex h-full flex-col justify-between">
        <h2 className="max-w-[304px] font-bold">{`"${quote?.text}"`}</h2>
        <p className="mt-4 italic">
          {' '}
          - {quote?.author ? quote?.author : 'Desconhecido'}
        </p>
      </div>
    </div>
  )
}

export default Modal
