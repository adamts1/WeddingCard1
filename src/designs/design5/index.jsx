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
      className="min-h-screen-dvh md:min-h-screen bg-[#FAF5E6]"
      dir={config.dir}
      lang={config.lang}
    >
      <section className="relative w-full h-screen overflow-hidden">
        <video
          src={config.videos.heroVideo}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      <section className="relative w-full min-h-screen flex items-start justify-center pt-[6rem] md:pt-[7rem] pb-16 md:pb-24 overflow-hidden">
        <img
          src={config.images.detailsImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="relative z-10 flex flex-col items-center justify-center gap-10 md:gap-14 px-10 md:px-16 md:max-w-2xl lg:max-w-3xl md:mx-auto">
          <motion.p
            className="text-center font-bold text-[#1E5233] leading-loose tracking-wide"
            style={{ fontSize: '1.1rem', fontFamily: "'Playpen Sans Hebrew', sans-serif" }}
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
            className="w-16 md:w-24 h-px bg-[#2E7D4F]/50"
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
              <p className="text-sm md:text-base tracking-widest font-semibold text-[#1E5233] mb-1 md:mb-2">{config.parents.bride.label}</p>
              <p className="font-serif font-bold text-base md:text-2xl lg:text-3xl text-[#2C2C2C]">{config.parents.bride.names}</p>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-sm md:text-base tracking-widest font-semibold text-[#1E5233] mb-1 md:mb-2">{config.parents.groom.label}</p>
              <p className="font-serif font-bold text-base md:text-2xl lg:text-3xl text-[#2C2C2C]">{config.parents.groom.names}</p>
            </div>
          </motion.div>

          <motion.div
            className="w-16 md:w-24 h-px bg-[#2E7D4F]/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          />

          <motion.p
            className="text-center font-display text-4xl md:text-6xl lg:text-7xl font-black text-[#C0392B]"
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
            <p className="font-sans font-black text-2xl md:text-4xl lg:text-5xl text-[#1E5233] tracking-widest">
              {config.event.dateText}
            </p>
            <p className="font-serif font-semibold text-base md:text-xl text-[#2C2C2C] mt-2">
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
            <p className="font-sans font-semibold text-lg md:text-2xl text-[#2C2C2C]">
              {config.event.receptionText}
            </p>
            <p className="font-sans font-bold text-xl md:text-3xl text-[#1E5233] mt-2">
              {config.event.ceremonyText}
            </p>
            <p className="font-display text-3xl md:text-5xl font-black text-[#C0392B] mt-1">
              {config.event.ceremonyTime}
            </p>
          </motion.div>

          <motion.div
            className="w-16 md:w-24 h-px bg-[#2E7D4F]/50"
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
            <p className="font-serif font-black text-2xl md:text-4xl text-[#1E5233] mb-1">
              {config.event.venueName}
            </p>
            <p className="font-sans font-semibold text-lg md:text-2xl text-[#2C2C2C]">
              {config.event.venueCity}
            </p>
            <div className="flex justify-center mt-4">
              <a
                href={config.event.navigationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ניווט למיקום"
                className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#1E5233] text-[#1E5233] hover:bg-[#1E5233] hover:text-[#FAF5E6] transition-colors"
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
          src={config.images.rsvpImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="relative z-10 [&_section]:md:!min-h-0 [&_section]:md:!justify-start [&_section]:md:!py-12 [&_input]:!bg-transparent [&_textarea]:!bg-transparent [&_input]:!border-[#1E5233]/40 [&_textarea]:!border-[#1E5233]/40 [&_.bg-cream-light\/40]:!bg-transparent [&_.bg-cream-light]:!bg-transparent">
          <RSVP config={{ ...config.rsvp, contacts: config.contacts }} />
          <footer className="relative z-10 py-4 bg-transparent">
            <p className="text-center text-[10px] font-bold text-[#1E5233]">
              &copy; TSITYAT - AI Agency
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
