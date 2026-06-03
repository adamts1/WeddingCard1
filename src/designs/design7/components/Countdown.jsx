/**
 * Design 7 countdown – white cards with serif numerals and letter-spaced
 * labels. Sits over the blank band of the hero image (the date is already
 * baked into the artwork, so no date header is rendered here).
 */

import { useState, useEffect } from 'react'

const pad = (n) => String(n).padStart(2, '0')

function getTimeLeft(targetDate) {
  const diff = targetDate - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    done: false,
  }
}

const UNITS = [
  { key: 'days', label: 'ימים' },
  { key: 'hours', label: 'שעות' },
  { key: 'minutes', label: 'דקות' },
  { key: 'seconds', label: 'שניות' },
]

export default function Countdown({ targetDate }) {
  const [t, setT] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-1.5 md:gap-2 px-3">
      {UNITS.map(({ key, label }) => (
        <div
          key={key}
          className="flex flex-1 max-w-[4rem] flex-col items-center rounded-[0.9rem] border border-white/40 bg-white/55 backdrop-blur-md pt-3 pb-2 px-1 shadow-[0_8px_22px_rgba(124,99,46,0.10)]"
        >
          <span className="font-serif text-[1.35rem] md:text-2xl leading-none text-[#7E632E] tabular-nums">
            {key === 'days' ? t[key] : pad(t[key])}
          </span>
          <span className="mt-1 font-serif text-[7px] md:text-[8px] tracking-[0.18em] text-[#9C7C3C]/85">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
