/**
 * Wedding invitation – single page, smooth scroll.
 * יעל ואבירם – כ״ה במאי 2026.
 */

import Hero from './components/Hero'
import InvitationDetails from './components/InvitationDetails'
import RSVP from './components/RSVP'
import SectionDivider from './components/SectionDivider'

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
        <div
          className="relative w-full h-[48px] md:h-[64px]"
          style={{
            background: 'radial-gradient(57% 116% at 50% 116%, rgb(232, 160, 181) 98%, transparent 99%) center center / 95px 103% repeat-x',
          }}
        >
          <p className="absolute inset-0 flex items-end justify-center pb-0 text-[10px] font-bold text-olive">
            &copy; TSITYAT - AI Agency
          </p>
        </div>
      </div>
    </div>
  )
}
