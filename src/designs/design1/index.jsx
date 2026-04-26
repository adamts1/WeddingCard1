/**
 * Design 1 – יעל ואבירם – כ״ה במאי 2026
 */

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import RSVP from '../../shared/components/RSVP'
import config from './config'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Design1Page() {
  return (
    <div
      className="min-h-screen-dvh md:min-h-screen bg-cream font-alef [&_*]:!font-alef"
      dir={config.dir}
      lang={config.lang}
    >
      <div className="animate-page-enter opacity-0">
        <Hero images={config.images} />
        <motion.section
          className="bg-cream flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={config.images.huppaImg}
            alt=""
            className="block w-full h-auto max-w-2xl lg:max-w-3xl"
          />
        </motion.section>
        <div
          className="pt-40 md:pt-56"
          style={{
            backgroundImage: `url(${config.images.rsvpImg})`,
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#F6F4F0',
          }}
        >
          <RSVP config={{ ...config.rsvp, contacts: config.contacts, sectionBg: 'bg-transparent' }} />
        </div>
        <footer className="relative w-full overflow-hidden">
          <div className="w-[200%] -ml-[50%] md:w-full md:ml-0">
            <img
              src={config.images.footerImg}
              alt=""
              className="block w-full h-auto"
            />
          </div>
          <p className="absolute bottom-1 left-0 right-0 text-center text-[10px] font-bold text-olive">
            &copy; TSITYAT - AI Agency
          </p>
        </footer>
      </div>
    </div>
  )
}
