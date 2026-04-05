/**
 * Section 2 – Invitation details: parents, couple names, date, venue, navigation buttons.
 */

import Countdown from './Countdown'

const WAZE_URL = 'https://waze.com/ul?q=123%20Anywhere%20St%20Any%20City'

export default function InvitationDetails() {
  return (
    <section className="min-h-screen-dvh md:min-h-screen flex flex-col justify-center pt-16 md:pt-24 pb-8 md:pb-16 px-6 md:px-10 lg:px-16 bg-cream text-olive">
      <div className="w-full max-w-3xl mx-auto flex flex-row justify-between items-start gap-2 md:gap-12 mb-10 md:mb-14 min-w-0 overflow-hidden">
        <div className="flex flex-col text-center min-w-0 flex-1 overflow-hidden">
          <p className="text-[10px] md:text-xs tracking-widest text-olive-light mb-1 md:mb-2">הורי הכלה</p>
          <p className="font-serif text-base md:text-xl lg:text-2xl break-words text-olive">יצחק ודנית כהן</p>
        </div>
        <div className="flex flex-col text-center min-w-0 flex-1 overflow-hidden">
          <p className="text-[10px] md:text-xs tracking-widest text-olive-light mb-1 md:mb-2">הורי החתן</p>
          <p className="font-serif text-base md:text-xl lg:text-2xl break-words text-olive">שלומית ואורי לוי</p>
        </div>
      </div>

      <div className="max-w-2xl lg:max-w-3xl mx-auto">
        <p className="text-center font-sans text-base md:text-lg lg:text-xl text-olive-light leading-relaxed mb-8 md:mb-12 max-w-xl lg:max-w-2xl mx-auto">
          שמחים להזמינכם לחגוג עמנו את חתונתנו
        </p>

        <div className="text-center mb-6 md:mb-10">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide" style={{ color: '#CF43A8' }}>
            יעל
          </h2>
          <p className="font-serif text-2xl md:text-3xl text-olive-light my-2">&</p>
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide" style={{ color: '#508330' }}>
            אבירם
          </h2>
        </div>

        <p className="text-center font-serif text-xl md:text-2xl lg:text-3xl text-olive mb-2">
          כ״ה במאי 2026
        </p>
        <div className="flex justify-center mb-4">
          <Countdown embedded />
        </div>

        <p className="text-center font-sans text-xl md:text-2xl lg:text-3xl text-olive-light mt-8 md:mt-10 mb-2">
          קבלת פנים בשעה 19:00
        </p>

        <p className="text-center font-sans text-lg md:text-xl lg:text-2xl text-olive mb-1 mt-8 md:mt-12">
          EAST TEL AVIV
        </p>

        <div className="flex justify-center gap-4 mb-6 mt-4">
          <a
            href={WAZE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ניווט בוויז"
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blush text-olive hover:bg-blush-light/30 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2L4.5 20.29l1.35.71L12 18l6.15 3 1.35-.71L12 2z" />
            </svg>
          </a>
        </div>

        <p className="text-center font-sans text-lg md:text-xl text-olive-light italic mb-4">
          חופה וקידושין בשעה 20:00
        </p>
      </div>
    </section>
  )
}
