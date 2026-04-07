/**
 * Design 2 Hero – watercolor illustration with text overlay that fades in.
 * Mobile-first: images fill the viewport width and scale naturally.
 */

export default function Hero({ images }) {
  const { illustrationImg, textImg, bgImg } = images

  return (
    <header className="relative w-full" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }}>
      {/*
        The text image drives the aspect ratio (it's taller).
        On mobile it spans full width; on desktop it's capped.
      */}
      <div className="relative w-full md:max-w-2xl lg:max-w-3xl md:mx-auto">
        {/* Text layer — sets the container height */}
        <img
          src={textImg}
          alt="Save the Date – דנה ואופיר"
          className="relative w-full h-auto z-10 design2-fade-text"
        />

        {/* Watercolor illustration — positioned behind, centered */}
        <img
          src={illustrationImg}
          alt=""
          className="absolute inset-0 w-full h-full object-contain object-center design2-fade-illustration"
        />
      </div>
    </header>
  )
}
