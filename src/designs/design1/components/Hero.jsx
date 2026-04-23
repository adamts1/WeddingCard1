/**
 * Hero – static invitation background with animated flower overlays.
 */

import TransparentImage from '../../../shared/components/TransparentImage'

export default function Hero({ images }) {
  const { heroImage, flower1, flower2 } = images

  const flowerRegions = [
    { src: flower1, clip: 'polygon(0 0, 55% 0, 55% 55%, 0 55%)',                           origin: '0% 0%',     anim: 'breeze-tl-a' },
    { src: flower1, clip: 'polygon(45% 0, 100% 0, 100% 55%, 45% 55%)',                     origin: '100% 0%',   anim: 'breeze-tr-a' },
    { src: flower1, clip: 'polygon(0 45%, 55% 45%, 55% 100%, 0 100%)',                      origin: '0% 100%',   anim: 'breeze-bl-a' },
    { src: flower1, clip: 'polygon(45% 45%, 100% 45%, 100% 100%, 45% 100%)',                origin: '100% 100%', anim: 'breeze-br-a' },
    { src: flower2, clip: 'polygon(0 0, 55% 0, 55% 55%, 0 55%)',                           origin: '0% 0%',     anim: 'breeze-tl-b' },
    { src: flower2, clip: 'polygon(45% 0, 100% 0, 100% 55%, 45% 55%)',                     origin: '100% 0%',   anim: 'breeze-tr-b' },
    { src: flower2, clip: 'polygon(0 45%, 55% 45%, 55% 100%, 0 100%)',                      origin: '0% 100%',   anim: 'breeze-bl-b' },
    { src: flower2, clip: 'polygon(45% 45%, 100% 45%, 100% 100%, 45% 100%)',                origin: '100% 100%', anim: 'breeze-br-b' },
  ]

  return (
    <header className="relative w-full bg-cream md:px-4 md:py-6 md:flex md:justify-center">
      <div className="relative w-full h-[100svh] md:h-auto md:max-w-2xl lg:max-w-3xl md:mx-auto md:aspect-[1170/2532] overflow-hidden">
        <img
          src={heroImage}
          alt="Wedding Invitation"
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        />

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
