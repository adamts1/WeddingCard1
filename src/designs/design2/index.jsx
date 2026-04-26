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

      {/* Details section */}
      <section
        className="relative w-full md:max-w-2xl lg:max-w-3xl md:mx-auto"
        style={{ backgroundImage: `url(${config.images.bgImg})`, backgroundSize: 'cover' }}
      >
        <div className="relative w-full">
          <img src={config.images.huppa1} alt="" className="relative w-full h-auto" />
          <img
            src={config.images.huppa2}
            alt=""
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          />
        </div>

        <div className="flex justify-center pb-8 md:pb-12">
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
