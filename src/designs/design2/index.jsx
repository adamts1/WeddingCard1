/**
 * Design 2 – דנה ואופיר – Save the Date
 * Elegant minimalist design with staggered fade-in text.
 */

import Hero from './components/Hero'
import RSVP from '../../shared/components/RSVP'
import SectionDivider from '../../shared/components/SectionDivider'
import Countdown from '../../shared/components/Countdown'
import config from './config'

export default function Design2Page() {
  return (
    <div
      className="min-h-screen-dvh md:min-h-screen"
      dir={config.dir}
      lang={config.lang}
      style={{ backgroundImage: `url(${config.images.bgImg})`, backgroundSize: 'cover', backgroundRepeat: 'repeat-y' }}
    >
      <Hero images={config.images} />

      {/* Details section with section2.png background */}
      <section className="relative w-full md:max-w-2xl lg:max-w-3xl md:mx-auto text-olive">
        {/* Background image — inline so it sets the height naturally on mobile */}
        <img
          src={config.images.section2Img}
          alt=""
          className="w-full h-auto block"
          aria-hidden="true"
        />

        {/* Content overlaid on top of the image */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-5 py-8 md:px-10 md:py-16">
          <div className="w-full max-w-2xl mx-auto">
            {/* Invitation text */}
            <p className="text-center font-sans text-sm md:text-xl lg:text-2xl text-olive leading-relaxed mb-6 md:mb-14 max-w-[70%] md:max-w-xl mx-auto">
              {config.event.invitationText}
            </p>

            {/* Parents */}
            <div className="flex flex-row justify-center items-start gap-6 md:gap-16 mb-8 md:mb-16">
              <div className="flex flex-col text-center">
                <p className="text-[9px] md:text-xs tracking-widest text-olive-light mb-0.5 md:mb-2">{config.parents.bride.label}</p>
                <p className="font-serif text-xs md:text-xl lg:text-2xl text-olive">{config.parents.bride.names}</p>
              </div>
              <div className="flex flex-col text-center">
                <p className="text-[9px] md:text-xs tracking-widest text-olive-light mb-0.5 md:mb-2">{config.parents.groom.label}</p>
                <p className="font-serif text-xs md:text-xl lg:text-2xl text-olive">{config.parents.groom.names}</p>
              </div>
            </div>

            {/* Countdown */}
            <div className="flex justify-center mb-6 md:mb-14">
              <Countdown targetDate={config.targetDate} embedded />
            </div>

            {/* Reception */}
            <p className="text-center font-sans text-base md:text-2xl lg:text-3xl text-olive mb-1">
              {config.event.receptionText}
            </p>

            {/* Ceremony */}
            <p className="text-center font-sans text-base md:text-2xl lg:text-3xl text-olive mt-4 md:mt-6 mb-0.5">
              {config.event.ceremonyText}
            </p>
            <p className="text-center font-display text-2xl md:text-4xl font-bold text-olive">
              {config.event.ceremonyTime}
            </p>

            {/* Venue + navigation */}
            <p className="text-center font-sans text-sm md:text-xl lg:text-2xl text-olive mt-6 md:mt-10 mb-1">
              {config.event.venueName}
            </p>

            <div className="flex justify-center mt-2 md:mt-4">
              <a
                href={config.event.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ניווט בוויז"
                className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blush text-olive hover:bg-blush-light/30 transition-colors"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2L4.5 20.29l1.35.71L12 18l6.15 3 1.35-.71L12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <RSVP config={{ ...config.rsvp, contacts: config.contacts }} />

      <footer className="py-4">
        <p className="text-center text-[10px] font-bold text-olive">
          &copy; TSITYAT - AI Agency
        </p>
      </footer>
    </div>
  )
}
