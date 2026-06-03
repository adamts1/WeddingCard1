/**
 * Design 7 – הלל ועדי – portrait paper/floral card.
 *  1. Hero    – full image, text baked in.
 *  2. Details – full image, text baked in.
 *  3. RSVP    – image used as a backdrop; the live form flows below the
 *               baked-in "אישור הגעה" title.
 */

import RSVP from '../../shared/components/RSVP'
import Countdown from './components/Countdown'
import config from './config'

export default function Design7Page() {
  return (
    <div
      className="design7-root min-h-screen-dvh md:min-h-screen"
      style={{ backgroundColor: config.paperBg }}
      dir={config.dir}
      lang={config.lang}
    >
      <style>{`
        .design7-root .text-olive,
        .design7-root .text-olive-light { color: #7E632E !important; }
        .design7-rsvp input, .design7-rsvp textarea {
          background-color: rgba(255,255,255,0.5) !important;
          border-color: rgba(156,124,60,0.4) !important;
          caret-color: #9C7C3C !important;
        }
        .design7-rsvp input::placeholder,
        .design7-rsvp textarea::placeholder { color: rgba(126,99,46,0.5) !important; }
      `}</style>

      <div className="mx-auto w-full max-w-[480px]">
        {/* 1. Hero – video background, countdown overlaid on the blank band */}
        <section className="relative w-full aspect-[462/1000] overflow-hidden">
          <video
            src={config.videos.heroVideo}
            poster={config.images.heroImg}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 top-[40%] z-10">
            <Countdown targetDate={config.targetDate} />
          </div>
          {/* dissolve the flowery bottom edge into the paper */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[14%] z-[5]"
            style={{ background: `linear-gradient(to bottom, transparent, ${config.paperBg})` }}
          />
        </section>

        {/* 2. Details */}
        <section className="relative w-full">
          <img src={config.images.detailsImg} alt="" className="block w-full h-auto" />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[7%]"
            style={{ background: `linear-gradient(to top, transparent, ${config.paperBg})` }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[14%]"
            style={{ background: `linear-gradient(to bottom, transparent, ${config.paperBg})` }}
          />
        </section>

        {/* 3. RSVP – image backdrop with the live form below the baked-in title */}
        <section
          id="rsvp"
          className="design7-rsvp relative w-full bg-top bg-no-repeat"
          style={{
            backgroundColor: config.paperBg,
            backgroundImage: `url(${config.images.rsvpImg})`,
            backgroundSize: '100% auto',
          }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[8%]"
            style={{ background: `linear-gradient(to top, transparent, ${config.paperBg})` }}
          />
          {/* pt clears the baked-in title; relative to card width. */}
          <div className="pt-[34%] pb-10 px-5">
            <RSVP config={{ ...config.rsvp, contacts: config.contacts }} />
          </div>
        </section>
      </div>
    </div>
  )
}
