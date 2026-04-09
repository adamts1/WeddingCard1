/**
 * Design 3 – ציפורה ורונן – Save the Date
 * Clean hero + dark Jerusalem illustration section + parents/venue.
 */

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import RSVP from '../../shared/components/RSVP'
import config from './config'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
}

export default function Design3Page() {
  return (
    <div
      className="min-h-screen-dvh md:min-h-screen bg-white"
      dir={config.dir}
      lang={config.lang}
    >
      {/* Section 1 – Hero with beach photo */}
      <Hero heroImg={config.images.heroImg} />

      {/* Section 2 – Blessing text + Jerusalem illustration below */}
      <section className="relative w-full bg-white min-h-screen flex flex-col">
        {/* Text content above the image */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-12 px-8 md:px-16 py-12 md:py-20 md:max-w-2xl lg:max-w-3xl md:mx-auto">
          {/* Blessing text */}
          <motion.p
            className="text-center font-serif text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-loose tracking-wide"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fadeUp}
          >
            {config.event.blessing.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < config.event.blessing.split('\n').length - 1 && <br />}
              </span>
            ))}
          </motion.p>

          <motion.div
            className="w-16 md:w-24 h-px bg-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          />

          {/* Biblical verse */}
          <motion.p
            className="text-center font-serif text-lg md:text-2xl lg:text-3xl font-semibold text-gray-600 leading-loose italic"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            variants={fadeUp}
          >
            {config.event.verse}
          </motion.p>
          <motion.p
            className="text-center font-sans text-base md:text-lg font-medium text-gray-400 tracking-widest"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
          >
            {config.event.verseSource}
          </motion.p>
        </div>

        {/* Jerusalem illustration image */}
        <img
          src={config.images.jerusalemImg}
          alt="ירושלים"
          className="w-full h-auto block"
        />
      </section>

      {/* Section 3 – Parents, date, venue */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="flex flex-col items-center gap-10 md:gap-14 px-8 md:px-16 md:max-w-2xl lg:max-w-3xl md:mx-auto">
          {/* Parents */}
          <motion.div
            className="flex flex-row justify-center items-start gap-8 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={fadeUp}
          >
            <div className="flex flex-col text-center">
              <p className="text-sm md:text-base tracking-widest text-gray-400 mb-1 md:mb-2">{config.parents.bride.label}</p>
              <p className="font-serif text-base md:text-2xl lg:text-3xl text-gray-800">{config.parents.bride.names}</p>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-sm md:text-base tracking-widest text-gray-400 mb-1 md:mb-2">{config.parents.groom.label}</p>
              <p className="font-serif text-base md:text-2xl lg:text-3xl text-gray-800">{config.parents.groom.names}</p>
            </div>
          </motion.div>

          <motion.div
            className="w-16 md:w-24 h-px bg-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          />

          {/* Couple names */}
          <motion.p
            className="text-center font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            {config.couple.person1.name} ו{config.couple.person2.name}
          </motion.p>

          {/* Date */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
          >
            <p className="font-sans text-2xl md:text-4xl lg:text-5xl text-gray-800 tracking-widest">
              {config.event.dateText}
            </p>
          </motion.div>

          {/* Ceremony */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
          >
            <p className="font-sans text-lg md:text-2xl text-gray-600">
              {config.event.receptionText}
            </p>
            <p className="font-sans text-xl md:text-3xl text-gray-800 mt-2">
              {config.event.ceremonyText}
            </p>
            <p className="font-display text-3xl md:text-5xl font-bold text-gray-800 mt-1">
              {config.event.ceremonyTime}
            </p>
          </motion.div>

          <motion.div
            className="w-16 md:w-24 h-px bg-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={fadeUp}
          />

          {/* Venue + navigation */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={fadeUp}
          >
            <p className="font-serif text-2xl md:text-4xl text-gray-800 mb-1">
              {config.event.venueName}
            </p>
            <p className="font-sans text-lg md:text-2xl text-gray-500">
              {config.event.venueCity}
            </p>
            <div className="flex justify-center mt-4">
              <a
                href={config.event.navigationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ניווט למיקום"
                className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2L4.5 20.29l1.35.71L12 18l6.15 3 1.35-.71L12 2z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <RSVP config={{ ...config.rsvp, contacts: config.contacts }} />

      <footer className="py-4 bg-white">
        <p className="text-center text-[10px] font-bold text-gray-400">
          &copy; TSITYAT - AI Agency
        </p>
      </footer>
    </div>
  )
}
