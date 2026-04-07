/**
 * Design 1 – יעל ואבירם – כ״ה במאי 2026
 */

import Hero from './components/Hero'
import InvitationDetails from './components/InvitationDetails'
import RSVP from '../../shared/components/RSVP'
import SectionDivider from '../../shared/components/SectionDivider'
import config from './config'

export default function Design1Page() {
  return (
    <div
      className="min-h-screen-dvh md:min-h-screen bg-cream"
      dir={config.dir}
      lang={config.lang}
    >
      <div className="animate-page-enter opacity-0">
        <Hero images={config.images} />
        <SectionDivider />
        <InvitationDetails config={config} />
        <SectionDivider />
        <RSVP config={{ ...config.rsvp, contacts: config.contacts }} />
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
