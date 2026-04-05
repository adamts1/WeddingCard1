/**
 * Wedding invitation – single page, smooth scroll.
 * יעל ואבירם – כ״ה במאי 2026.
 */

import Hero from './components/Hero'
import InvitationDetails from './components/InvitationDetails'
import RSVP from './components/RSVP'
import SectionDivider from './components/SectionDivider'
import footerImg from '../assets/footer.png'

export default function App() {
  return (
    <div
      className="min-h-screen-dvh md:min-h-screen bg-cream"
      dir="rtl"
      lang="he"
    >
      <div className="animate-page-enter opacity-0">
        <Hero />
        <SectionDivider />
        <InvitationDetails />
        <SectionDivider />
        <RSVP />
        <footer className="relative w-full overflow-hidden">
          <div className="w-[200%] -ml-[50%] md:w-full md:ml-0">
            <img
              src={footerImg}
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
