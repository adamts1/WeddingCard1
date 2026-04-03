/**
 * Section 2 – Invitation details: parents, couple names, date, venue, navigation buttons.
 */

import Countdown from './Countdown'

const WAZE_URL = 'https://waze.com/ul?q=123%20Anywhere%20St%20Any%20City'

const texts = {
  en: {
    parentsBride: 'Parents of the Bride',
    parentsGroom: 'Parents of the Groom',
    brideParentsNames: 'Mr. & Mrs. [Bride\'s Parents]',
    groomParentsNames: 'Mr. & Mrs. [Groom\'s Parents]',
    intro: 'Together with their families, request the honor of your presence at the marriage of their children',
    date: 'December 14, 2026',
    ceremony: 'The ceremony will begin at 7:00 PM',
    venue: '123 Anywhere St., Any City, ST 12345',
    receptionNote: 'Reception to follow',
    ariaWaze: 'Navigate with Waze',
  },
}

export default function InvitationDetails() {
  const t = texts.en

  return (
    <section className="min-h-screen-dvh md:min-h-screen flex flex-col justify-center pt-16 md:pt-24 pb-8 md:pb-16 px-6 md:px-10 lg:px-16 bg-[#F6F4F0] text-black">
      <div className="w-full max-w-3xl mx-auto flex flex-row justify-between items-start gap-2 md:gap-12 mb-10 md:mb-14 min-w-0 overflow-hidden">
        <div className="flex flex-col text-center min-w-0 flex-1 overflow-hidden">
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-black/70 mb-1 md:mb-2">{t.parentsBride}</p>
          <p className="font-sans text-base md:text-xl lg:text-2xl break-words">{t.brideParentsNames}</p>
        </div>
        <div className="flex flex-col text-center min-w-0 flex-1 overflow-hidden">
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-black/70 mb-1 md:mb-2">{t.parentsGroom}</p>
          <p className="font-sans text-base md:text-xl lg:text-2xl break-words">{t.groomParentsNames}</p>
        </div>
      </div>

      <div className="max-w-2xl lg:max-w-3xl mx-auto">
        <p className="text-center font-sans text-base md:text-lg lg:text-xl text-black/90 leading-relaxed mb-8 md:mb-12 max-w-xl lg:max-w-2xl mx-auto">
          {t.intro}
        </p>

        <div className="text-center mb-6 md:mb-10">
          <h2 className="font-opensans text-4xl md:text-5xl lg:text-7xl text-black tracking-wide">
            Daniel & Marceline
          </h2>
        </div>

        <p className="text-center font-sans text-xl md:text-2xl lg:text-3xl text-black mb-2">
          {t.date}
        </p>
        <div className="flex justify-center mb-4">
          <Countdown embedded />
        </div>

        <p className="text-center font-sans text-xl md:text-2xl lg:text-3xl text-black/90 mt-8 md:mt-10 mb-2">
          {t.ceremony}
        </p>

        <p className="text-center font-sans text-lg md:text-xl lg:text-2xl text-black mb-1 mt-8 md:mt-12">
          {t.venue}
        </p>

        <div className="flex justify-center gap-4 mb-6 mt-4">
          <a
            href={WAZE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.ariaWaze}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-black/40 text-black hover:bg-black/10 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2L4.5 20.29l1.35.71L12 18l6.15 3 1.35-.71L12 2z" />
            </svg>
          </a>
        </div>

        <p className="text-center font-sans text-lg md:text-xl text-black/80 italic mb-4">
          {t.receptionNote}
        </p>
      </div>
    </section>
  )
}
