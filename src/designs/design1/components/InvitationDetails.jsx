/**
 * Invitation details: parents, couple names, date, venue, navigation.
 */

import Countdown from '../../../shared/components/Countdown'

export default function InvitationDetails({ config }) {
  const { couple, parents, event, targetDate } = config

  return (
    <section className="min-h-screen-dvh md:min-h-screen flex flex-col justify-center pt-16 md:pt-24 pb-8 md:pb-16 px-6 md:px-10 lg:px-16 bg-cream text-olive">
      <div className="w-full max-w-3xl mx-auto flex flex-row justify-between items-start gap-2 md:gap-12 mb-10 md:mb-14 min-w-0 overflow-hidden">
        <div className="flex flex-col text-center min-w-0 flex-1 overflow-hidden">
          <p className="text-[10px] md:text-xs tracking-widest text-olive-light mb-1 md:mb-2">{parents.bride.label}</p>
          <p className="font-serif text-base md:text-xl lg:text-2xl break-words text-olive">{parents.bride.names}</p>
        </div>
        <div className="flex flex-col text-center min-w-0 flex-1 overflow-hidden">
          <p className="text-[10px] md:text-xs tracking-widest text-olive-light mb-1 md:mb-2">{parents.groom.label}</p>
          <p className="font-serif text-base md:text-xl lg:text-2xl break-words text-olive">{parents.groom.names}</p>
        </div>
      </div>

      <div className="max-w-2xl lg:max-w-3xl mx-auto">
        <p className="text-center font-sans text-base md:text-lg lg:text-xl text-olive-light leading-relaxed mb-8 md:mb-12 max-w-xl lg:max-w-2xl mx-auto">
          {event.invitationText}
        </p>

        <div className="text-center mb-6 md:mb-10">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide" style={{ color: couple.person1.color }}>
            {couple.person1.name}
          </h2>
          <p className="font-serif text-2xl md:text-3xl text-olive-light my-2">&</p>
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide" style={{ color: couple.person2.color }}>
            {couple.person2.name}
          </h2>
        </div>

        <p className="text-center font-serif text-xl md:text-2xl lg:text-3xl text-olive mb-2">
          {event.dateText}
        </p>
        <div className="flex justify-center mb-4">
          <Countdown targetDate={targetDate} embedded />
        </div>

        <p className="text-center font-sans text-xl md:text-2xl lg:text-3xl text-olive-light mt-8 md:mt-10 mb-2">
          {event.receptionText}
        </p>

        <p className="text-center font-sans text-lg md:text-xl lg:text-2xl text-olive mb-1 mt-8 md:mt-12">
          {event.venueName}
        </p>

        <div className="flex justify-center gap-4 mb-6 mt-4">
          <a
            href={event.wazeUrl}
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
          {event.ceremonyText}
        </p>
      </div>
    </section>
  )
}
