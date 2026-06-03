/**
 * Design 7 – הלל ועדי – portrait paper/floral card.
 *  1. Hero    – video background with a button into the invitation.
 *  2. Details – full image, text baked in.
 *  3. RSVP    – image used as a backdrop; the live form flows below the
 *               baked-in "אישור הגעה" title.
 */

import RSVP from '../../shared/components/RSVP'
import config from './config'

export default function Design7Page() {
  const scrollToDetails = () =>
    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div
      className="design7-root min-h-screen-dvh md:min-h-screen bg-cover bg-top"
      style={{
        backgroundColor: config.paperBg,
        backgroundImage: `url(${config.images.bgImg})`,
      }}
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
        {/* 1. Hero – video background with a button into the invitation */}
        <section className="relative w-full aspect-[462/1000] overflow-hidden">
          <video
            src={config.videos.heroVideo}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 top-[44%] z-10 flex justify-center">
            <button
              type="button"
              onClick={scrollToDetails}
              className="group flex items-center gap-2 rounded-full border border-[#9C7C3C]/40 bg-white/55 backdrop-blur-md px-7 py-3 font-serif text-base tracking-wide text-[#7E632E] shadow-[0_8px_22px_rgba(124,99,46,0.14)] transition-colors hover:bg-white/80"
            >
            כניסה
            </button>
          </div>
        </section>

        {/* 2. Details */}
        <section id="details" className="w-full">
          <img src={config.images.detailsImg} alt="" className="block w-full h-auto" />
        </section>

        {/* 3. RSVP – image backdrop with the live form below the baked-in title */}
        <section
          id="rsvp"
          className="design7-rsvp w-full"
          style={{
            backgroundColor: config.paperBg,
            // rsvpImg (title) on top; the paper texture fills everything below,
            // so adding guests reveals paper instead of flat colour.
            backgroundImage: `url(${config.images.rsvpImg}), url(${config.images.bgImg})`,
            backgroundSize: '100% auto, cover',
            backgroundPosition: 'top center, top center',
            backgroundRepeat: 'no-repeat, no-repeat',
          }}
        >
          {/* pt clears the baked-in title; relative to card width. */}
          <div className="pt-[34%] pb-10 px-5">
            <RSVP config={{ ...config.rsvp, contacts: config.contacts }} />
          </div>
        </section>
      </div>
    </div>
  )
}
