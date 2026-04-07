/**
 * Design 2 – דנה ואופיר – Save the Date
 * Elegant minimalist design with staggered fade-in text.
 */

import Hero from './components/Hero'
import RSVP from '../../shared/components/RSVP'
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
        <div className="absolute inset-0 z-10 flex flex-col justify-between px-5 py-8 md:px-10 md:py-16">
          {/* Parents */}
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <div className="flex flex-row justify-center items-start gap-6 md:gap-16">
              <div className="flex flex-col text-center">
                <p className="text-sm md:text-base tracking-widest text-olive-light mb-0.5 md:mb-2">{config.parents.bride.label}</p>
                <p className="font-serif text-base md:text-3xl lg:text-4xl text-olive">{config.parents.bride.names}</p>
              </div>
              <div className="flex flex-col text-center">
                <p className="text-sm md:text-base tracking-widest text-olive-light mb-0.5 md:mb-2">{config.parents.groom.label}</p>
                <p className="font-serif text-base md:text-3xl lg:text-4xl text-olive">{config.parents.groom.names}</p>
              </div>
            </div>
          </div>

          {/* Invitation text */}
          <p className="text-center font-sans text-lg md:text-3xl lg:text-4xl text-olive leading-relaxed max-w-[80%] md:max-w-xl mx-auto">
            {config.event.invitationText}
          </p>

          {/* Couple names */}
          <p className="text-center font-display text-3xl md:text-5xl lg:text-6xl font-bold text-olive">
            {config.couple.person1.name} ו{config.couple.person2.name}
          </p>

          {/* Date */}
          <div className="text-center">
            <p className="font-sans text-xl md:text-3xl lg:text-4xl text-olive">
              {config.event.dateText}
            </p>
            <p className="font-sans text-base md:text-2xl lg:text-3xl text-olive-light mt-1">
              כ״ו באלול תשפ״ו
            </p>
          </div>

          {/* Ceremony */}
          <div className="text-center">
            <p className="font-sans text-xl md:text-4xl lg:text-5xl text-olive">
              {config.event.ceremonyText}
            </p>
            <p className="font-display text-3xl md:text-5xl font-bold text-olive mt-1">
              {config.event.ceremonyTime}
            </p>
          </div>

          {/* Venue + navigation */}
          <div className="text-center">
            <p className="font-sans text-lg md:text-3xl lg:text-4xl text-olive mb-1">
              {config.event.venueName}
            </p>
            <div className="flex justify-center mt-2">
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
