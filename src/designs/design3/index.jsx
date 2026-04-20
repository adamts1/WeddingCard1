/**
 * Design 3 – ציפורה ורונן – Save the Date
 * Two-step cover → main content flow.
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [step, setStep] = useState('cover') // 'cover' | 'menu' | 'content'

  const handleNavigate = (target) => {
    setStep('content')
    setTimeout(() => {
      const el = document.getElementById(target)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 600)
  }

  return (
    <div
      className="min-h-screen-dvh md:min-h-screen bg-white"
      dir={config.dir}
      lang={config.lang}
    >
      <AnimatePresence mode="wait">
        {/* Step 1 – Cover: main.png + "פתיחה" button */}
        {step === 'cover' && (
          <motion.div
            key="cover"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full">
              <img
                src={config.images.heroImg}
                alt="Save the Date – ציפורה ורונן"
                className="w-full h-full object-cover"
              />
              <div className="absolute z-10 left-1/2 -translate-x-1/2 top-[36%]">
                <motion.button
                  onClick={() => handleNavigate('huppa')}
                  className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-sans text-xl tracking-[0.3em] hover:bg-gray-800 hover:text-white transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  פתיחה
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2 – Menu: main2.png + two navigation buttons */}
        {step === 'menu' && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full">
              <img
                src={config.images.topImg}
                alt="ציפורה ורונן"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute z-10 left-1/2 -translate-x-1/2 top-[30%] flex flex-row gap-6">
                <motion.button
                  onClick={() => handleNavigate('huppa')}
                  className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-sans text-xl tracking-[0.3em] hover:bg-gray-800 hover:text-white transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  חופה
                </motion.button>
                <motion.button
                  onClick={() => handleNavigate('rsvp')}
                  className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-sans text-xl tracking-[0.3em] hover:bg-gray-800 hover:text-white transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  RSVP
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content – always rendered, visible after covers dismiss */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: step === 'content' ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className={step === 'content' ? '' : 'pointer-events-none fixed inset-0 -z-10'}
      >
        {/* Section 2 – Blessing text + Jerusalem illustration below */}
        <section id="huppa" className="relative w-full bg-white h-screen flex flex-col overflow-hidden">
          <motion.img
            src={config.images.topImg}
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-0 w-full h-auto block pointer-events-none"
            initial={{ y: '-100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: 'easeOut' }}
          />
          <div className="relative flex flex-col items-center justify-start gap-6 md:gap-12 px-8 md:px-16 mt-[10rem] md:max-w-2xl lg:max-w-3xl md:mx-auto">
            {/* Blessing text */}
            <motion.p
              className="text-center font-sans font-bold text-gray-800 leading-loose tracking-wide"
              style={{ fontSize: '1.1rem' }}
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
              className="text-center font-sans text-gray-700 leading-loose"
              style={{ fontSize: '1.1rem' }}
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
            className="absolute left-0 w-full h-auto block pointer-events-none"
            style={{ bottom: '0' }}
          />
        </section>

        {/* Section 3 – Couple, date, schedule, venue, parents */}
        <section className="relative w-full bg-white min-h-screen flex items-center justify-center py-16 md:py-24 overflow-hidden">
          <div className="relative flex flex-col items-center justify-center gap-10 md:gap-14 px-8 md:px-16 md:max-w-2xl lg:max-w-3xl md:mx-auto">
            {/* Couple names */}
            <motion.p
              className="text-center font-sans text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
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
              custom={1}
              variants={fadeUp}
            >
              <p className="font-sans text-4xl md:text-5xl lg:text-6xl text-gray-800 tracking-widest">
                {config.event.dateText}
              </p>
              <p className="font-sans text-lg md:text-2xl text-gray-500 mt-2">
           י״ג באייר ה׳תשפ״ו
              </p>
            </motion.div>

            <motion.div
              className="w-16 md:w-24 h-px bg-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            />

            {/* Schedule – three columns */}
            <motion.div
              className="w-full grid grid-cols-3 gap-4 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={3}
              variants={fadeUp}
            >
              {config.schedule.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center gap-2 md:gap-3">
                  <p className="font-sans text-base md:text-xl text-gray-700">{item.label}</p>
                  <img src={item.icon} alt="" aria-hidden="true" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                  <p className="font-sans text-2xl md:text-3xl font-bold text-gray-800">{item.time}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="w-16 md:w-24 h-px bg-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
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
              <p className="font-sans text-3xl md:text-5xl text-gray-800 mb-1">
                {config.event.venueName}
              </p>
              <p className="font-sans text-xl md:text-3xl text-gray-500">
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

            <motion.div
              className="w-16 md:w-24 h-px bg-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={6}
              variants={fadeUp}
            />

            {/* Parents */}
            <motion.div
              className="flex flex-row justify-center items-start gap-8 md:gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={7}
              variants={fadeUp}
            >
              <div className="flex flex-col text-center">
                <p className="text-base md:text-lg tracking-widest text-gray-400 mb-1 md:mb-2">{config.parents.bride.label}</p>
                <p className="font-sans text-lg md:text-3xl lg:text-4xl text-gray-800">{config.parents.bride.names}</p>
              </div>
              <div className="flex flex-col text-center">
                <p className="text-base md:text-lg tracking-widest text-gray-400 mb-1 md:mb-2">{config.parents.groom.label}</p>
                <p className="font-sans text-lg md:text-3xl lg:text-4xl text-gray-800">{config.parents.groom.names}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <div id="rsvp">
          <RSVP config={{ ...config.rsvp, contacts: config.contacts }} />
        </div>

        <footer className="py-4 bg-white">
          <p className="text-center text-[10px] font-bold text-gray-400">
            &copy; TSITYAT - AI Agency
          </p>
        </footer>
      </motion.div>
    </div>
  )
}
