/**
 * Design 4 – ציפורה ורונן – video hero variant
 */

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RSVP from '../../shared/components/RSVP'
import Countdown from '../../shared/components/Countdown'
import config from './config'

const hebrewDate = new Intl.DateTimeFormat('he-u-ca-hebrew', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(config.targetDate)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
}

export default function Design4Page() {
  const [step, setStep] = useState('cover')
  const navigatingRef = useRef(false)

  const handleNavigate = (target) => {
    if (navigatingRef.current) return
    navigatingRef.current = true
    setStep('content')
    setTimeout(() => {
      const el = document.getElementById(target)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 600)
  }

  return (
    <div
      className="min-h-screen-dvh md:min-h-screen bg-black"
      dir={config.dir}
      lang={config.lang}
    >
      <AnimatePresence mode="wait">
        {step === 'cover' && (
          <motion.div
            key="cover"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full">
              <video
                src={config.videos.heroVideo}
                autoPlay
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.button
                  type="button"
                  onClick={() => handleNavigate('huppa')}
                  onTouchEnd={(e) => { e.preventDefault(); handleNavigate('huppa') }}
                  className="px-8 py-3 border-2 border-white text-white font-serif text-xl tracking-[0.3em] hover:bg-white hover:text-gray-900 transition-colors duration-300 backdrop-blur-sm bg-black/20 cursor-pointer"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                >
                  פתיחה
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: step === 'content' ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className={step === 'content' ? 'bg-white' : 'pointer-events-none fixed inset-0 -z-10'}
      >
        <section id="huppa" className="relative w-full h-screen flex flex-col overflow-hidden">
          <img
            src={config.images.introImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 md:gap-12 px-8 md:px-16 md:max-w-2xl lg:max-w-3xl md:mx-auto">
            <motion.p
              className="text-center font-sans font-bold text-black leading-loose tracking-wide"
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

            <motion.p
              className="text-center font-sans text-black leading-loose"
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
              className="text-center font-sans text-base md:text-lg font-medium text-black tracking-widest"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
            >
              {config.event.verseSource}
            </motion.p>
          </div>

        </section>

        <section className="relative w-full min-h-screen flex items-start justify-center pt-[9rem] md:pt-[9rem] pb-16 md:pb-24 overflow-hidden">
          <img
            src={config.images.detailsImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="relative z-10 flex flex-col items-center justify-center gap-10 md:gap-14 px-8 md:px-16 md:max-w-2xl lg:max-w-3xl md:mx-auto">
            <motion.div
              className="flex flex-row justify-center items-start gap-8 md:gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              variants={fadeUp}
            >
              <div className="flex flex-col text-center">
                <p className="text-sm md:text-base tracking-widest font-semibold text-gray-700 mb-1 md:mb-2">{config.parents.bride.label}</p>
                <p className="font-sans font-bold text-base md:text-2xl lg:text-3xl text-gray-900">{config.parents.bride.names}</p>
              </div>
              <div className="flex flex-col text-center">
                <p className="text-sm md:text-base tracking-widest font-semibold text-gray-700 mb-1 md:mb-2">{config.parents.groom.label}</p>
                <p className="font-sans font-bold text-base md:text-2xl lg:text-3xl text-gray-900">{config.parents.groom.names}</p>
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

            <motion.p
              className="text-center font-sans text-4xl md:text-6xl lg:text-7xl font-black text-gray-900"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              {config.couple.person1.name} ו{config.couple.person2.name}
            </motion.p>

            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
            >
              <p className="font-sans font-black text-2xl md:text-4xl lg:text-5xl text-gray-900 tracking-widest">
                {config.event.dateText}
              </p>
              <p className="font-serif font-semibold text-base md:text-xl text-gray-700 mt-2">
                {hebrewDate}
              </p>
            </motion.div>

            <motion.div
              className="w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
            >
              <Countdown targetDate={config.targetDate} embedded />
            </motion.div>

            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeUp}
            >
              <p className="font-sans font-semibold text-lg md:text-2xl text-gray-800">
                {config.event.receptionText}
              </p>
              <p className="font-sans font-bold text-xl md:text-3xl text-gray-900 mt-2">
                {config.event.ceremonyText}
              </p>
              <p className="font-sans text-3xl md:text-5xl font-black text-gray-900 mt-1">
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

            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              variants={fadeUp}
            >
              <p className="font-serif font-black text-2xl md:text-4xl text-gray-900 mb-1">
                {config.event.venueName}
              </p>
              <p className="font-sans font-semibold text-lg md:text-2xl text-gray-700">
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

        <div id="rsvp" className="relative overflow-hidden">
          <img
            src={config.images.footerImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="relative z-10 [&_section]:md:!min-h-0 [&_section]:md:!justify-start [&_section]:md:!py-12">
            <RSVP config={{ ...config.rsvp, contacts: config.contacts }} />
            <footer className="relative z-10 py-4 bg-transparent">
            <p className="text-center text-[10px] font-bold text-gray-700">
              &copy; TSITYAT - AI Agency
            </p>
          </footer>
          </div>
     
        </div>
      </motion.div>
    </div>
  )
}
