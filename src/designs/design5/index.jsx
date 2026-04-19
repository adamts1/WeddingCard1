/**
 * Design 5 – ציפורה ורונן – tropical/India themed, 3 sections
 */

import { motion } from 'framer-motion'
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

export default function Design5Page() {
  return (
    <div
      className="design5-root min-h-screen-dvh md:min-h-screen bg-[#fff6]"
      dir={config.dir}
      lang={config.lang}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alef:wght@400;700&family=Fredoka:wght@300..700&family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Playpen+Sans+Hebrew:wght@100..800&family=Suez+One&display=swap');
        .design5-root, .design5-root * { font-family: 'Google Sans', sans-serif !important; }
        .design5-root .text-olive,
        .design5-root .text-olive-light { color: #ff7051 !important; }
        .design5-root .bg-cream-light { background-color: transparent !important; }
        .design5-rsvp, .design5-rsvp * { color: #ff7051 !important; }
        .design5-rsvp .text-olive, .design5-rsvp .text-olive-light { color: #ff7051 !important; }
        .design5-rsvp input, .design5-rsvp textarea { caret-color: #ff7051 !important; border-color: #ff7051 !important; }
        .design5-rsvp input::placeholder, .design5-rsvp textarea::placeholder { color: #ff7051 !important; opacity: 0.7; }
        .design5-rsvp button[type="submit"], .design5-rsvp form button { background-color: #ff7051 !important; color: #fff6 !important; border-color: #ff7051 !important; }
        .design5-rsvp button[type="submit"] *, .design5-rsvp form button * { color: #fff6 !important; }
        .design5-rsvp .tabular-nums.text-olive,
        .design5-rsvp span.tabular-nums { color: #ff7051 !important; }
      `}</style>
      <section className="relative w-full h-screen overflow-hidden">
        <video
          src={config.videos.heroVideo}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      <section className="relative w-full flex items-start justify-center pt-32 md:pt-48 pb-6 md:pb-10 overflow-hidden bg-[#fff6e7]">
        <img
          src={config.images.detailsImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="design5-frame relative z-10 mx-4 md:mx-auto md:max-w-2xl lg:max-w-3xl p-[6px] md:p-[8px]">
          <div className="p-1 md:p-1.5">
            <div className="flex flex-col items-center justify-center gap-8 md:gap-12 px-8 md:px-16 py-8 md:py-10">
          <motion.p
            className="text-center font-bold text-[#ff7051] leading-loose tracking-wide"
            style={{ fontSize: '1.1rem', fontFamily: "'Google Sans', sans-serif" }}
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
            className="w-16 md:w-24 h-px bg-[#ff7051]/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          />

          <motion.div
            className="flex flex-row justify-center items-start gap-8 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            variants={fadeUp}
          >
            <div className="flex flex-col text-center">
              <p className="text-sm md:text-base tracking-widest font-semibold text-[#ff7051] mb-1 md:mb-2">{config.parents.bride.label}</p>
              <p className="font-serif font-bold text-base md:text-2xl lg:text-3xl text-[#ff7051]">{config.parents.bride.names}</p>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-sm md:text-base tracking-widest font-semibold text-[#ff7051] mb-1 md:mb-2">{config.parents.groom.label}</p>
              <p className="font-serif font-bold text-base md:text-2xl lg:text-3xl text-[#ff7051]">{config.parents.groom.names}</p>
            </div>
          </motion.div>

          <motion.div
            className="w-16 md:w-24 h-px bg-[#ff7051]/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          />

          <motion.p
            className="text-center font-display text-4xl md:text-6xl lg:text-7xl font-black text-[#ff7051]"
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
            <p className="font-sans font-black text-2xl md:text-4xl lg:text-5xl text-[#ff7051] tracking-widest">
              {config.event.dateText}
            </p>
            <p className="font-serif font-semibold text-base md:text-xl text-[#ff7051] mt-2">
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
            <p className="font-sans font-semibold text-lg md:text-2xl text-[#ff7051]">
              {config.event.receptionText}
            </p>
            <p className="font-sans font-bold text-xl md:text-3xl text-[#ff7051] mt-2">
              {config.event.ceremonyText}
            </p>
            <p className="font-display text-3xl md:text-5xl font-black text-[#ff7051] mt-1">
              {config.event.ceremonyTime}
            </p>
          </motion.div>

          <motion.div
            className="w-16 md:w-24 h-px bg-[#ff7051]/50"
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
            <p className="font-serif font-black text-2xl md:text-4xl text-[#ff7051] mb-1">
              {config.event.venueName}
            </p>
            <p className="font-sans font-semibold text-lg md:text-2xl text-[#ff7051]">
              {config.event.venueCity}
            </p>
            <div className="flex justify-center mt-4">
              <a
                href={config.event.navigationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ניווט למיקום"
                className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#ff7051] text-[#ff7051] hover:bg-[#ff7051] hover:text-[#ff7051] transition-colors"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2L4.5 20.29l1.35.71L12 18l6.15 3 1.35-.71L12 2z" />
                </svg>
              </a>
            </div>
          </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div id="rsvp" className="relative overflow-hidden design5-rsvp bg-[#fff6e7]">
        <img
          src={config.images.rsvpImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ objectPosition: 'center 80%' }}
        />
        <div className="relative z-10 [&_section]:md:!min-h-0 [&_section]:md:!justify-start [&_section]:md:!py-12 [&_input]:!bg-transparent [&_textarea]:!bg-transparent [&_input]:!border-[#ff7051]/40 [&_textarea]:!border-[#ff7051]/40 [&_.bg-cream-light\/40]:!bg-transparent [&_.bg-cream-light]:!bg-transparent">
          <RSVP config={{ ...config.rsvp, contacts: config.contacts }} />
          <footer className="relative z-10 py-4 bg-transparent">
        
          </footer>
        </div>
      </div>
    </div>
  )
}
