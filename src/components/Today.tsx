import * as React from 'react'

export default function Today() {
  const today = new Date()
  return (
    <div className="flex justify-between items-center font-semibold text-gray-500">
      <div className="flex items-center gap-2">
        <span className="text-3xl">{today.getDate()}</span>
        <div className="flex flex-col">
          <span className="text-sm uppercase">
            {new Intl.DateTimeFormat('en', { month: 'short' }).format(today)}
          </span>
          <span className="text-xs font-medium">{today.getFullYear()}</span>
        </div>
      </div>
      <div className="uppercase">
        {new Intl.DateTimeFormat('en', { weekday: 'long' }).format(today)}
      </div>
    </div>
  )
}
