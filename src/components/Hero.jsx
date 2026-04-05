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
    <header className="relative w-full bg-[#F6F4F0] md:px-4 md:py-6 md:flex md:justify-center">
      {/*
        Wrapper – fills the full mobile viewport (100dvh), edge-to-edge.
        On desktop: capped width, aspect ratio from the image.
      */}
      <div className="relative w-full h-[100dvh] md:h-auto md:max-w-2xl lg:max-w-3xl md:mx-auto md:aspect-[1170/2532] overflow-hidden">
        {/* Static background – never moves */}
        <img
          src={heroImage}
          alt="Wedding Invitation"
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
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
    </header>
  )
}
