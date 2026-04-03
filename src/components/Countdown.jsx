/**
 * Countdown – days, hours, minutes, seconds until the wedding.
 */

import { useState, useEffect } from 'react'

const TARGET_DATE = new Date(2026, 11, 14, 19, 0, 0) // December 14, 2026 at 07:00 PM

const labels = {
  en: { days: 'days', hours: 'hours', minutes: 'minutes', seconds: 'seconds', done: "It's the big day!" },
}

function pad(n) {
  return String(n).padStart(2, '0')
}

function getTimeLeft() {
  const now = new Date()
  const diff = TARGET_DATE - now
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds, done: false }
}

export default function Countdown({ embedded = false }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  const t = labels.en

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const Wrapper = embedded ? 'div' : 'section'
  const wrapperClass = embedded ? 'w-full max-w-2xl mx-auto border-0' : 'py-12 md:py-16 px-4 bg-[#FFE9CF]'

  if (timeLeft.done) {
    return (
      <Wrapper className={wrapperClass}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display text-2xl text-black">{t.done}</p>
        </div>
      </Wrapper>
    )
  }

  const units = [
    { value: timeLeft.days, label: t.days },
    { value: timeLeft.hours, label: t.hours },
    { value: timeLeft.minutes, label: t.minutes },
    { value: timeLeft.seconds, label: t.seconds },
  ]

  const isCompact = embedded
  return (
    <Wrapper className={wrapperClass}>
      <div className={isCompact ? 'w-full max-w-full' : 'max-w-2xl mx-auto'}>
        <div className={`flex flex-wrap justify-center ${isCompact ? 'gap-1.5 md:gap-3 lg:gap-4' : 'gap-4 md:gap-6'}`}>
          {units.map(({ value, label }) => (
            <div
              key={label}
              className={`flex flex-col items-center rounded-lg bg-[#FFE9CF]/90 border border-[#C4956A] ${isCompact ? 'min-w-[2.5rem] md:min-w-[4rem] lg:min-w-[5rem] py-1.5 px-1.5 md:py-3 md:px-3 shadow-sm' : 'min-w-[4.5rem] md:min-w-[5.5rem] py-4 px-3 rounded-xl shadow-soft'}`}
            >
              <span className={`font-display text-black tabular-nums ${isCompact ? 'text-lg md:text-2xl lg:text-3xl' : 'text-3xl md:text-4xl'}`}>
                {pad(value)}
              </span>
              <span className={`font-sans text-black/80 ${isCompact ? 'text-[10px] md:text-sm mt-0.5' : 'text-sm mt-1'}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
