/**
 * Design 3 Hero – Clean white section with the couple's beach photo.
 * The main.png image contains the full hero layout (photo + text + names + date).
 */

export default function Hero({ heroImg }) {
  return (
    <header className="relative w-full bg-white">
      <div className="relative w-full md:max-w-2xl lg:max-w-3xl md:mx-auto">
        <img
          src={heroImg}
          alt="Save the Date – ציפורה ורונן"
          className="w-full h-auto"
        />
      </div>
    </header>
  )
}
