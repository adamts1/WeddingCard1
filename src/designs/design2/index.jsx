/**
 * Design 2 – דנה ואופיר – Save the Date
 * Elegant minimalist design with staggered fade-in text.
 */

import { motion } from 'framer-motion'
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

      <section className="relative w-full md:max-w-2xl lg:max-w-3xl md:mx-auto text-olive overflow-hidden">
        {/* Decorative lavender sprigs with gentle breeze */}
        <motion.img
          src={config.images.lavender[0]}
          alt="" aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 w-16 md:w-24 opacity-70 -translate-x-2 -translate-y-2"
          style={{ originX: 0.5, originY: 0 }}
          animate={{ rotate: [-20, -14, -22, -16, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img
          src={config.images.lavender[1]}
          alt="" aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 w-16 md:w-24 opacity-70 translate-x-2 -translate-y-2"
          style={{ originX: 0.5, originY: 0, scaleX: -1 }}
          animate={{ rotate: [20, 14, 23, 17, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />


        <div className="relative z-10 flex flex-col justify-between px-5 py-8 md:px-10 md:py-16">
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

      {/* Blessing section */}
      <section className="relative w-full md:max-w-2xl lg:max-w-3xl md:mx-auto text-olive overflow-hidden py-12 md:py-20">
        {/* Left lavender column */}
        <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-20 md:w-32 flex flex-col justify-between items-start">
          <motion.img
            src={config.images.lavender[0]}
            alt="" aria-hidden="true"
            className="w-14 md:w-24 opacity-60"
            style={{ originX: 0.5, originY: 0 }}
            animate={{ rotate: [-15, -8, -18, -10, -15] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={config.images.lavender[3]}
            alt="" aria-hidden="true"
            className="w-12 md:w-20 opacity-50 ml-2"
            style={{ originX: 0.5, originY: 1 }}
            animate={{ rotate: [-5, 3, -7, 2, -5] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={config.images.lavender[2]}
            alt="" aria-hidden="true"
            className="w-14 md:w-24 opacity-60"
            style={{ originX: 0.5, originY: 1 }}
            animate={{ rotate: [-10, -4, -14, -6, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Right lavender column */}
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-20 md:w-32 flex flex-col justify-between items-end">
          <motion.img
            src={config.images.lavender[1]}
            alt="" aria-hidden="true"
            className="w-14 md:w-24 opacity-60"
            style={{ originX: 0.5, originY: 0, scaleX: -1 }}
            animate={{ rotate: [15, 8, 18, 10, 15] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={config.images.lavender[4]}
            alt="" aria-hidden="true"
            className="w-12 md:w-20 opacity-50 mr-2"
            style={{ originX: 0.5, originY: 1, scaleX: -1 }}
            animate={{ rotate: [5, -3, 7, -2, 5] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={config.images.lavender[2]}
            alt="" aria-hidden="true"
            className="w-14 md:w-24 opacity-60"
            style={{ originX: 0.5, originY: 1, scaleX: -1 }}
            animate={{ rotate: [10, 4, 14, 6, 10] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center gap-10 md:gap-16 px-16 md:px-28">
          <p className="text-center font-serif text-lg md:text-2xl lg:text-3xl text-olive leading-loose tracking-wide">
            בשמחה רבה ובהודיה אינסופית לה׳
            <br />
            אנו שמחים להזמינכם לחגוג עמנו
            <br />
            את נישואי ילדינו
          </p>

          <div className="w-16 md:w-24 h-px bg-blush" />

          <p className="text-center font-serif text-base md:text-xl lg:text-2xl text-olive-light leading-loose italic">
            ״יהי שלום בחילך
            <br />
            שלווה בארמנותייך״
          </p>
          <p className="text-center font-sans text-sm md:text-base text-olive-muted tracking-widest">
            (תהילים קכ״ב, ז׳)
          </p>
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
