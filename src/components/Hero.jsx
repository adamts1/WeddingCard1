/**
 * Hero – static invitation background with animated flower overlays.
 * Each flower image is split into 4 corner regions, each animated independently
 * to create the effect of individual clusters swaying in a breeze.
 */

import heroImage from '../../assets/main.png'
import flower1 from '../../assets/flower1.png'
import flower2 from '../../assets/flower2.png'
import TransparentImage from './TransparentImage'

const flowerRegions = [
  // ── flower1.png — 4 corners ──
  { src: flower1, clip: 'polygon(0 0, 55% 0, 55% 55%, 0 55%)',                           origin: '0% 0%',     anim: 'breeze-tl-a' },
  { src: flower1, clip: 'polygon(45% 0, 100% 0, 100% 55%, 45% 55%)',                     origin: '100% 0%',   anim: 'breeze-tr-a' },
  { src: flower1, clip: 'polygon(0 45%, 55% 45%, 55% 100%, 0 100%)',                      origin: '0% 100%',   anim: 'breeze-bl-a' },
  { src: flower1, clip: 'polygon(45% 45%, 100% 45%, 100% 100%, 45% 100%)',                origin: '100% 100%', anim: 'breeze-br-a' },
  // ── flower2.png — 4 corners ──
  { src: flower2, clip: 'polygon(0 0, 55% 0, 55% 55%, 0 55%)',                           origin: '0% 0%',     anim: 'breeze-tl-b' },
  { src: flower2, clip: 'polygon(45% 0, 100% 0, 100% 55%, 45% 55%)',                     origin: '100% 0%',   anim: 'breeze-tr-b' },
  { src: flower2, clip: 'polygon(0 45%, 55% 45%, 55% 100%, 0 100%)',                      origin: '0% 100%',   anim: 'breeze-bl-b' },
  { src: flower2, clip: 'polygon(45% 45%, 100% 45%, 100% 100%, 45% 100%)',                origin: '100% 100%', anim: 'breeze-br-b' },
]

export default function Hero() {
  return (
    <header className="relative w-full min-h-[100dvh] max-md:min-h-[100dvh] md:min-h-screen md:h-auto flex flex-col justify-center px-0 py-0 md:px-2 md:py-6 bg-[#F6F4F0]">
      <div className="relative w-full flex-1 md:flex-none flex flex-col min-h-0 min-w-0 bg-[#F6F4F0] max-md:px-0 md:max-w-3xl lg:max-w-3xl md:mx-auto md:w-full md:justify-center md:items-center md:py-4">

        {/*
          Wrapper – constrains both the invitation and the flowers
          to the exact same area on every screen size.
        */}
        <div className="relative w-full flex-1 md:flex-none md:w-[72%] md:mx-auto">
          {/* Static background – never moves */}
          <img
            src={heroImage}
            alt="Wedding Invitation"
            className="block w-full h-full object-cover rounded-sm animate-fade-in max-md:min-h-[92dvh] max-md:object-cover md:h-auto md:max-w-full md:shrink-0 md:max-h-none"
          />

          {/* 8 independently animated flower regions — pinned to the same bounds */}
          {flowerRegions.map((region, i) => (
            <TransparentImage
              key={i}
              src={region.src}
              alt=""
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 w-full h-full object-cover select-none z-10 ${region.anim}`}
              style={{
                clipPath: region.clip,
                transformOrigin: region.origin,
              }}
            />
          ))}
        </div>
      </div>
    </header>
  )
}
