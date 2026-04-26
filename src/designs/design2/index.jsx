/**
 * Design 2 – דנה ואופיר – Save the Date
 * Elegant minimalist design with staggered fade-in text.
 */

import Hero from './components/Hero'
import RSVP from '../../shared/components/RSVP'
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

      {/* Details section */}
      <section
        className="relative w-full md:max-w-2xl lg:max-w-3xl md:mx-auto"
        style={{ backgroundImage: `url(${config.images.bgImg})`, backgroundSize: 'cover' }}
      >
        <div className="relative w-full">
          <img src={config.images.huppa} alt="" className="relative w-full h-auto" />

          {/* Countdown overlay */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[54%] w-[88%] max-w-md">
            <Countdown targetDate={config.targetDate} embedded />
          </div>

          {/* Navigation overlay */}
          <a
            href={config.event.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ניווט בוויז"
            className="absolute left-1/2 -translate-x-1/2 bottom-[30%] flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur border-2 border-blush text-olive hover:bg-blush-light/40 transition-colors shadow-md"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2L4.5 20.29l1.35.71L12 18l6.15 3 1.35-.71L12 2z" />
            </svg>
          </a>
        </div>
      </section>

      <div
        className="pt-40 md:pt-56 [&_#contact_h2]:!font-alef"
        style={{
          backgroundImage: `url(${config.images.rsvpImg}), url(${config.images.bgImg})`,
          backgroundSize: '100% auto, cover',
          backgroundPosition: 'top center, top center',
          backgroundRepeat: 'no-repeat, repeat-y',
        }}
      >
        <RSVP config={{ ...config.rsvp, contacts: config.contacts }} />
      </div>
    </div>
  )
}
