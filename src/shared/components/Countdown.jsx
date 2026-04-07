/**
 * Countdown – days, hours, minutes, seconds until the wedding.
 * Receives targetDate and labels as props so each design can customize.
 */

import { useState, useEffect } from 'react'

const defaultLabels = {
  days: 'ימים',
  hours: 'שעות',
  minutes: 'דקות',
  seconds: 'שניות',
  done: 'היום הגדול הגיע!',
}

function pad(n) {
  return String(n).padStart(2, '0')
}

function getTimeLeft(targetDate) {
  const now = new Date()
  const diff = targetDate - now
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds, done: false }
}

export default function Countdown({ targetDate, labels: customLabels, embedded = false }) {
  const labels = { ...defaultLabels, ...customLabels }
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const Wrapper = embedded ? 'div' : 'section'
  const wrapperClass = embedded ? 'w-full max-w-2xl mx-auto border-0' : 'py-12 md:py-16 px-4 bg-cream'

  if (timeLeft.done) {
    return (
      <Wrapper className={wrapperClass}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display text-2xl text-olive">{labels.done}</p>
        </div>
      </Wrapper>
    )
  }

  const units = [
    { value: timeLeft.days, label: labels.days },
    { value: timeLeft.hours, label: labels.hours },
    { value: timeLeft.minutes, label: labels.minutes },
    { value: timeLeft.seconds, label: labels.seconds },
  ]

  const isCompact = embedded
  return (
    <Wrapper className={wrapperClass}>
      <div className={isCompact ? 'w-full max-w-full' : 'max-w-2xl mx-auto'}>
        <div className={`flex flex-wrap justify-center ${isCompact ? 'gap-1.5 md:gap-3 lg:gap-4' : 'gap-4 md:gap-6'}`}>
          {units.map(({ value, label }) => (
            <div
              key={label}
              className={`flex flex-col items-center rounded-lg bg-cream-light border border-blush-light ${isCompact ? 'min-w-[2.5rem] md:min-w-[4rem] lg:min-w-[5rem] py-1.5 px-1.5 md:py-3 md:px-3 shadow-sm' : 'min-w-[4.5rem] md:min-w-[5.5rem] py-4 px-3 rounded-xl shadow-soft'}`}
            >
              <span className={`font-display text-olive tabular-nums font-bold ${isCompact ? 'text-lg md:text-2xl lg:text-3xl' : 'text-3xl md:text-4xl'}`}>
                {pad(value)}
              </span>
              <span className={`font-sans text-olive-light ${isCompact ? 'text-[10px] md:text-sm mt-0.5' : 'text-sm mt-1'}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
